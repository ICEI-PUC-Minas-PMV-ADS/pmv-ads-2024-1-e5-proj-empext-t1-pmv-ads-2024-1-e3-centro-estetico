import React, { useState } from 'react';

interface QuestionYesNoProps {
  title: string;
  onOptionSelect?: (option: boolean) => void; // Função de callback opcional para lidar com a seleção da opção
}

const QuestionYesNo: React.FC<QuestionYesNoProps> = ({ title, onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState<boolean | null>(null);

  const handleOptionChange = (option: boolean) => {
    setSelectedOption(option);

    // Chama a função de callback se ela estiver definida
    if (onOptionSelect) {
      onOptionSelect(option);
    }
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
            onChange={() => handleOptionChange(true)}
          />
          Sim
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="false"
            checked={selectedOption === false}
            onChange={() => handleOptionChange(false)}
          />
          Não
        </label>
      </div>
    </div>
  );
};

export default QuestionYesNo;