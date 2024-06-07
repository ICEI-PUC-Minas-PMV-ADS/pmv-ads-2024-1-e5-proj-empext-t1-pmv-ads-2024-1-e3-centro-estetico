/*
  Warnings:

  - You are about to drop the column `ArmLeft` on the `appointment_body_data` table. All the data in the column will be lost.
  - You are about to drop the column `ArmRight` on the `appointment_body_data` table. All the data in the column will be lost.
  - You are about to drop the column `ChestLeft` on the `appointment_body_data` table. All the data in the column will be lost.
  - You are about to drop the column `ChestRight` on the `appointment_body_data` table. All the data in the column will be lost.
  - You are about to drop the column `LegLeft` on the `appointment_body_data` table. All the data in the column will be lost.
  - You are about to drop the column `LegRight` on the `appointment_body_data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "appointment_body_data" DROP COLUMN "ArmLeft",
DROP COLUMN "ArmRight",
DROP COLUMN "ChestLeft",
DROP COLUMN "ChestRight",
DROP COLUMN "LegLeft",
DROP COLUMN "LegRight",
ADD COLUMN     "armLeft" DOUBLE PRECISION,
ADD COLUMN     "armRight" DOUBLE PRECISION,
ADD COLUMN     "chestLeft" DOUBLE PRECISION,
ADD COLUMN     "chestRight" DOUBLE PRECISION,
ADD COLUMN     "legLeft" DOUBLE PRECISION,
ADD COLUMN     "legRight" DOUBLE PRECISION;
