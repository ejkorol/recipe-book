# Recipe Book API

An open-source API for managing recipes, built with Express and TypeScript using Prisma.

## Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd recipe-book
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up Prisma:**

    1. **Create a `.env` file in the root directory and add the `DATABASE_URL` variable:**

       ```env
       DATABASE_URL="mysql://username:password@localhost:3306/mydatabase"
       ```

    2. **Generate the Prisma client:**

       ```bash
       npx prisma generate
       ```

    3. **Run migrations to set up the database schema:**

       ```bash
       npx prisma migrate dev --name init
       ```

## Configuration

- **`.env` file**: Store environment variables, including `DATABASE_URL` for Prisma and `PORT` for the server.
  
- **`src/api.ts`**: Entry point for the application; sets up the Express server, middleware, and routes.

## Project Structure

recipe-book/
├── src/
│ ├── controllers/
│ │ └── recipeController.ts
│ ├── models/
│ │ └── recipeModel.ts
│ ├── services/
│ │ └── recipeService.ts
│ ├── routes/
│ │ └── recipeRoutes.ts
│ ├── utils/
│ │ └── database.ts
│ ├── api.ts
│ └── config.ts
├── dist/
│ └── ...
├── .env
├── package.json
├── tsconfig.json
└── README.md

- **`src/controllers/`**: Manages request processing and response generation (e.g., `recipeController.ts`).
- **`src/models/`**: Defines data schema and database interactions using Prisma (e.g., `recipeModel.ts`).
- **`src/services/`**: Contains business logic and operations (e.g., `recipeService.ts`).
- **`src/routes/`**: Maps HTTP requests to controller functions (e.g., `recipeRoutes.ts`).
- **`src/utils/`**: Provides utility functions and configurations (e.g., `database.ts`).
- **`dist/`**: Compiled JavaScript files.

## Development

To start the development server with automatic reloading, run:

```bash
npm run dev
```

# Minecraft Item Categories

## 1. Raw Ingredients

- **Ores & Raw Materials**: 
  - Iron Ore
  - Gold Ore
  - Coal Ore
  - Raw Iron
  - Raw Gold

- **Plant-Based**: 
  - Wheat
  - Sugar Cane
  - Cocoa Beans
  - Seeds

- **Animal Products**: 
  - Raw Beef
  - Raw Porkchop
  - Raw Chicken
  - Eggs

## 2. Processed Ingredients

- **Crafted Items**: 
  - Iron Ingot
  - Gold Ingot
  - Coal
  - Bread
  - Cooked Beef

- **Crafting Materials**: 

  - Wood Planks
  - Stone Bricks
  - Iron Bars
  - Glass

- **Food**: 
  - Cooked Porkchop
  - Cooked Chicken
  - Cake

## 3. Building & Decoration

- **Blocks**: 
  - Stone
  - Wood Planks
  - Bricks
  - Sandstone

- **Decoration**: 
  - Flower Pots
  - Paintings
  - Carpets
  - Lanterns

## 4. Tools & Weapons

- **Tools**: 
  - Pickaxes
  - Shovels
  - Axes
  - Bows

- **Weapons**: 
  - Swords
  - Crossbows
  - Tridents

## 5. Armor

- **Protective Gear**: 
  - Helmets
  - Chestplates
  - Leggings
  - Boots

## 6. Redstone Components

- **Basic Components**: 
  - Redstone Dust
  - Levers
  - Pressure Plates

- **Advanced Components**: 
  - Pistons
  - Hoppers
  - Comparators

## 7. Brewing & Potions

- **Brewing Ingredients**: 
  - Blaze Powder
  - Nether Wart
  - Glass Bottles

- **Potions**: 
  - Healing Potions
  - Speed Potions
  - Strength Potions

## 8. Miscellaneous

- **Other Items**: 
  - Maps
  - Compasses
  - Name Tags
  - Spawn Eggs

- **Music Discs**: 
  - Cat
  - Blocks
  - 13
  - Chirp

## 9. Transportation

- **Transport Items**: 
  - Boats
  - Minecarts
  - Rails
  - Elytra
