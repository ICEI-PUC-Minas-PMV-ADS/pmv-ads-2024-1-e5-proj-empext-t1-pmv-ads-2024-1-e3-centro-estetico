/*
  Warnings:

  - You are about to drop the column `description` on the `health_questionnaire` table. All the data in the column will be lost.
  - You are about to drop the column `observations` on the `health_questionnaire` table. All the data in the column will be lost.
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
  - Added the required column `Methacryl_or_botulinum_toxin` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `acid_skin` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aesthetic_procedure` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alcohol` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `allergy_history` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorize_photos` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `auto_immune_disease` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `balanced_diet` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bowel_function` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `breastfeeding` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardiac_issues` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cicatrization` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contraceptive` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cosmetic` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dental_prosthesis` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `depression` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diabetes` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diabetes_is_controlled` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drink_water` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drugs` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `epilepsy_` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `herpes` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hormonal_disorder` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hormones` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hypertension` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hypertension_is_controlled` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hypotension` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hypotension_is_controlled` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `infectious_disease` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kidney_problem` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `liver_problem` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medical_treatment` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medication_use` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `menstrual_cycle` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oncological_history` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plates_pins` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `practice_sports` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pregnant` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roaccutane` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skin_care` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sleep` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smoke` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sun_exposure` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sunscreen` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surgery` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thrombosis` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thyroid_problem` to the `health_questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Hirsurtism_trichose` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `abscess_liquid_injuries` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `abscess_presence_of` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `acromica_pigmented_spot` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alipidic_cutaneous` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `anemic_blood_vessel` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `asphyxia_cutaneous` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `balanced_oiliness` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `black_skin` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bruise_non_meianodermal` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bruise_purpuric_spot` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bubble_liquid_injuries` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chloasma_melanodermic` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comedo_solid_injuries` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comedones_presence_of` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conglobat_acne` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cornedogenic_acne` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `couperouse_blood_vessel` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `crust_others` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cyanosis_blood_vessel` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cyanotic_coloring` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cyst_liquid_injuries` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cysts_presence_of` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dark_brunette_skin` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deep_dehydration` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `der_pap_nigra_solid_injuries` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dilated_ostia` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ecchymosis_purpuric_spot` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `edemaciated_cutaneous` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ephelides_melanodermic` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `erythema_blood_vessel` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eudemic_cutaneous` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `excessive_oiliness` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `folliculitis_trichose` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grooves_nail_involution` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hyperchromic_pigmented_spot` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hypertrichosis_trichose` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hypertrophic_blood_vessel` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hypertrophic_scar` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hypochromic_pigmented_spot` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hypotrophic_blood_vessel` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hypotrophic_scar` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imperceptive_ostia` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `increased_oiliness` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `keloid_blood_vessel` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `keloid_scar` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `keratosis_solid_injuries` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `light_brunette_skin` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `line_nail_involution` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lipid_cutaneous` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `melasma_melanodermic` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `micropigmentation_non_meianodermal` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `millium_solid_injuries` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mixed_cutaneous` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moderate_brunette_skin` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nasolabial_hypotonia` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neck_hypotonia` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nevus_blood_vessel` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `new_melanodermic_melanodermic` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nodularcystic_acne` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nodules_presence_of` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nodules_solid_injuries` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `normal_texture` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `normalhydration_dehydration` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `other_skin` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pale_coloring` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `papilloma_solid_injuries` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `papule_solid_injuries` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `papules_presence_of` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `papulopustular_acne` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periorbicularmelanosis_melanodermic` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `petechiae_non_meianodermal` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `petechiae_purpuric_spot` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photodermatoses_others` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pustule_liquid_injuries` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pustules_presence_of` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `red_coloring` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rosacea_cutaneous` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rough_texture` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scales_others` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seborrheic_cutaneous` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sensitive_cutaneous` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slim_texture` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `submental_hypotonia` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `superficial_dehydration` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `syringoma_solid_injuries` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tattoo_non_meianodermal` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telangiectasias_blood_vessel` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thick_texture` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unidentified_injury_others` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unstressed_cutaneous` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vegetation_solid_injuries` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vesicle_liquid_injuries` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vibice_purpuric_spot` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `white_skin` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yellow_coloring` to the `skin_analysis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "health_questionnaire" DROP COLUMN "description",
DROP COLUMN "observations",
ADD COLUMN     "Methacryl_or_botulinum_toxin" BOOLEAN NOT NULL,
ADD COLUMN     "acid_skin" BOOLEAN NOT NULL,
ADD COLUMN     "aesthetic_procedure" BOOLEAN NOT NULL,
ADD COLUMN     "aesthetic_procedure_description" TEXT,
ADD COLUMN     "alcohol" BOOLEAN NOT NULL,
ADD COLUMN     "allergy_history" BOOLEAN NOT NULL,
ADD COLUMN     "authorize_photos" BOOLEAN NOT NULL,
ADD COLUMN     "auto_immune_disease" BOOLEAN NOT NULL,
ADD COLUMN     "balanced_diet" BOOLEAN NOT NULL,
ADD COLUMN     "bowel_function" BOOLEAN NOT NULL,
ADD COLUMN     "breastfeeding" BOOLEAN NOT NULL,
ADD COLUMN     "cardiac_issues" BOOLEAN NOT NULL,
ADD COLUMN     "cardiac_issues_description" TEXT,
ADD COLUMN     "cicatrization" BOOLEAN NOT NULL,
ADD COLUMN     "contraceptive" BOOLEAN NOT NULL,
ADD COLUMN     "cosmetic" BOOLEAN NOT NULL,
ADD COLUMN     "cosmetic_description" TEXT,
ADD COLUMN     "dental_prosthesis" BOOLEAN NOT NULL,
ADD COLUMN     "depression" BOOLEAN NOT NULL,
ADD COLUMN     "diabetes" BOOLEAN NOT NULL,
ADD COLUMN     "diabetes_is_controlled" BOOLEAN NOT NULL,
ADD COLUMN     "drink_water" TEXT NOT NULL,
ADD COLUMN     "drugs" BOOLEAN NOT NULL,
ADD COLUMN     "epilepsy_" BOOLEAN NOT NULL,
ADD COLUMN     "herpes" BOOLEAN NOT NULL,
ADD COLUMN     "hormonal_disorder" BOOLEAN NOT NULL,
ADD COLUMN     "hormones" BOOLEAN NOT NULL,
ADD COLUMN     "hypertension" BOOLEAN NOT NULL,
ADD COLUMN     "hypertension_is_controlled" BOOLEAN NOT NULL,
ADD COLUMN     "hypotension" BOOLEAN NOT NULL,
ADD COLUMN     "hypotension_is_controlled" BOOLEAN NOT NULL,
ADD COLUMN     "infectious_disease" BOOLEAN NOT NULL,
ADD COLUMN     "infectious_disease_description" TEXT,
ADD COLUMN     "kidney_problem" BOOLEAN NOT NULL,
ADD COLUMN     "liver_problem" BOOLEAN NOT NULL,
ADD COLUMN     "medical_treatment" BOOLEAN NOT NULL,
ADD COLUMN     "medical_treatment_description" TEXT,
ADD COLUMN     "medication_use" BOOLEAN NOT NULL,
ADD COLUMN     "medication_use_description" TEXT,
ADD COLUMN     "menstrual_cycle" BOOLEAN NOT NULL,
ADD COLUMN     "oncological_history" BOOLEAN NOT NULL,
ADD COLUMN     "plates_pins" BOOLEAN NOT NULL,
ADD COLUMN     "plates_pins_description" TEXT,
ADD COLUMN     "practice_sports" BOOLEAN NOT NULL,
ADD COLUMN     "practice_sports_description" TEXT,
ADD COLUMN     "pregnant" BOOLEAN NOT NULL,
ADD COLUMN     "roaccutane" BOOLEAN NOT NULL,
ADD COLUMN     "skin_care" BOOLEAN NOT NULL,
ADD COLUMN     "sleep" BOOLEAN NOT NULL,
ADD COLUMN     "smoke" BOOLEAN NOT NULL,
ADD COLUMN     "sun_exposure" BOOLEAN NOT NULL,
ADD COLUMN     "sunscreen" BOOLEAN NOT NULL,
ADD COLUMN     "surgery" BOOLEAN NOT NULL,
ADD COLUMN     "surgery_description" TEXT,
ADD COLUMN     "thrombosis" BOOLEAN NOT NULL,
ADD COLUMN     "thyroid_problem" BOOLEAN NOT NULL;

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
ADD COLUMN     "Hirsurtism_trichose" BOOLEAN NOT NULL,
ADD COLUMN     "abscess_liquid_injuries" BOOLEAN NOT NULL,
ADD COLUMN     "abscess_presence_of" BOOLEAN NOT NULL,
ADD COLUMN     "acromica_pigmented_spot" BOOLEAN NOT NULL,
ADD COLUMN     "alipidic_cutaneous" BOOLEAN NOT NULL,
ADD COLUMN     "anemic_blood_vessel" BOOLEAN NOT NULL,
ADD COLUMN     "anemic_blood_vessel_region" TEXT,
ADD COLUMN     "asphyxia_cutaneous" BOOLEAN NOT NULL,
ADD COLUMN     "balanced_oiliness" BOOLEAN NOT NULL,
ADD COLUMN     "black_skin" BOOLEAN NOT NULL,
ADD COLUMN     "bruise_non_meianodermal" BOOLEAN NOT NULL,
ADD COLUMN     "bruise_purpuric_spot" BOOLEAN NOT NULL,
ADD COLUMN     "bubble_liquid_injuries" BOOLEAN NOT NULL,
ADD COLUMN     "chloasma_melanodermic" BOOLEAN NOT NULL,
ADD COLUMN     "comedo_solid_injuries" BOOLEAN NOT NULL,
ADD COLUMN     "comedones_presence_of" BOOLEAN NOT NULL,
ADD COLUMN     "conglobat_acne" BOOLEAN NOT NULL,
ADD COLUMN     "cornedogenic_acne" BOOLEAN NOT NULL,
ADD COLUMN     "couperouse_blood_vessel" BOOLEAN NOT NULL,
ADD COLUMN     "couperouse_blood_vessel_region" TEXT,
ADD COLUMN     "crust_others" BOOLEAN NOT NULL,
ADD COLUMN     "cyanosis_blood_vessel" BOOLEAN NOT NULL,
ADD COLUMN     "cyanosis_blood_vessel_region" TEXT,
ADD COLUMN     "cyanotic_coloring" BOOLEAN NOT NULL,
ADD COLUMN     "cyst_liquid_injuries" BOOLEAN NOT NULL,
ADD COLUMN     "cysts_presence_of" BOOLEAN NOT NULL,
ADD COLUMN     "dark_brunette_skin" BOOLEAN NOT NULL,
ADD COLUMN     "deep_dehydration" BOOLEAN NOT NULL,
ADD COLUMN     "der_pap_nigra_solid_injuries" BOOLEAN NOT NULL,
ADD COLUMN     "dilated_ostia" BOOLEAN NOT NULL,
ADD COLUMN     "ecchymosis_purpuric_spot" BOOLEAN NOT NULL,
ADD COLUMN     "edemaciated_cutaneous" BOOLEAN NOT NULL,
ADD COLUMN     "ephelides_melanodermic" BOOLEAN NOT NULL,
ADD COLUMN     "erythema_blood_vessel" BOOLEAN NOT NULL,
ADD COLUMN     "erythema_blood_vessel_region" TEXT,
ADD COLUMN     "eudemic_cutaneous" BOOLEAN NOT NULL,
ADD COLUMN     "excessive_oiliness" BOOLEAN NOT NULL,
ADD COLUMN     "folliculitis_trichose" BOOLEAN NOT NULL,
ADD COLUMN     "grooves_nail__involution_region" TEXT,
ADD COLUMN     "grooves_nail_involution" BOOLEAN NOT NULL,
ADD COLUMN     "hyperchromic_pigmented_spot" BOOLEAN NOT NULL,
ADD COLUMN     "hypertrichosis_trichose" BOOLEAN NOT NULL,
ADD COLUMN     "hypertrophic_blood_vessel" BOOLEAN NOT NULL,
ADD COLUMN     "hypertrophic_blood_vessel_region" TEXT,
ADD COLUMN     "hypertrophic_scar" BOOLEAN NOT NULL,
ADD COLUMN     "hypertrophic_scar_region" TEXT,
ADD COLUMN     "hypochromic_pigmented_spot" BOOLEAN NOT NULL,
ADD COLUMN     "hypotrophic_blood_vessel" BOOLEAN NOT NULL,
ADD COLUMN     "hypotrophic_blood_vessel_region" TEXT,
ADD COLUMN     "hypotrophic_scar" BOOLEAN NOT NULL,
ADD COLUMN     "hypotrophic_scar_region" TEXT,
ADD COLUMN     "imperceptive_ostia" BOOLEAN NOT NULL,
ADD COLUMN     "increased_oiliness" BOOLEAN NOT NULL,
ADD COLUMN     "keloid_blood_vessel" BOOLEAN NOT NULL,
ADD COLUMN     "keloid_blood_vessel_region" TEXT,
ADD COLUMN     "keloid_scar" BOOLEAN NOT NULL,
ADD COLUMN     "keloid_scar_region" TEXT,
ADD COLUMN     "keratosis_solid_injuries" BOOLEAN NOT NULL,
ADD COLUMN     "light_brunette_skin" BOOLEAN NOT NULL,
ADD COLUMN     "line_nail_involution" BOOLEAN NOT NULL,
ADD COLUMN     "line_nail_involution_region" TEXT,
ADD COLUMN     "lipid_cutaneous" BOOLEAN NOT NULL,
ADD COLUMN     "melasma_melanodermic" BOOLEAN NOT NULL,
ADD COLUMN     "micropigmentation_non_meianodermal" BOOLEAN NOT NULL,
ADD COLUMN     "millium_solid_injuries" BOOLEAN NOT NULL,
ADD COLUMN     "mixed_cutaneous" BOOLEAN NOT NULL,
ADD COLUMN     "moderate_brunette_skin" BOOLEAN NOT NULL,
ADD COLUMN     "nasolabial_hypotonia" BOOLEAN NOT NULL,
ADD COLUMN     "neck_hypotonia" BOOLEAN NOT NULL,
ADD COLUMN     "nevus_blood_vessel" BOOLEAN NOT NULL,
ADD COLUMN     "nevus_blood_vessel_region" TEXT,
ADD COLUMN     "new_melanodermic_melanodermic" BOOLEAN NOT NULL,
ADD COLUMN     "nodularcystic_acne" BOOLEAN NOT NULL,
ADD COLUMN     "nodules_presence_of" BOOLEAN NOT NULL,
ADD COLUMN     "nodules_solid_injuries" BOOLEAN NOT NULL,
ADD COLUMN     "normal_texture" BOOLEAN NOT NULL,
ADD COLUMN     "normalhydration_dehydration" BOOLEAN NOT NULL,
ADD COLUMN     "observations" TEXT,
ADD COLUMN     "other_skin" BOOLEAN NOT NULL,
ADD COLUMN     "pale_coloring" BOOLEAN NOT NULL,
ADD COLUMN     "papilloma_solid_injuries" BOOLEAN NOT NULL,
ADD COLUMN     "papule_solid_injuries" BOOLEAN NOT NULL,
ADD COLUMN     "papules_presence_of" BOOLEAN NOT NULL,
ADD COLUMN     "papulopustular_acne" BOOLEAN NOT NULL,
ADD COLUMN     "periorbicularmelanosis_melanodermic" BOOLEAN NOT NULL,
ADD COLUMN     "petechiae_non_meianodermal" BOOLEAN NOT NULL,
ADD COLUMN     "petechiae_purpuric_spot" BOOLEAN NOT NULL,
ADD COLUMN     "photodermatoses_others" BOOLEAN NOT NULL,
ADD COLUMN     "pustule_liquid_injuries" BOOLEAN NOT NULL,
ADD COLUMN     "pustules_presence_of" BOOLEAN NOT NULL,
ADD COLUMN     "red_coloring" BOOLEAN NOT NULL,
ADD COLUMN     "rosacea_cutaneous" BOOLEAN NOT NULL,
ADD COLUMN     "rough_texture" BOOLEAN NOT NULL,
ADD COLUMN     "scales_others" BOOLEAN NOT NULL,
ADD COLUMN     "seborrheic_cutaneous" BOOLEAN NOT NULL,
ADD COLUMN     "sensitive_cutaneous" BOOLEAN NOT NULL,
ADD COLUMN     "slim_texture" BOOLEAN NOT NULL,
ADD COLUMN     "submental_hypotonia" BOOLEAN NOT NULL,
ADD COLUMN     "superficial_dehydration" BOOLEAN NOT NULL,
ADD COLUMN     "syringoma_solid_injuries" BOOLEAN NOT NULL,
ADD COLUMN     "tattoo_non_meianodermal" BOOLEAN NOT NULL,
ADD COLUMN     "telangiectasias_blood_vessel" BOOLEAN NOT NULL,
ADD COLUMN     "telangiectasias_blood_vessel_region" TEXT,
ADD COLUMN     "thick_texture" BOOLEAN NOT NULL,
ADD COLUMN     "unidentified_injury_others" BOOLEAN NOT NULL,
ADD COLUMN     "unstressed_cutaneous" BOOLEAN NOT NULL,
ADD COLUMN     "vegetation_solid_injuries" BOOLEAN NOT NULL,
ADD COLUMN     "vesicle_liquid_injuries" BOOLEAN NOT NULL,
ADD COLUMN     "vibice_purpuric_spot" BOOLEAN NOT NULL,
ADD COLUMN     "white_skin" BOOLEAN NOT NULL,
ADD COLUMN     "yellow_coloring" BOOLEAN NOT NULL;
