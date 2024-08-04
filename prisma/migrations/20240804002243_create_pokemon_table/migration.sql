-- CreateTable
CREATE TABLE `pokemon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `picture` VARCHAR(191) NULL,
    `moves` JSON NULL,
    `types` JSON NULL,
    `caught` BOOLEAN NOT NULL DEFAULT false,
    `released` BOOLEAN NOT NULL DEFAULT false,
    `nickname` VARCHAR(191) NULL,
    `description` LONGTEXT NULL,
    `rename_count` INTEGER DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
