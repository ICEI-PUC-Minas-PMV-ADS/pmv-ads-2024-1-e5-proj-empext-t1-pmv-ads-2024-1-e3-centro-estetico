// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from 'react'
import { ControllerRenderProps, FieldValues } from 'react-hook-form'

import { HealthQuestionnaire } from '@/pages/app/healthQuestionary/questionary'

interface QuestionWithOptionsProps {
  title: string
  description?: string
  field: ControllerRenderProps<FieldValues, string>
  nameDescription?: keyof HealthQuestionnaire
  name: keyof HealthQuestionnaire
}

export const HealthQuestions: React.FC<QuestionWithOptionsProps> = ({
  title,
  description,
  field,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <label>
          <input
            type="radio"
            name={`${title}-yes`}
            value="true"
            checked={field.value === true}
            onChange={(e) => field.onChange(e.target.value)}
          />
        </label>
        Sim
        <label>
          <input
            type="radio"
            name={`${title}-no`}
            value="false"
            checked={field.value === false}
            onChange={(e) => field.onChange(e.target.value)}
          />
        </label>
        Não
      </div>
      {field.value === true && description && (
        <div>
          <label>
            {description}
            <input
              name={`${title}-${description}`}
              type="text"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              placeholder="Especifique"
            />
          </label>
        </div>
      )}
    </div>
  )
}
