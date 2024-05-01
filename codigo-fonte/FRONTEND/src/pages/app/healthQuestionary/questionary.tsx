import { Button } from "@/components/ui/button";
import { HealthQuestions } from "../../../components/healthQuestions";
import { questions } from "./questions";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Navigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { postHealthQuestionary } from "@/api/questionary";
import { z } from 'zod';
import { useState } from "react";


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
          name={`${question.name}_${question.title}`}
          render={({ field }) => (
            <div>
            <h2>{question.title}</h2>
            <div>
              <label>
                <input
                  type="radio"
                  // name={`${title}-yes`}
                  value="true"
                  checked={field.value === true}
                  onChange={(e) => field.onChange(e.target.value)}
                />
      
              </label>
              Sim
              <label>
                <input
                  type="radio"
                  // name={`${title}-no`}
                  value={field.value}
                  checked={field.value === false}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                
              </label>
              Não
            </div>
            {field.value === true && question.description && (
              <div>
                <label>
                {question.description}
                  <input
                    // name={`${title}-${description}`}
                    type="text"
                    // value={field.value}
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
    </form>
    <Button type="submit">Enviar</Button>
    </>
    
  );
}


// FALTA:

//        Queixa Principal

//        Ingestão de água por dia:

//        Autorizo o uso das informações preenchidas acima unicamente para as análises e ciência do profissional estético.

//        gravar as informações no DB

//        fazer o mesmo pro resto no questions
