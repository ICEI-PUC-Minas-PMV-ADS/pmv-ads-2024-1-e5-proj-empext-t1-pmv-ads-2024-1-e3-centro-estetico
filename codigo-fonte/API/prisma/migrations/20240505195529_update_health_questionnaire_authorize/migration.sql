/*
  Warnings:

  - Added the required column `authorize_data` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "health_questionnaire" ADD COLUMN     "authorize_data" BOOLEAN NOT NULL,
ADD COLUMN     "authorize_photos" BOOLEAN NOT NULL DEFAULT false;
