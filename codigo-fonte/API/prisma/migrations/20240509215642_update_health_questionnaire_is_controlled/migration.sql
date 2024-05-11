-- AlterTable
ALTER TABLE "health_questionnaire" ALTER COLUMN "hypertension_is_controlled" DROP NOT NULL,
ALTER COLUMN "hypertension_is_controlled" SET DATA TYPE TEXT,
ALTER COLUMN "hypotension_is_controlled" DROP NOT NULL,
ALTER COLUMN "hypotension_is_controlled" SET DATA TYPE TEXT;
