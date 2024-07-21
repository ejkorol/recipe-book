-- CreateTable
CREATE TABLE `ores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `hardness` DOUBLE NOT NULL,
    `blastResistance` DOUBLE NOT NULL,
    `toolRequired` VARCHAR(191) NOT NULL,
    `minableWith` JSON NOT NULL,
    `texture` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `drops` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `oreId` INTEGER NOT NULL,
    `item` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `drops` ADD CONSTRAINT `drops_oreId_fkey` FOREIGN KEY (`oreId`) REFERENCES `ores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
