/*
  Warnings:

  - You are about to drop the column `description` on the `appointment_history` table. All the data in the column will be lost.
  - Added the required column `appointment_type` to the `appointment_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `presencial` to the `appointment_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `appointment_history` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AppointmentType" AS ENUM ('Hair', 'Skin', 'Body');

-- AlterTable
ALTER TABLE "appointment_history" DROP COLUMN "description",
ADD COLUMN     "appointment_type" "AppointmentType" NOT NULL,
ADD COLUMN     "presencial" BOOLEAN NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "appointment_history" ADD CONSTRAINT "appointment_history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
