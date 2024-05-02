/*
  Warnings:

  - You are about to drop the `hair_analysis` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "hair_analysis" DROP CONSTRAINT "hair_analysis_client_id_fkey";

-- DropTable
DROP TABLE "hair_analysis";
