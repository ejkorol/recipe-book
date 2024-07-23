# Recipe Book API

An open-source API for managing recipes, built with Express and TypeScript using Prisma.

#### Quick Nav
- [Installation](#installation)
- [Architecture](#project-structure)
- [Running the Api](#development)
- [API documentation](#api-documentation)


## Installation

1. **Clone the repository**

### SSH

    ```bash
    $ git clone git@github.com:ejkorol/recipe-book.git
    ```

### HTTPS

    ```bash
    $ git clone https://github.com/ejkorol/recipe-book.git
    ```

2. **Install dependencies**

    ```
    $ cd recipe-book
    $ npm install
    ```

3. **Set up ENV variables**

    1. Create a .env file in the root directory and add `.env.sample` variables with your own sercrets:

    ```bash
    $ touch .env
    $ cat .env.sample > .env
    ```

    > For development purposes, set `NODE_ENV=development`

    2. Add the `DATABASE_URL` variable with your own config:

    ```.env
    PORT=8080 // localhost port
    DATABASE_URL=mysql://username:password@localhost:port/db // This prisma config uses mySQL
    NODE_ENV=development
    ```

3. **Set up Prisma client**
    
    1. Reset db

    ```bash
    $ npx prisma migrate reset
    ```

    2. Run the migration

    ```bash
    $ npx prisma migrate dev
    ```

    3. Generate prisma client

    ```bash
    $ npx prisma generate
    ```

    > Ensure database exists prior to migrating.

4. **Seeding the database**

    Quick Note:
    Located in `./data/index.ts` exists versions of Minecraft (pc/java edition) that have the data supported for this API.

    Formatted as:

    ```ts
    const data = {
        "VERSION": {
            files: {
                blocks: "./path/from/root/to/data/file",
                biomes: "./path/from/root/to/data/file",
                foods: "./path/from/root/to/data/file",
                entities: "./path/from/root/to/data/file",
                items: "./path/from/root/to/data/file",
                materials: "./path/from/root/to/data/file",
                recipes: "./path/from/root/to/data/file" 
            }
        }
    };
    ```

    1. **Setup seeding script:**

    Located in `./src/seed/seed.ts` exists the script to handle the seeding process of the above data:

    ```ts
    import { data } from "../../data";
    import {
        blocks,
        foods,
        biomes,
        entities,
        items,
        materials,
        recipes
    } from "./scripts/1.20.2/index" // this is the version of the scripts

    const version = "1.20.2"; // this is the version of data
    const paths = data[version].files

    const main = async () => {
        await blocks(paths.blocks);
        await foods(paths.foods);
        await biomes(paths.biomes);
        await entities(paths.entities);
        await items(paths.items);
        await materials(paths.materials);
        await recipes(paths.recipes);
    };

    main();
    ```

    Ensure that `version` is the version of data you intend to seed, and such that it exists in `./data/index.ts`.

    Ensure that the scripts for that version exists in `./src/seed/scripts`.

    > In the event that the seed script for the latest version does not exist, please use the most recent script.

    2. **Seed the database:**

    Prior to running the seed script, do a reset of the last seeded data in prisma, and migrate the latest version of schemas:

    ```bash
    $ npx prisma migrate reset
    ```

    ```bash
    $ npx prisma migrate dev
    ```

    Run the seeding script:

    ```bash
    $ npm run seed
    ```

    3. To ensure the data has been successfully seeded:

    ```bash
    $ npx prisma studio
    ```

    Will open a front-end to preview the seeded data in prisma.

## Project Structure

```
recipe-book/
├── data/
│ ├── DATA_VERSION/
│ └── index.ts
├── src/
│ ├── controllers/
│ ├── middleware/
│ ├── routes/
│ │ └── index.ts
│ ├── schemas/
│ ├── seed/
│ │  ├── scripts/
│ │  │ └──  DATA_VERSION/
│ │  └── seed.ts
│ ├── services/
│ ├── utils/
│ └── api.ts
├── dist/
├── types/
├── .env
└── README.md
```

- **`data/`**: Contains versionized data of (pc/java) data used in the API
- **`src/controllers/`**: Manages request processing and response generation
- **`src/middleware/`**: Manages useful middlware used by the api (i.e. error handling, typeguards, rate limits)
- **`src/routes/`**: Maps HTTP requests to controller functions
- **`src/schemas/`**: Manages schemas for zod typechecks
- **`src/seed/`**: Manages seed scripts and versionized seed history
- **`src/services/`**: Contains business logic and operations
- **`src/utils/`**: Provides utility functions and configurations
- **`types/`**: For organizing types (always prefaced with I<type> and exported from singular `index`)
- **`dist/`**: Compiled JavaScript files

## Development

To start the development server with automatic reloading, run:

    ```bash
    $ npm run dev
    ```

> Ensure that you have correctly performed the [Installation](#installation).

# API Documentation

#### Table of Contents
- [Foodstuffs](./docs/api/foods.md)
