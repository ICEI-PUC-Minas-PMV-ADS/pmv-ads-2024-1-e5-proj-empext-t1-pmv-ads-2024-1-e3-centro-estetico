import { useNavigate } from 'react-router-dom';
import { Button } from "../../../components/ui/button";

export function MessageQuestionnaireCreated() {
  const navigate = useNavigate();

  const handleCloseTab = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full flex flex-col items-center justify-evenly min-h-[calc(100vh-8rem)] -mt-32">
        <div className="flex flex-col bg-white rounded-xl p-4 shadow-md">
          <p className="text-center font-bold">
            Questionário preenchido com sucesso!
          </p>
          <p className="text-center pt-3">
            Suas informações foram passadas para a esteticista
          </p>
          <Button 
          onClick={handleCloseTab} 
          className="mt-4 w-60 self-center"
          >
            Fechar
          </Button>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}
