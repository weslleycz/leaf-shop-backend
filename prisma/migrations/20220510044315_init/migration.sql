/*
  Warnings:

  - You are about to drop the column `purchaseId` on the `Products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_purchaseId_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "purchaseId";

-- AlterTable
ALTER TABLE "Purchases" ADD COLUMN     "Products" JSONB[];
