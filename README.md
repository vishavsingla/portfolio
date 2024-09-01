# Portfolio Project

## Description

This project is a portfolio application built with [Next.js](https://nextjs.org/), styled with [Tailwind CSS](https://tailwindcss.com/), and written in [TypeScript](https://www.typescriptlang.org/). The project includes a Docker setup for ease of deployment and development.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

You can install dependencies using `npm` or `yarn`:

```bash
npm install
# or
yarn install
```

## Running the Application

### Locally

To run the application locally, use:

```bash
npm run dev
```

This will start the development server on http://localhost:3000.

### Using Docker

To run the application using Docker, you can use either Docker Compose or individual Docker commands.

#### Docker Compose

Docker Compose allows you to build and run the application in a containerized environment. Run the following command:

```bash
docker compose up 
```

This will build the Docker image and start the container. The application will be accessible at http://localhost:3000.

#### Docker Commands

If you prefer to use Docker commands directly, follow these steps:

1. **Build the Docker Image**

```bash
docker build --file Dockerfile --target production -t yourusername/portfolio:latest .
```

This command builds the Docker image for production. Replace `yourusername` with your Docker Hub username.

2. **Run the Docker Container**

```bash
docker run -p 3000:3000 yourusername/portfolio:latest
```

This command runs the Docker container and maps port 3000 in the container to port 3000 on your host machine. The application will be accessible at http://localhost:3000.

## Dockerfile

The Dockerfile provided sets up different stages for building and running the application:

* **Base Stage**: Installs dependencies and sets up the working environment.
* **Builder Stage**: Builds the Next.js application.
* **Production Stage**: Sets up the production environment with the built application.
* **Development Stage**: Sets up the development environment for running the application in development mode.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

If you have any questions or need further assistance, feel free to reach out to [your email].

Happy coding!