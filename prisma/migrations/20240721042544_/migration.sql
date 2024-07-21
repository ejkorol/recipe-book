/*
  Warnings:

  - The primary key for the `drops` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `item` on the `drops` table. All the data in the column will be lost.
  - You are about to drop the column `oreId` on the `drops` table. All the data in the column will be lost.
  - The primary key for the `ores` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `color` on the `ores` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ores` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ores` table. All the data in the column will be lost.
  - You are about to drop the column `texture` on the `ores` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `ores` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `drops` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `ores` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `itemId` to the `drops` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemId` to the `ores` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `drops` DROP FOREIGN KEY `drops_oreId_fkey`;

-- AlterTable
ALTER TABLE `drops` DROP PRIMARY KEY,
    DROP COLUMN `item`,
    DROP COLUMN `oreId`,
    ADD COLUMN `itemId` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `ores` DROP PRIMARY KEY,
    DROP COLUMN `color`,
    DROP COLUMN `description`,
    DROP COLUMN `name`,
    DROP COLUMN `texture`,
    DROP COLUMN `type`,
    ADD COLUMN `itemId` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `items` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,

    UNIQUE INDEX `items_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `drops_id_key` ON `drops`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `ores_id_key` ON `ores`(`id`);

-- AddForeignKey
ALTER TABLE `drops` ADD CONSTRAINT `drops_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `items`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ores` ADD CONSTRAINT `ores_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `items`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
