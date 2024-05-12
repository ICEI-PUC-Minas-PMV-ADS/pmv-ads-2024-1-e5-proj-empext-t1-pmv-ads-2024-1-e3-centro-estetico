import { Button } from "@/components/ui/button";
import { questions } from "./questions";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { createHealthQuestionary } from "@/api/questionary";
import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";

const healthQuestionnaire = z.object({
  problem_description: z.string().optional(),
  aesthetic_procedure: z.boolean(),
  aesthetic_procedure_description: z.string().optional(),
  cicatrization: z.boolean(),
  diabetes: z.boolean(),
  diabetes_is_controlled: z.string().optional(),
  medication_use: z.boolean(),
  medication_use_description: z.string().optional(),
  roaccutane: z.boolean(),
  medical_treatment: z.boolean(),
  medical_treatment_description: z.string().optional(),
  thrombosis: z.boolean(),
  surgery: z.boolean(),
  surgery_description: z.string().optional(),
  oncological_history: z.boolean(),
  infectious_disease: z.boolean(),
  infectious_disease_description: z.string().optional(),
  practice_sports: z.boolean(),
  practice_sports_description: z.string().optional(),
  balanced_diet: z.boolean(),
  alcohol: z.boolean(),
  drugs: z.boolean(),
  hormonal_disorder: z.boolean(),
  smoke: z.boolean(),
  sleep: z.boolean(),
  bowel_function: z.boolean(),
  hypertension: z.boolean(),
  hypertension_is_controlled: z.string().optional(),
  hypotension: z.boolean(),
  hypotension_is_controlled: z.string().optional(),
  cardiac_issues: z.boolean(),
  cardiac_issues_description: z.string().optional(),
  depression: z.boolean(),
  epilepsy: z.boolean(),
  plates_pins: z.boolean(),
  plates_pins_description: z.string().optional(),
  dental_prosthesis: z.boolean(),
  kidney_problem: z.boolean(),
  kidney_problem_description: z.string().optional(),
  liver_problem: z.boolean(),
  thyroid_problem: z.boolean(),
  auto_immune_disease: z.boolean(),
  pregnant: z.boolean(),
  breastfeeding: z.boolean(),
  sun_exposure: z.boolean(),
  sun_care: z.boolean(),
  skin_care: z.boolean(),
  methacryl_or_botulinum_toxin: z.boolean(),
  allergy_history: z.boolean(),
  herpes: z.boolean(),
  contraceptive: z.boolean(),
  menstrual_cycle: z.boolean(),
  hormones: z.boolean(),
  acid_skin: z.boolean(),
  cosmetic: z.boolean(),
  cosmetic_description: z.string().optional(),
  drink_water: z.string().min(1, "Informe a quantidade em L"),
  authorize_photos: z.boolean().optional(),
  authorize_data: z.boolean().refine((val) => val === true, {
    message: "É obrigatória a marcação",
  }),
});

export type HealthQuestionnaire = z.infer<typeof healthQuestionnaire>;

export interface HealthQuestion {
  title: string;
  description?: string;
  name: keyof HealthQuestionnaire;
  nameDescription?: keyof HealthQuestionnaire;
}

export function Questionary() {
  const [respostas, setRespostas] = useState({});

  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<HealthQuestionnaire>({
    resolver: zodResolver(healthQuestionnaire),
  });

  const { id } = useParams<{ id: string }>();

  const { mutateAsync: createQuestionary } = useMutation({
    mutationFn: createHealthQuestionary,
  });

  async function handleCreateHealthQuestionary(data: HealthQuestionnaire) {
    try {
      if (!id) {
        throw new Error("ID do cliente não encontrado na URL");
      }
      const { ...regData } = data;
      const questionaryData = {
        clientId: id,
        authorizePhotos: false,
        ...data,
      };
      await createQuestionary(questionaryData);
      console.log(regData);
      console.log(data);
      // Navigate('/')
      toast.success("Questionário cadastrado com sucesso!");
    } catch (error) {
      toast.error("Erro ao cadastrar questionário!");
    }
  }

  const handleChange = (id: string, value: string | boolean) => {
    setRespostas({ ...respostas, [id]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleCreateHealthQuestionary)}>
        <div className="mb-2.5 mr-2 pl-1.5">
          <label className="mb-1 block text-sm font-bold">
            Queixa Principal:
          </label>
          <textarea
            className="block h-24 w-full rounded-xl border border-gray-200 bg-input px-4 py-2 text-sm text-wwhite shadow-xl"
            placeholder="Adicionar aqui as principais queixas para o tratamento"
            // {...control('mainComplaint')}
          />
        </div>
        {questions.map((question: HealthQuestion, index) => (
          <>
            <Controller
              key={index}
              control={control}
              name={question.name}
              render={({ field }) => (
                <div className="pl-1.5">
                  <h2 className="mb-1.5 pt-1.5 text-sm font-bold">
                    {question.title}
                  </h2>
                  <div>
                    <label className="mr-4 inline-flex items-center text-primary">
                      <input
                        type="radio"
                        value="true"
                        checked={field.value === true}
                        onChange={() => field.onChange(true)}
                      />
                      <span className="pl-1 text-sm font-semibold text-primary">
                        Sim
                      </span>
                    </label>
                    <label className="inline-flex items-center text-primary">
                      <input
                        type="radio"
                        value="false"
                        checked={field.value === false}
                        onChange={() => field.onChange(false)}
                      />
                      <span className=" pl-1 text-sm font-semibold  text-primary">
                        Não
                      </span>
                    </label>
                  </div>
                  {field.value === true &&
                    question.description &&
                    question.nameDescription && (
                      <div className="pb-1.5 pt-0.5 text-sm ">
                        <label className="pl-2 pr-3 font-semibold ">
                          {question.description}
                          <input
                            className="ml-2 rounded-lg px-10 py-0.5 pl-2 font-normal"
                            type="text"
                            id={field.name}
                            key={index}
                            {...register(question.nameDescription)}
                            placeholder="Escreva aqui"
                          />
                        </label>
                      </div>
                    )}
                  {errors[`${question.name}`] && (
                    <small className="text-red-500 ">Marque uma opção</small>
                  )}
                  <div className="mb-1.5 mr-3 mt-0.5 border-b border-gray-300"></div>
                </div>
              )}
            />
          </>
        ))}

        <div className="mb-2.5 mr-2 flex flex-col pl-1.5 pt-1.5">
          <label className="mb-1 block text-sm font-semibold">
            Quantos Litros de água você bebe por dia?
          </label>
          <input
            className="rounded-lg px-10 py-0.5 pl-2 pt-1.5 text-sm "
            id="drink_water"
            type="number"
            placeholder="Quantidade em Litros(L):"
            {...register("drink_water")}
          />
          {errors.drink_water && (
            <small className="text-red-500">{errors.drink_water.message}</small>
          )}
        </div>

        <div className="flex items-center pl-2 pt-3">
          <input
            className="mr-2"
            id="authorize_photos"
            type="checkbox"
            {...register("authorize_photos")}
          />
          <label className="pl-1.5 text-sm font-bold">
            Autoriza a divulgação de fotos antes e depois do tratamento?
            (opcional)
          </label>
        </div>
        <div className="flex items-center pl-2 pt-5">
          <input
            className="mr-2"
            id="authorize_data"
            type="checkbox"
            {...register("authorize_data")}
            onChange={(e) => e.target.value}
          />
          <label className="pl-1.5 text-sm font-bold">
            Autorizo o uso das informações preenchidas acima, unicamente para a
            análise e ciência do profissional estético.
          </label>
        </div>
        {errors.authorize_data && (
          <small className="text-red-500">
            {errors.authorize_data.message}
          </small>
        )}
        <Button type="submit" className="mt-4 w-full" disabled={isSubmitting}>
          Enviar
        </Button>
      </form>
    </>
  );
}
