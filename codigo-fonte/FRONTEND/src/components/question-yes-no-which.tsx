import React, { useState } from 'react';

interface QuestionWithOptionsProps {
  title: string;
  descripition: string;
}

const QuestionWithOptions: React.FC<QuestionWithOptionsProps> = ({ title, descripition }) => {
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
            name="option"
            value="true"
            checked={selectedOption === true}
            onChange={() => handleOptionSelect(true)}
          />
          
        </label>
        Sim
        <label>
          <input
            type="radio"
            name="option"
            value="false"
            checked={selectedOption === false}
            onChange={() => handleOptionSelect(false)}
          />
          
        </label>
        Não
      </div>
      {selectedOption === true && (
        <div>
          <label>
          {descripition}
            <input
              type="text"
              value={reason}
              onChange={handleReasonChange}
              placeholder="Especifique"
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default QuestionWithOptions;