import { Button } from "@/components/ui/button";
import { questions } from "./questions";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { postHealthQuestionary } from "@/api/questionary";
import { z } from "zod";
import { useState } from "react";

const healthQuestionnaire = z.object({
  aestheticProcedure: z.boolean(),
  cicatrization: z.boolean(),
});

export type HealthQuestionnaire = z.infer<typeof healthQuestionnaire>;

// export interface HealthQuestionnaire {
//   aestheticProcedure: boolean;
//   aestheticProcedureDescription?: string;
//   cicatrization: boolean;
// }

export function Questionary() {
  const [respostas, setRespostas] = useState({});

  const { mutateAsync: postHealth } = useMutation({
    mutationFn: postHealthQuestionary,
  });

  async function handleRegisterClient(data: HealthQuestionnaire) {
    try {
      // await postHealth(data)
      console.log(data);
      // Navigate('/')
      toast.success("Cliente cadastrado com sucesso!");
    } catch (error) {
      toast.error("Erro ao cadastrar usuário!");
    }
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<HealthQuestionnaire>();

  const handleChange = (id: string, value: string | boolean) => {
    setRespostas({ ...respostas, [id]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleRegisterClient)}>
        <div className="pl-1.5 mb-2.5 mr-2">
          <label className="block text-sm font-bold mb-1">Queixa Principal:</label>
          <input
            className="rounded-lg px-3 py-9 w-full"
            type="text"
            placeholder="Adicionar aqui as principais queixas para o tratamento"
            // {...control('mainComplaint')}
          />
        </div>
        {questions.map((question, index) => (
          <Controller
            key={index}
            control={control}
            name={question.title}
            render={({ field }) => (
              <div className="pl-1.5">
                <h2 className="pt-1.5 mb-1.5 text-sm font-bold">{question.title}</h2>
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
                {field.value === true && question.description && (
                  <div className="pt-0.5 pb-1.5 text-sm font-bold ">
                    <label className="pl-2 pr-3">
                      {question.description}
                      <input
                        className="ml-2 pl-2 px-10 py-0.5 rounded-lg italic"
                        type="text"
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder="Escreva aqui"
                      />
                    </label>
                  </div>
                )}
                <div 
                className="border-b border-gray-300 mt-0.5 mb-1.5 mr-3">
                </div>
              </div>
            )}
          />
        ))}
        <div className="pl-2 pt-5 mb-4 flex items-center">
          <input
            className="mr-2"
            type="checkbox"
            // {...control('authorization')}
          />
          <label className="pl-1.5 text-sm font-bold">
            Autorizo o uso das informações preenchidas acima, unicamente para a análise e ciência do profissional estético.
          </label>
        </div>
      </form>
      <Button type="submit">Enviar</Button>
    </>
  );
}

// FALTA:

//        Ingestão de água por dia:

//        Autorizo o uso das informações preenchidas acima unicamente para as análises e ciência do profissional estético.

//        gravar as informações no DB

