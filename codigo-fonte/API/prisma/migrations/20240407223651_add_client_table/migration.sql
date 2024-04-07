/*
  Warnings:

  - You are about to drop the column `user_id` on the `appointment_history` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `body_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `hair_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `health_questionnaire` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `skin_analysis` table. All the data in the column will be lost.
  - Added the required column `client_id` to the `appointment_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_id` to the `body_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_id` to the `hair_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_id` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_id` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "appointment_history" DROP CONSTRAINT "appointment_history_user_id_fkey";

-- DropForeignKey
ALTER TABLE "body_analysis" DROP CONSTRAINT "body_analysis_user_id_fkey";

-- DropForeignKey
ALTER TABLE "hair_analysis" DROP CONSTRAINT "hair_analysis_user_id_fkey";

-- DropForeignKey
ALTER TABLE "health_questionnaire" DROP CONSTRAINT "health_questionnaire_user_id_fkey";

-- DropForeignKey
ALTER TABLE "skin_analysis" DROP CONSTRAINT "skin_analysis_user_id_fkey";

-- AlterTable
ALTER TABLE "appointment_history" DROP COLUMN "user_id",
ADD COLUMN     "client_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "body_analysis" DROP COLUMN "user_id",
ADD COLUMN     "client_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "hair_analysis" DROP COLUMN "user_id",
ADD COLUMN     "client_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "health_questionnaire" DROP COLUMN "user_id",
ADD COLUMN     "client_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "skin_analysis" DROP COLUMN "user_id",
ADD COLUMN     "client_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "address" TEXT,
    "phone" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "additional_information" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "hair_analysis" ADD CONSTRAINT "hair_analysis_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skin_analysis" ADD CONSTRAINT "skin_analysis_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "body_analysis" ADD CONSTRAINT "body_analysis_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment_history" ADD CONSTRAINT "appointment_history_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "health_questionnaire" ADD CONSTRAINT "health_questionnaire_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
