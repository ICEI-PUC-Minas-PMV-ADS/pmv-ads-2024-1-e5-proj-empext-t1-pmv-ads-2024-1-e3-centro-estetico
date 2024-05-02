/*
  Warnings:

  - You are about to drop the column `acid_use_on_skin` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `alcoholic_beverage_use` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `allergy_history` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `authorize_photos` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `autoimmune_disease` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `balanced_diet` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `breastfeeding` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `cardiac_issues` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `contraceptive_use` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `cosmetic_use` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `daily_water_intake` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `dental_prosthesis` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `depression` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `diabetes` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `epilepsy` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `has_plates_pins` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `hepatic_issues` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `herpes_history` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `hormonal_disorder` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `hormone_use` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `hypertension` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `hypotension` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `infectious_disease` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `isotretinoin_use` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `main_complaint` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `medical_treatment` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `medication_use` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `menstrual_cycle` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `metacril_toxin_use` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `oncological_history` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `pregnancy` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `previous_aesthetic_procedure` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `regular_intestine` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `renal_issue` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `scarring_issues` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `skin_care` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `sleeps_well` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `smoker` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `sports_practice` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `substance_use` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `sun_exposure` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `sunscreen_use` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `surgery` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `thrombosis` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `thyroid_problems` on the `skin_analysis` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `skin_analysis` table. All the data in the column will be lost.
  - Added the required column `bloodVesselsAnemicNevus` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bloodVesselsCyanosis` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bloodVesselsErythema` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bloodVesselsHypertrophic` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bloodVesselsKeloid` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bloodVesselsTelangiectasias` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scarsHypertrophic` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "skin_analysis" DROP COLUMN "acid_use_on_skin",
DROP COLUMN "alcoholic_beverage_use",
DROP COLUMN "allergy_history",
DROP COLUMN "authorize_photos",
DROP COLUMN "autoimmune_disease",
DROP COLUMN "balanced_diet",
DROP COLUMN "breastfeeding",
DROP COLUMN "cardiac_issues",
DROP COLUMN "contraceptive_use",
DROP COLUMN "cosmetic_use",
DROP COLUMN "created_at",
DROP COLUMN "daily_water_intake",
DROP COLUMN "dental_prosthesis",
DROP COLUMN "depression",
DROP COLUMN "diabetes",
DROP COLUMN "epilepsy",
DROP COLUMN "has_plates_pins",
DROP COLUMN "hepatic_issues",
DROP COLUMN "herpes_history",
DROP COLUMN "hormonal_disorder",
DROP COLUMN "hormone_use",
DROP COLUMN "hypertension",
DROP COLUMN "hypotension",
DROP COLUMN "infectious_disease",
DROP COLUMN "isotretinoin_use",
DROP COLUMN "main_complaint",
DROP COLUMN "medical_treatment",
DROP COLUMN "medication_use",
DROP COLUMN "menstrual_cycle",
DROP COLUMN "metacril_toxin_use",
DROP COLUMN "oncological_history",
DROP COLUMN "pregnancy",
DROP COLUMN "previous_aesthetic_procedure",
DROP COLUMN "regular_intestine",
DROP COLUMN "renal_issue",
DROP COLUMN "scarring_issues",
DROP COLUMN "skin_care",
DROP COLUMN "sleeps_well",
DROP COLUMN "smoker",
DROP COLUMN "sports_practice",
DROP COLUMN "substance_use",
DROP COLUMN "sun_exposure",
DROP COLUMN "sunscreen_use",
DROP COLUMN "surgery",
DROP COLUMN "thrombosis",
DROP COLUMN "thyroid_problems",
DROP COLUMN "updated_at",
ADD COLUMN     "acneGrades" TEXT,
ADD COLUMN     "additionalInformation" TEXT,
ADD COLUMN     "bloodVesselsAnemicNevus" BOOLEAN NOT NULL,
ADD COLUMN     "bloodVesselsCouperose" TEXT,
ADD COLUMN     "bloodVesselsCyanosis" BOOLEAN NOT NULL,
ADD COLUMN     "bloodVesselsErythema" BOOLEAN NOT NULL,
ADD COLUMN     "bloodVesselsHypertrophic" BOOLEAN NOT NULL,
ADD COLUMN     "bloodVesselsHypotrophic" TEXT,
ADD COLUMN     "bloodVesselsKeloid" BOOLEAN NOT NULL,
ADD COLUMN     "bloodVesselsNerve" TEXT,
ADD COLUMN     "bloodVesselsTelangiectasias" BOOLEAN NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dehydrationLevels" TEXT,
ADD COLUMN     "fluidSkinLesions" TEXT[],
ADD COLUMN     "hypotonias" TEXT[],
ADD COLUMN     "melanotics" TEXT[],
ADD COLUMN     "notMelanotics" TEXT[],
ADD COLUMN     "oilinessLevels" TEXT,
ADD COLUMN     "others" TEXT,
ADD COLUMN     "pigmentedSpots" TEXT[],
ADD COLUMN     "poreSizes" TEXT,
ADD COLUMN     "purpuricSpots" TEXT[],
ADD COLUMN     "scarsHypertrophic" BOOLEAN NOT NULL,
ADD COLUMN     "scarsHypotrophic" TEXT,
ADD COLUMN     "scarsKeloid" TEXT,
ADD COLUMN     "skinColors" TEXT,
ADD COLUMN     "skinContains" TEXT[],
ADD COLUMN     "skinInvolutionLine" TEXT,
ADD COLUMN     "skinInvolutionSulcus" TEXT,
ADD COLUMN     "skinLesions" TEXT[],
ADD COLUMN     "skinPhototypes" TEXT,
ADD COLUMN     "skinTextures" TEXT,
ADD COLUMN     "skinTypes" TEXT,
ADD COLUMN     "tyrichosis" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
