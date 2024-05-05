


export function Perfil() {
    return (
        <div className='justify-center flex flex-col'>
            <h1 className="p-10  text-black-800 text-4xl flex justify-center font-Roboto Font Family">
                Fátima Cristina
            </h1>

            <div className="flex justify-center">
                <img className=" w-80 p-5 " src="pf.png" alt="" />
            </div>

            <div className=" grid justify-center p-10">

                <div className="flex p-2">
                    <img className=" -200 w-10 " src="phone.svg" alt="" />
                    <p> (82) 9999-9999</p>
                </div>


                <div className="flex p-2">
                    <img className="w-10 " src="./email.png" alt="" />
                    <p> paciente@gmail.com</p>
                </div>

                <div className="flex p-2">
                    <img className="w-10" src="endereço.png" alt="" />
                    <p> Rua Bétula,349,Guadalupe, Rio de Janeiro </p> 
                </div>


            </div>


        </div>

    )
}