/*
  Warnings:

  - Made the column `birth_date` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "birth_date" SET NOT NULL;
