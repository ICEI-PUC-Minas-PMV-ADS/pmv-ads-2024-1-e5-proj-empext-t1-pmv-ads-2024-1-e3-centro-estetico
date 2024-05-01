import { HealthQuestionnaire } from '@/pages/app/healthQuestionary/questionary';
import React, { useState } from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

interface QuestionWithOptionsProps {
  title: string;
  description?: string;
  field: ControllerRenderProps<FieldValues, string>
  nameDescription?: keyof HealthQuestionnaire;
  name: keyof HealthQuestionnaire;
}

export const HealthQuestions: React.FC<QuestionWithOptionsProps> = ({ title, description, field }) => {
  const [selectedOption, setSelectedOption] = useState<boolean | null>(null);
  const [reason, setReason] = useState<string>('');

  const handleOptionSelect = (option: boolean) => {
    setSelectedOption(option);
    if (!option) {
      // Reset reason if "Não" is selected
      setReason('');
    }
  };

  const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReason(event.target.value);
  };

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
  );
};
