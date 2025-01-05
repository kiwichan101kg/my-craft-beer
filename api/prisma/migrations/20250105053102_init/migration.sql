-- AlterTable
ALTER TABLE `Beer` MODIFY `brewery` VARCHAR(191) NULL,
    MODIFY `beerStyle` VARCHAR(191) NULL,
    MODIFY `alcohol` VARCHAR(191) NULL,
    MODIFY `location` VARCHAR(191) NULL,
    MODIFY `purchasePlace` VARCHAR(191) NULL,
    MODIFY `date` DATETIME(3) NULL,
    MODIFY `aroma` INTEGER NULL,
    MODIFY `body` INTEGER NULL,
    MODIFY `bitterness` INTEGER NULL,
    MODIFY `acidity` INTEGER NULL,
    MODIFY `sweetness` INTEGER NULL,
    MODIFY `pairings` JSON NULL;
