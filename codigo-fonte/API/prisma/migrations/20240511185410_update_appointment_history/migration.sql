/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "appointment_history" ADD COLUMN     "appointment_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "specialty" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");
