import { ReactSVG } from "react-svg";
import telephone from "../../../assets/telephone.svg";
import email from "../../../assets/email.svg"
import address from "../../../assets/address.svg"
import { ChangeEvent, useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { env } from '@/env';
// import { useUser } from 'codigo-fonte\FRONTEND\src\context\UserContext';

export function Perfil(){
    const { id } = useParams<{ id: string }>();
    // const { users } = useUser();
    // const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [userProfile, setUserProfile] = useState<any>(null); // Ajustar tipo conforme necessário
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUserProfile() {
            try {
                const response = await axios.get(`${env.VITE_API_URL}/users?id=${id}`);
                const data = response.data;
                setUserProfile(data);
            } catch (error) {
                console.error(`Failed to fetch user profile: ${error}`);
            } finally {
                setLoading(false);
            }
        }

        fetchUserProfile();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }


    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Obter o arquivo selecionado
    
        if (file) {
            setSelectedImage(file); // Define o novo arquivo selecionado
        } else {
            setSelectedImage(null); // Nenhum arquivo selecionado, limpar a seleção atual
        }
    };

    return (
        <div className='justify-center flex flex-col'>
            <h1 className="p-10 text-black-800 text-4xl flex justify-center font-Roboto Font Family">
                {userProfile.name || 'Nome não disponível'}
            </h1>
            <div className="justify-center flex ">
                {selectedImage ? (
                    <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" />
                ) : null}
                <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            <div className="grid justify-center p-10">
                <div className="flex p-3">
                    <ReactSVG src={telephone} />
                    <p className="font-medium ml-3 mt-3">{userProfile.phone || 'Telefone não disponível'}</p>
                </div>
                <div className="flex p-3">
                    <ReactSVG src={email} />
                    <p className="font-medium ml-3 mt-3">{userProfile.email || 'Email não disponível'}</p>
                </div>
                <div className="flex p-3">
                    <ReactSVG src={address} />
                    <p className="font-medium ml-3 mt-3">{userProfile.address || 'Endereço não disponível'}</p>
                </div>
            </div>
        </div>
    );
}
