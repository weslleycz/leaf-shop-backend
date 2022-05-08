/*
  Warnings:

  - Added the required column `Addresses` to the `Farmers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Farmers` table without a default value. This is not possible if the table is not empty.
  - Made the column `birth_date` on table `Farmers` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Farmers_id_key";

-- AlterTable
ALTER TABLE "Farmers" ADD COLUMN     "Addresses" JSONB NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ALTER COLUMN "birth_date" SET NOT NULL;
