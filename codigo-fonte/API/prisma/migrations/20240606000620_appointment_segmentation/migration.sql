/*
  Warnings:

  - You are about to drop the column `frontFace0` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `frontFace1` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `frontFace10` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `frontFace11` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `frontFace2` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `frontFace3` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `frontFace4` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `frontFace5` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `frontFace6` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `frontFace7` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `frontFace8` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `frontFace9` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `leftFace0` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `leftFace1` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `leftFace10` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `leftFace2` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `leftFace3` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `leftFace4` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `leftFace5` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `leftFace6` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `leftFace7` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `leftFace8` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `leftFace9` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `rightFace0` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `rightFace1` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `rightFace10` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `rightFace2` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `rightFace3` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `rightFace4` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `rightFace5` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `rightFace6` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `rightFace7` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `rightFace8` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `rightFace9` on the `appointment_history` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "appointment_history" DROP COLUMN "frontFace0",
DROP COLUMN "frontFace1",
DROP COLUMN "frontFace10",
DROP COLUMN "frontFace11",
DROP COLUMN "frontFace2",
DROP COLUMN "frontFace3",
DROP COLUMN "frontFace4",
DROP COLUMN "frontFace5",
DROP COLUMN "frontFace6",
DROP COLUMN "frontFace7",
DROP COLUMN "frontFace8",
DROP COLUMN "frontFace9",
DROP COLUMN "leftFace0",
DROP COLUMN "leftFace1",
DROP COLUMN "leftFace10",
DROP COLUMN "leftFace2",
DROP COLUMN "leftFace3",
DROP COLUMN "leftFace4",
DROP COLUMN "leftFace5",
DROP COLUMN "leftFace6",
DROP COLUMN "leftFace7",
DROP COLUMN "leftFace8",
DROP COLUMN "leftFace9",
DROP COLUMN "rightFace0",
DROP COLUMN "rightFace1",
DROP COLUMN "rightFace10",
DROP COLUMN "rightFace2",
DROP COLUMN "rightFace3",
DROP COLUMN "rightFace4",
DROP COLUMN "rightFace5",
DROP COLUMN "rightFace6",
DROP COLUMN "rightFace7",
DROP COLUMN "rightFace8",
DROP COLUMN "rightFace9";

-- CreateTable
CREATE TABLE "appointment_skin_data" (
    "id" TEXT NOT NULL,
    "appointment_id" TEXT NOT NULL,
    "leftFace0" BOOLEAN NOT NULL DEFAULT false,
    "leftFace1" BOOLEAN NOT NULL DEFAULT false,
    "leftFace2" BOOLEAN NOT NULL DEFAULT false,
    "leftFace3" BOOLEAN NOT NULL DEFAULT false,
    "leftFace4" BOOLEAN NOT NULL DEFAULT false,
    "leftFace5" BOOLEAN NOT NULL DEFAULT false,
    "leftFace6" BOOLEAN NOT NULL DEFAULT false,
    "leftFace7" BOOLEAN NOT NULL DEFAULT false,
    "leftFace8" BOOLEAN NOT NULL DEFAULT false,
    "leftFace9" BOOLEAN NOT NULL DEFAULT false,
    "leftFace10" BOOLEAN NOT NULL DEFAULT false,
    "rightFace0" BOOLEAN NOT NULL DEFAULT false,
    "rightFace1" BOOLEAN NOT NULL DEFAULT false,
    "rightFace2" BOOLEAN NOT NULL DEFAULT false,
    "rightFace3" BOOLEAN NOT NULL DEFAULT false,
    "rightFace4" BOOLEAN NOT NULL DEFAULT false,
    "rightFace5" BOOLEAN NOT NULL DEFAULT false,
    "rightFace6" BOOLEAN NOT NULL DEFAULT false,
    "rightFace7" BOOLEAN NOT NULL DEFAULT false,
    "rightFace8" BOOLEAN NOT NULL DEFAULT false,
    "rightFace9" BOOLEAN NOT NULL DEFAULT false,
    "rightFace10" BOOLEAN NOT NULL DEFAULT false,
    "frontFace0" BOOLEAN NOT NULL DEFAULT false,
    "frontFace1" BOOLEAN NOT NULL DEFAULT false,
    "frontFace2" BOOLEAN NOT NULL DEFAULT false,
    "frontFace3" BOOLEAN NOT NULL DEFAULT false,
    "frontFace4" BOOLEAN NOT NULL DEFAULT false,
    "frontFace5" BOOLEAN NOT NULL DEFAULT false,
    "frontFace6" BOOLEAN NOT NULL DEFAULT false,
    "frontFace7" BOOLEAN NOT NULL DEFAULT false,
    "frontFace8" BOOLEAN NOT NULL DEFAULT false,
    "frontFace9" BOOLEAN NOT NULL DEFAULT false,
    "frontFace10" BOOLEAN NOT NULL DEFAULT false,
    "frontFace11" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "appointment_skin_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointment_body_data" (
    "id" TEXT NOT NULL,
    "appointment_id" TEXT NOT NULL,
    "backBody0" BOOLEAN NOT NULL DEFAULT false,
    "backBody1" BOOLEAN NOT NULL DEFAULT false,
    "backBody2" BOOLEAN NOT NULL DEFAULT false,
    "backBody3" BOOLEAN NOT NULL DEFAULT false,
    "backBody4" BOOLEAN NOT NULL DEFAULT false,
    "backBody5" BOOLEAN NOT NULL DEFAULT false,
    "backBody6" BOOLEAN NOT NULL DEFAULT false,
    "backBody7" BOOLEAN NOT NULL DEFAULT false,
    "backBody8" BOOLEAN NOT NULL DEFAULT false,
    "backBody9" BOOLEAN NOT NULL DEFAULT false,
    "backBody10" BOOLEAN NOT NULL DEFAULT false,
    "backBody11" BOOLEAN NOT NULL DEFAULT false,
    "backBody12" BOOLEAN NOT NULL DEFAULT false,
    "backBody13" BOOLEAN NOT NULL DEFAULT false,
    "backBody14" BOOLEAN NOT NULL DEFAULT false,
    "backBody15" BOOLEAN NOT NULL DEFAULT false,
    "backBody16" BOOLEAN NOT NULL DEFAULT false,
    "backBody17" BOOLEAN NOT NULL DEFAULT false,
    "backBody18" BOOLEAN NOT NULL DEFAULT false,
    "backBody19" BOOLEAN NOT NULL DEFAULT false,
    "backBody20" BOOLEAN NOT NULL DEFAULT false,
    "backBody21" BOOLEAN NOT NULL DEFAULT false,
    "frontBody0" BOOLEAN NOT NULL DEFAULT false,
    "frontBody1" BOOLEAN NOT NULL DEFAULT false,
    "frontBody2" BOOLEAN NOT NULL DEFAULT false,
    "frontBody3" BOOLEAN NOT NULL DEFAULT false,
    "frontBody4" BOOLEAN NOT NULL DEFAULT false,
    "frontBody5" BOOLEAN NOT NULL DEFAULT false,
    "frontBody6" BOOLEAN NOT NULL DEFAULT false,
    "frontBody7" BOOLEAN NOT NULL DEFAULT false,
    "frontBody8" BOOLEAN NOT NULL DEFAULT false,
    "frontBody9" BOOLEAN NOT NULL DEFAULT false,
    "frontBody10" BOOLEAN NOT NULL DEFAULT false,
    "frontBody11" BOOLEAN NOT NULL DEFAULT false,
    "frontBody12" BOOLEAN NOT NULL DEFAULT false,
    "frontBody13" BOOLEAN NOT NULL DEFAULT false,
    "frontBody14" BOOLEAN NOT NULL DEFAULT false,
    "frontBody15" BOOLEAN NOT NULL DEFAULT false,
    "frontBody16" BOOLEAN NOT NULL DEFAULT false,
    "frontBody17" BOOLEAN NOT NULL DEFAULT false,
    "frontBody18" BOOLEAN NOT NULL DEFAULT false,
    "frontBody19" BOOLEAN NOT NULL DEFAULT false,
    "frontBody20" BOOLEAN NOT NULL DEFAULT false,
    "frontBody21" BOOLEAN NOT NULL DEFAULT false,
    "abdomenTop" DOUBLE PRECISION,
    "abdomenBottom" DOUBLE PRECISION,
    "waist" DOUBLE PRECISION,
    "hip" DOUBLE PRECISION,
    "upperLegProxRight" DOUBLE PRECISION,
    "upperLegProxLeft" DOUBLE PRECISION,
    "mediumLegRight" DOUBLE PRECISION,
    "mediumLegLeft" DOUBLE PRECISION,
    "distalLegRight" DOUBLE PRECISION,
    "distalLegLeft" DOUBLE PRECISION,
    "LegRight" DOUBLE PRECISION,
    "LegLeft" DOUBLE PRECISION,
    "ArmRight" DOUBLE PRECISION,
    "ArmLeft" DOUBLE PRECISION,
    "ChestRight" DOUBLE PRECISION,
    "ChestLeft" DOUBLE PRECISION,

    CONSTRAINT "appointment_body_data_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "appointment_skin_data" ADD CONSTRAINT "appointment_skin_data_appointment_id_fkey" FOREIGN KEY ("appointment_id") REFERENCES "appointment_history"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment_body_data" ADD CONSTRAINT "appointment_body_data_appointment_id_fkey" FOREIGN KEY ("appointment_id") REFERENCES "appointment_history"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
