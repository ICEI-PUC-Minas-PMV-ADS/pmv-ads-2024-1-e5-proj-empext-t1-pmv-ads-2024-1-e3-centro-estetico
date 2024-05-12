import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react';
import { ReactSVG } from 'react-svg';
import imgPerson from '../../assets/imgPerson.svg'

function PatientInfo() {
    return (
        <div className="container">
            <i className="fas fa-arrow-left back-arrow"></i>
            <div className="patient-name">Vitor Araújo
                <button className="info-button"><i className="fas fa-info"></i></button>
            </div>
            <div>
                    <ReactSVG src={imgPerson} />
                </div>
            <div className="info">
                <label htmlFor="email"><i className="fas fa-envelope"></i> E-mail:</label>
                <span id="email">paciente123@gmail.com</span>
            </div>
            <div className="info">
                <label htmlFor="genero"><i className="fas fa-venus-mars"></i> Gênero:</label>
                <span id="genero">Masculino</span>
            </div>
            <div className="info">
                <label htmlFor="data_nascimento"><i className="fas fa-calendar-alt"></i> Data de Nascimento:</label>
                <span id="data_nascimento">11/05/2000</span>
            </div>
            <div className="info">
                <label htmlFor="endereco"><i className="fas fa-map-marker-alt"></i> Endereço:</label>
                <span id="endereco">Av. Afonso Pena, 1000 - Centro, Belo Horizonte - MG, 30130-902</span>
            </div>
            <div className='flex justify-between'>
                        <Button variant={'telephone'} size={'icon'}>
                            <Phone />
                        </Button>
                        <p className='font-medium pt-2 pl-2'>(82) 9999-9999</p>
                    </div>
        </div>
    );
}

export default PatientInfo;

