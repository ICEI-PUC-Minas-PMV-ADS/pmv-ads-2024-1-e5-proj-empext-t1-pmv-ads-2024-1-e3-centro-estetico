import { postHealthQuestionary } from "@/api/questionary";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from 'zod';
import { questions } from "./questions";


const healthQuestionnaire = z
  .object({
    aestheticProcedure: z.boolean(),
    cicatrization: z.boolean(),
  })

export type HealthQuestionnaire = z.infer<typeof healthQuestionnaire>

// export interface HealthQuestionnaire {
//   aestheticProcedure: boolean;
//   aestheticProcedureDescription?: string;
//   cicatrization: boolean;
// }

export function Questionary() {

  const [respostas, setRespostas] = useState({});

  const { mutateAsync: postHealth } = useMutation({
    mutationFn: postHealthQuestionary,
  })

  async function handleRegisterClient(data:HealthQuestionnaire) {
    try {
      // await postHealth(data)
      console.log(data)
      // Navigate('/')
      toast.success('Cliente cadastrado com sucesso!')
    } catch (error) {
      toast.error('Erro ao cadastrar usuário!')
    }
  }

  const { control, handleSubmit, formState: { errors } } = useForm<HealthQuestionnaire>({});
  const handleChange = (id, value) => {
    setRespostas({ ...respostas, [id]: value });
  };


  return (
    <>
  <form onSubmit={handleSubmit(handleRegisterClient)}>
    {questions.map((question, index) => (
      <Controller
        key={index}
        control={control}
        name={`question${index}`} // Definindo um nome dinâmico para cada campo
        render={({ field }) => (
          <div>
            <h2>{question.title}</h2>
            <div>
              <label>
                <input
                  type="radio"
                  value="true"
                  checked={field.value === true}
                  onChange={() => field.onChange(true)} // Alterando para true quando selecionado
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  value="false"
                  checked={field.value === false}
                  onChange={() => field.onChange(false)} // Alterando para false quando selecionado
                />
                Não
              </label>
            </div>
            {field.value === true && question.description && (
              <div>
                <label>
                  {question.description}
                  <input
                    type="text"
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="Especifique"
                  />
                </label>
              </div>
            )}
          </div>
        )}
      />
    ))}
    <Button type="submit">Enviar</Button>
  </form>
</>


  );
}


// FALTA:

//        Queixa Principal

//        Ingestão de água por dia:

//        Autorizo o uso das informações preenchidas acima unicamente para as análises e ciência do profissional estético.

//        gravar as informações no DB

//        fazer o mesmo pro resto no questions
