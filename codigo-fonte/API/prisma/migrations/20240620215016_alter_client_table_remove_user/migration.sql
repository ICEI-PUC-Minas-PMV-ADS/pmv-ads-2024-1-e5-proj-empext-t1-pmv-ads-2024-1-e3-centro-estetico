/*
  Warnings:

  - You are about to drop the column `user_id` on the `clients` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_user_id_fkey";

-- AlterTable
ALTER TABLE "clients" DROP COLUMN "user_id";
