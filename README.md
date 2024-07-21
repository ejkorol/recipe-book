# Recipe Book API

An open-source API for managing recipes, built with Express and TypeScript using Prisma.

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
├── .gitignore
├── .env
├── .env.sample
├── package-lock.json
├── package.json
├── tsconfig.json
└── README.md

- **`src/controllers/`**: Manages request processing and response generation
- **`src/services/`**: Contains business logic and operations
- **`src/routes/`**: Maps HTTP requests to controller functions
- **`src/utils/`**: Provides utility functions and configurations
- **`dist/`**: Compiled JavaScript files.

## Development

To start the development server with automatic reloading, run:

    ```
    npm run dev
    ```

# Minecraft Item Categories

## 1. Raw Ingredients

- **Ores**: 
  - Iron Ore
  - Gold Ore
  - Coal Ore

- **Raw Materials:**
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
