/*
  Warnings:

  - You are about to drop the column `epilepsy_` on the `health_questionnaire` table. All the data in the column will be lost.
  - Added the required column `epilepsy` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "health_questionnaire" DROP COLUMN "epilepsy_",
ADD COLUMN     "epilepsy" BOOLEAN NOT NULL;
