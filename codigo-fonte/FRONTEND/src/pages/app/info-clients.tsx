
import { ReactSVG } from 'react-svg';
import imgPerson from '../../assets/imgPerson.svg'
import { useUser } from '@/context/UserContext';
import { useParams } from 'react-router-dom';

function PatientInfo() {

    const { users } = useUser();
    const { id } = useParams();

    console.log('User ID from URL:', id);

    const user = users?.find((item) => item.id === id);

    console.log('Found User:', user);
    console.log('User Phone:', user?.phone);

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
                <button className="info-button"><i className="fas fa-edit"></i> Editar</button>
            </div>
            <div className="info">
                <label htmlFor="genero"><i className="fas fa-venus-mars"></i> Gênero:</label>
                <span id="genero">Masculino</span>
                <button className="info-button"><i className="fas fa-edit"></i> Editar</button>
            </div>
            <div className="info">
                <label htmlFor="data_nascimento"><i className="fas fa-calendar-alt"></i> Data de Nascimento:</label>
                <span id="data_nascimento">11/05/2000</span>
                <button className="info-button"><i className="fas fa-edit"></i> Editar</button>
            </div>
            <div className="info">
                <label htmlFor="endereco"><i className="fas fa-map-marker-alt"></i> Endereço:</label>
                <span id="endereco">Av. Afonso Pena, 1000 - Centro, Belo Horizonte - MG, 30130-902</span>
                <button className="info-button"><i className="fas fa-edit"></i> Editar</button>
            </div>
            <div className="info">
                <label htmlFor="telefone"><i className="fas fa-phone"></i> Telefone:</label>
                <span id="telefone">{user?.phone}</span>
                <button className="info-button"><i className="fas fa-edit"></i> Editar</button>
            </div>
        </div>
    );
}

export default PatientInfo;



