-- CreateTable
CREATE TABLE `blocks` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `displayName` VARCHAR(191) NOT NULL,
    `hardness` DOUBLE NOT NULL,
    `resistance` DOUBLE NOT NULL,
    `stackSize` INTEGER NOT NULL,
    `diggable` BOOLEAN NOT NULL,
    `material` VARCHAR(191) NOT NULL,
    `transparent` BOOLEAN NOT NULL,
    `emitLight` INTEGER NOT NULL,
    `filterLight` INTEGER NOT NULL,
    `defaultState` INTEGER NOT NULL,
    `minStateId` INTEGER NOT NULL,
    `maxStateId` INTEGER NOT NULL,
    `boundingBox` VARCHAR(191) NOT NULL,
    `states` JSON NULL,
    `drops` JSON NULL,
    `harvestTools` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `foods` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `stackSize` INTEGER NOT NULL,
    `displayName` VARCHAR(191) NOT NULL,
    `foodPoints` INTEGER NOT NULL,
    `saturation` DOUBLE NOT NULL,
    `effectiveQuality` DOUBLE NOT NULL,
    `saturationRatio` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `biomes` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `temperature` DOUBLE NOT NULL,
    `precipitation` VARCHAR(191) NOT NULL,
    `dimension` VARCHAR(191) NOT NULL,
    `displayName` VARCHAR(191) NOT NULL,
    `color` INTEGER NOT NULL,
    `rainfall` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entities` (
    `id` INTEGER NOT NULL,
    `internalId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `displayName` VARCHAR(191) NOT NULL,
    `width` DOUBLE NOT NULL,
    `height` DOUBLE NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `items` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `displayName` VARCHAR(191) NOT NULL,
    `stackSize` INTEGER NOT NULL,
    `enchantCategories` JSON NULL,
    `repairWith` JSON NULL,
    `maxDurability` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `materials` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `data` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `recipes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ingredients` JSON NULL,
    `recipe` JSON NULL,
    `result` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
