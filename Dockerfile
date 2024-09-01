# Base image
FROM node:18-alpine as base

# Install dependencies required for building
RUN apk add --no-cache g++ make py3-pip libc6-compat

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Build the application
FROM base as builder
COPY . .
RUN npm run build

# Production stage
FROM base as production

# Set environment variables
ENV NODE_ENV=production

# Copy built files and node_modules from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Add and use non-root user for production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD npm start

# Development stage
FROM base as dev

# Set environment variables
ENV NODE_ENV=development

# Install development dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Start the development server
CMD npm run dev
