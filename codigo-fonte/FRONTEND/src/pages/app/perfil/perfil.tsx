import { ReactSVG } from "react-svg";
import telephone from "../../../assets/telephone.svg";
import email from "../../../assets/email.svg"
import address from "../../../assets/address.svg"


import { ChangeEvent, useState } from 'react';
///import { useUser } from 'codigo-fonte\FRONTEND\src\context\UserContext  ';
//import { useParams } from 'react-router-dom';


          

export function Perfil() {
    // const {users} = useUser();
    // const { id } = useParams();
   
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

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
            <h1 className="p-10  text-black-800 text-4xl flex justify-center font-Roboto Font Family">
                Fátima Cristina
            </h1>
          <div className="justify-center flex ">
                {selectedImage ? (
                    <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" />
                ) : null}
                <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>
          <div className=" grid justify-center p-10">


                <div className="flex p-3">
    
                    <ReactSVG src={telephone} />
                 {/* <p> {users?.find((item) => item.id === id)?.phone} </p> */}
                 <p className="font-medium ml-3 mt-3">(21)99856-2524</p>
                </div>


                <div className="flex p-3">
                 
                   <ReactSVG src={email} />
                    <p className="font-medium ml-3 mt-3"> fatimaestetica28@gmail.com</p>
                </div>

                <div className="flex p-3 ">
                    <ReactSVG src={address} />
                    <p className="font-medium ml-3 mt-3"> Rua Bétula,349,Guadalupe, Rio de Janeiro </p> 
                </div>


            </div>


        </div>

    )
}