# IQTest

## 🚀 Project Overview

**IQTest** is a scalable and efficient IQ testing platform built using modern web technologies. It leverages a microservices architecture to ensure high performance and reliability.

## 🛠 Tech Stack

- **NestJS** - Backend framework for building efficient and scalable applications.
- **Microservices** - Architecture pattern for decoupling services.
- **PostgreSQL** - Relational database for managing structured data.
- **GraphQL** - API query language for flexible data fetching.
- **Docker** - Containerization for seamless deployment and scalability.

## 📦 Installation & Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Clone the Repository

```bash
git clone https://github.com/imransid/IQTest.git
cd iqtest
```

### Environment Variables

Create a `.env` file in the root directory and configure the required environment variables:

```env
DATABASE_URL=postgres://user:password@localhost:5432/iqtest
PORT=3000
GRAPHQL_ENDPOINT=/graphql
```

### Run Services with Docker

Start the application using Docker Compose:

```bash
docker-compose up --build
```

This will spin up the necessary services, including PostgreSQL and microservices.

### Manual Setup (Without Docker)

If you prefer running the services manually:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the PostgreSQL database:
   ```bash
   docker run --name iqtest-db -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=iqtest -p 5432:5432 -d postgres
   ```
3. Run the application:
   ```bash
   npm run start:dev
   ```

## 🔍 API Usage

### GraphQL Playground

Once the server is running, access the GraphQL playground at:

```
http://localhost:3000/graphql
```

## 🛠 Development & Contribution

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes and push:
   ```bash
   git push origin feature-branch
   ```
4. Create a Pull Request for review.

docker exec 02e383bf2add npx prisma generate --schema=./prisma/schema-page-builder.prisma
docker exec 02e383bf2add npx prisma migrate deploy --schema=./prisma/schema-user.prisma
docker exec 02e383bf2add npx prisma db push --force-reset --schema=./prisma/schema-user.prisma
docker exec 210eccb332fb npx prisma db push --force-reset --schema=./prisma/schema-page-builder.prisma

## 📜 License

This project is licensed under the [MIT License](LICENSE).
