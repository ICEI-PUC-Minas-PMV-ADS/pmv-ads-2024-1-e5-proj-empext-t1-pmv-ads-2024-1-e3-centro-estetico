-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('Married', 'Single', 'Divorced');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('Admin', 'Client');

-- CreateEnum
CREATE TYPE "MenstrualCycle" AS ENUM ('Regular', 'Irregular');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "marital_status" "MaritalStatus" NOT NULL,
    "email" TEXT,
    "phone" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "additional_information" TEXT,
    "user_type" "UserType" NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hair_analysis" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "main_complaint" TEXT NOT NULL,
    "previous_aesthetic_procedure" TEXT NOT NULL,
    "scarring_issues" BOOLEAN NOT NULL,
    "diabetes" BOOLEAN NOT NULL,
    "medication_use" TEXT NOT NULL,
    "isotretinoin_use" BOOLEAN NOT NULL,
    "medical_treatment" TEXT NOT NULL,
    "thrombosis" BOOLEAN NOT NULL,
    "surgery" TEXT NOT NULL,
    "oncological_history" BOOLEAN NOT NULL,
    "infectious_disease" TEXT NOT NULL,
    "sports_practice" TEXT NOT NULL,
    "balanced_diet" BOOLEAN NOT NULL,
    "daily_water_intake" TEXT NOT NULL,
    "alcoholic_beverage_use" BOOLEAN NOT NULL,
    "substance_use" TEXT NOT NULL,
    "hormonal_disorder" TEXT NOT NULL,
    "smoker" BOOLEAN NOT NULL,
    "sleeps_well" BOOLEAN NOT NULL,
    "regular_intestine" BOOLEAN NOT NULL,
    "hypertension" BOOLEAN NOT NULL,
    "hypotension" BOOLEAN NOT NULL,
    "cardiac_issues" TEXT NOT NULL,
    "depression" BOOLEAN NOT NULL,
    "epilepsy" BOOLEAN NOT NULL,
    "has_plates_pins" TEXT NOT NULL,
    "dental_prosthesis" TEXT NOT NULL,
    "renal_issue" BOOLEAN NOT NULL,
    "hepatic_issues" BOOLEAN NOT NULL,
    "thyroid_problems" BOOLEAN NOT NULL,
    "autoimmune_disease" TEXT NOT NULL,
    "pregnancy" BOOLEAN NOT NULL,
    "breastfeeding" BOOLEAN NOT NULL,
    "sun_exposure" TEXT NOT NULL,
    "skin_care" TEXT NOT NULL,
    "metacril_toxin_use" BOOLEAN NOT NULL,
    "allergy_history" TEXT NOT NULL,
    "sunscreen_use" BOOLEAN NOT NULL,
    "herpes_history" BOOLEAN NOT NULL,
    "contraceptive_use" BOOLEAN NOT NULL,
    "menstrual_cycle" "MenstrualCycle" NOT NULL,
    "hormone_use" TEXT NOT NULL,
    "acid_use_on_skin" BOOLEAN NOT NULL,
    "cosmetic_use" TEXT NOT NULL,
    "authorize_photos" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hair_analysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skin_analysis" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "main_complaint" TEXT NOT NULL,
    "previous_aesthetic_procedure" TEXT NOT NULL,
    "scarring_issues" BOOLEAN NOT NULL,
    "diabetes" BOOLEAN NOT NULL,
    "medication_use" TEXT NOT NULL,
    "isotretinoin_use" BOOLEAN NOT NULL,
    "medical_treatment" TEXT NOT NULL,
    "thrombosis" BOOLEAN NOT NULL,
    "surgery" TEXT NOT NULL,
    "oncological_history" BOOLEAN NOT NULL,
    "infectious_disease" TEXT NOT NULL,
    "sports_practice" TEXT NOT NULL,
    "balanced_diet" BOOLEAN NOT NULL,
    "daily_water_intake" TEXT NOT NULL,
    "alcoholic_beverage_use" BOOLEAN NOT NULL,
    "substance_use" TEXT NOT NULL,
    "hormonal_disorder" TEXT NOT NULL,
    "smoker" BOOLEAN NOT NULL,
    "sleeps_well" BOOLEAN NOT NULL,
    "regular_intestine" BOOLEAN NOT NULL,
    "hypertension" BOOLEAN NOT NULL,
    "hypotension" BOOLEAN NOT NULL,
    "cardiac_issues" TEXT NOT NULL,
    "depression" BOOLEAN NOT NULL,
    "epilepsy" BOOLEAN NOT NULL,
    "has_plates_pins" TEXT NOT NULL,
    "dental_prosthesis" TEXT NOT NULL,
    "renal_issue" BOOLEAN NOT NULL,
    "hepatic_issues" BOOLEAN NOT NULL,
    "thyroid_problems" BOOLEAN NOT NULL,
    "autoimmune_disease" TEXT NOT NULL,
    "pregnancy" BOOLEAN NOT NULL,
    "breastfeeding" BOOLEAN NOT NULL,
    "sun_exposure" TEXT NOT NULL,
    "skin_care" TEXT NOT NULL,
    "metacril_toxin_use" BOOLEAN NOT NULL,
    "allergy_history" TEXT NOT NULL,
    "sunscreen_use" BOOLEAN NOT NULL,
    "herpes_history" BOOLEAN NOT NULL,
    "contraceptive_use" BOOLEAN NOT NULL,
    "menstrual_cycle" "MenstrualCycle" NOT NULL,
    "hormone_use" TEXT NOT NULL,
    "acid_use_on_skin" BOOLEAN NOT NULL,
    "cosmetic_use" TEXT NOT NULL,
    "authorize_photos" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "skin_analysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "body_analysis" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "main_complaint" TEXT NOT NULL,
    "previous_aesthetic_procedure" TEXT NOT NULL,
    "scarring_issues" BOOLEAN NOT NULL,
    "diabetes" BOOLEAN NOT NULL,
    "medication_use" TEXT NOT NULL,
    "isotretinoin_use" BOOLEAN NOT NULL,
    "medical_treatment" TEXT NOT NULL,
    "thrombosis" BOOLEAN NOT NULL,
    "surgery" TEXT NOT NULL,
    "oncological_history" BOOLEAN NOT NULL,
    "infectious_disease" TEXT NOT NULL,
    "sports_practice" TEXT NOT NULL,
    "balanced_diet" BOOLEAN NOT NULL,
    "daily_water_intake" TEXT NOT NULL,
    "alcoholic_beverage_use" BOOLEAN NOT NULL,
    "substance_use" TEXT NOT NULL,
    "hormonal_disorder" TEXT NOT NULL,
    "smoker" BOOLEAN NOT NULL,
    "sleeps_well" BOOLEAN NOT NULL,
    "regular_intestine" BOOLEAN NOT NULL,
    "hypertension" BOOLEAN NOT NULL,
    "hypotension" BOOLEAN NOT NULL,
    "cardiac_issues" TEXT NOT NULL,
    "depression" BOOLEAN NOT NULL,
    "epilepsy" BOOLEAN NOT NULL,
    "has_plates_pins" TEXT NOT NULL,
    "dental_prosthesis" TEXT NOT NULL,
    "renal_issue" BOOLEAN NOT NULL,
    "hepatic_issues" BOOLEAN NOT NULL,
    "thyroid_problems" BOOLEAN NOT NULL,
    "autoimmune_disease" TEXT NOT NULL,
    "pregnancy" BOOLEAN NOT NULL,
    "breastfeeding" BOOLEAN NOT NULL,
    "sun_exposure" TEXT NOT NULL,
    "skin_care" TEXT NOT NULL,
    "metacril_toxin_use" BOOLEAN NOT NULL,
    "allergy_history" TEXT NOT NULL,
    "sunscreen_use" BOOLEAN NOT NULL,
    "herpes_history" BOOLEAN NOT NULL,
    "contraceptive_use" BOOLEAN NOT NULL,
    "menstrual_cycle" "MenstrualCycle" NOT NULL,
    "hormone_use" TEXT NOT NULL,
    "acid_use_on_skin" BOOLEAN NOT NULL,
    "cosmetic_use" TEXT NOT NULL,
    "authorize_photos" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "body_analysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointment_history" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "observations" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "appointment_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "health_questionnaire" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "observations" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "health_questionnaire_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "hair_analysis" ADD CONSTRAINT "hair_analysis_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skin_analysis" ADD CONSTRAINT "skin_analysis_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "body_analysis" ADD CONSTRAINT "body_analysis_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment_history" ADD CONSTRAINT "appointment_history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "health_questionnaire" ADD CONSTRAINT "health_questionnaire_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
