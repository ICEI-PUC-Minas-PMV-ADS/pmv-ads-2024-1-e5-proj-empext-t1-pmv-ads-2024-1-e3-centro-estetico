/*
  Warnings:

  - You are about to drop the column `Methacryl_or_botulinum_toxin` on the `health_questionnaire` table. All the data in the column will be lost.
  - You are about to drop the column `authorize_photos` on the `health_questionnaire` table. All the data in the column will be lost.
  - You are about to drop the column `sunscreen` on the `health_questionnaire` table. All the data in the column will be lost.
  - Added the required column `methacryl_or_botulinum_toxin` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sun_care` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "health_questionnaire" DROP COLUMN "Methacryl_or_botulinum_toxin",
DROP COLUMN "authorize_photos",
DROP COLUMN "sunscreen",
ADD COLUMN     "kidney_problem_description" TEXT,
ADD COLUMN     "methacryl_or_botulinum_toxin" BOOLEAN NOT NULL,
ADD COLUMN     "problem_description" TEXT,
ADD COLUMN     "sun_care" BOOLEAN NOT NULL,
ALTER COLUMN "diabetes_is_controlled" DROP NOT NULL,
ALTER COLUMN "diabetes_is_controlled" SET DATA TYPE TEXT;
