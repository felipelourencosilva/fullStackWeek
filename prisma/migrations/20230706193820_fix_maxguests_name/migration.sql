/*
  Warnings:

  - You are about to drop the column `maxGuestes` on the `Trip` table. All the data in the column will be lost.
  - Added the required column `maxGuests` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "maxGuestes",
ADD COLUMN     "maxGuests" INTEGER NOT NULL;
