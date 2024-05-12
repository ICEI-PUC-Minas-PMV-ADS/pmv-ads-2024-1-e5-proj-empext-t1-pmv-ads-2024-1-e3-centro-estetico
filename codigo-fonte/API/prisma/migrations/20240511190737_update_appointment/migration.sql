/*
  Warnings:

  - Made the column `specialty` on table `appointment_history` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "appointment_history" ALTER COLUMN "specialty" SET NOT NULL;
