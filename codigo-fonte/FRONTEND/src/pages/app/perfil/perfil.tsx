import { ReactSVG } from "react-svg";
import telephone from "../../../assets/telephone.svg";
import emailIcon from "../../../assets/email.svg";
import address from "../../../assets/address.svg";
import { ChangeEvent, useState, useEffect } from 'react';
import axios from "axios";
import { env } from '../../../env';
import { useEmail } from "@/hooks/useEmail";
import { useTitle } from "@/hooks/useTitle";

type User = {
    id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
};

export function Perfil() {
    const [userData, setUserData] = useState<User | null>(null);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { email } = useEmail();
    const { setPreviousPath, setPreviousTitle, title } = useTitle();

    useEffect(() => {
        setPreviousPath(window.location.pathname)
        setPreviousTitle(title)
      },[])

    useEffect(() => {
        async function fetchEstheticianUser() {
            try {
                const response = await axios.get(`${env.VITE_API_URL}/get-estheticians?user_email=${email}`);
                const data = response.data;
                setUserData(data);
            } catch (error) {
                console.error('Failed to fetch esthetician data:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchEstheticianUser();
    }, []);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(file);
        } else {
            setSelectedImage(null);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='justify-center flex flex-col'>
            <h1 className="p-10 text-black-800 text-4xl flex justify-center font-Roboto Font Family">
                {userData ? userData.name : 'Nome não disponível'}
            </h1>
            <div className="justify-center flex">
                {selectedImage ? (
                    <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" />
                ) : (
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                )}
            </div>
            <div className="grid justify-center p-10">
                <div className="flex p-3">
                    <ReactSVG src={telephone} />
                    <p className="font-medium ml-3 mt-3">{userData ? userData.phone : 'Telefone não disponível'}</p>
                </div>
                <div className="flex p-3">
                    <ReactSVG src={emailIcon} />
                    <p className="font-medium ml-3 mt-3">{userData ? userData.email : 'Email não disponível'}</p>
                </div>
                <div className="flex p-3">
                    <ReactSVG src={address} />
                    <p className="font-medium ml-3 mt-3">{userData ? userData.address : 'Endereço não disponível'}</p>
                </div>
            </div>
        </div>
    );
}