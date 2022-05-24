/*
  Warnings:

  - You are about to drop the column `code_bar` on the `Purchases` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "code_bar" TEXT;

-- AlterTable
ALTER TABLE "Purchases" DROP COLUMN "code_bar";
