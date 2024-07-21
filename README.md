# Recipe Book API

An open-source API for managing recipes, built with Express and TypeScript using Prisma.

#### Quick Nav
- [Installation](#installation)
- [Config](#config)
- [Project Architecture](#project-structure)
- [Running the Api](#development)
- [API documentation](#api-documentation)


## Installation

1. **Clone the repository:**

    ```
    git clone <repository-url>
    cd recipe-book
    ```

2. **Install dependencies:**

    ```
    npm install
    ```

3. **Set up Prisma:**

    1. **Create a `.env` file in the root directory and add the `DATABASE_URL` variable:**

    ```
    DATABASE_URL="mysql://username:password@localhost:3306/mydatabase"
    ```

    2. **Generate the Prisma client:**

    ```
    npx prisma generate
    ```

    3. **Run migrations to set up the database schema:**

    ```
    npx prisma migrate dev
    ```

## Config

- **`.env` file**: Store environment variables
  
- **`src/api.ts`**: Entry point

## Project Structure

```
recipe-book/
├── src/
│ ├── controllers/
│ │ └── fooController.ts
│ ├── services/
│ │ └── fooService.ts
│ ├── routes/
│ │ └── fooRoutes.ts
│ ├── utils/
│ │ └── prismaClient.ts
│ └── api.ts
├── dist/
│ └── ...
├── types/
│ └── ...
├── .gitignore
├── .env
├── .env.sample
├── package-lock.json
├── package.json
├── tsconfig.json
└── README.md
```

- **`src/controllers/`**: Manages request processing and response generation
- **`src/services/`**: Contains business logic and operations
- **`src/routes/`**: Maps HTTP requests to controller functions
- **`src/utils/`**: Provides utility functions and configurations
- **`types/`**: For organizing types (always prefaced with I<type> and exported from singular `index`)
- **`dist/`**: Compiled JavaScript files

## Development

To start the development server with automatic reloading, run:

    ```
    npm run dev
    ```

# API Documentation

#### Table of Contents
- [Items](./docs/api/items/post-items.md)
- [Item Types](./docs/api/types/post-types.md)
- [Item Attributes](./docs/api/attributes/post-attributes.md)
