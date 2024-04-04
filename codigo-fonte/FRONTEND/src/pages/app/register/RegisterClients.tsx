
import { useState } from 'react';

export function RegisterClients() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [celular, setCelular] = useState('');
  const [sexo, setSexo] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validar dados

    // Salvar dados

    alert('Cliente cadastrado com sucesso!');
  };

  return (
      <div className="container mx-auto">
        <h1 className="text-center text-2xl font-bold mb-4">Cadastrar Cliente</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="nome">
              Nome
            </label>
            <input
              id="nome"
              type="text"
              className="block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none text-[#00A27B]"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none  text-[#00A27B]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='flex'>
            <div className="mb-4">
              <label className="block text-sm font-medium" htmlFor="endereco">
                Endereço
              </label>
              <input
                id="endereco"
                type="text"
                className="block w-40 px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none text-[#00A27B] "
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>
            <div className="mb-4 ml-4">
              <label className="block text-sm font-medium" htmlFor="numero">
                Nº
              </label>
              <input
                id="numero"
                type="number"
                className="block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none text-[#00A27B]"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="celular">
              Celular
            </label>
            <input
              id="celular"
              type="tel"
              className="block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none text-[#00A27B]"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="sexo">
              Sexo
            </label>
            <div className="flex items-center">
              <input
                id="masculino"
                type="radio"
                name="sexo"
                value="masculino"
                className="mr-2 bg-transparent checked:bg-[#00A27B] ring-offset-1 h-3 w-3 rounded-full appearance-none box-border ring-2 ring-[#00A27B]"
                checked={sexo === 'masculino'}
                onChange={(e) => setSexo(e.target.value)}
              />
              <label htmlFor="masculino">Masculino</label>

              <input
                id="feminino"
                type="radio"
                name="sexo"
                value="feminino"
                className="ml-4 mr-2 bg-transparent checked:bg-[#00A27B] checked:ring-offset-1 h-3 w-3 rounded-full appearance-none box-border ring-2 ring-[#00A27B]"
                checked={sexo === 'feminino'}
                onChange={(e) => setSexo(e.target.value)}/>
              <label htmlFor="feminino">Feminino</label>
              </div>
              </div>

                <div className="mb-4">
                <label className="block mb-2 text-sm font-medium" htmlFor="dataNascimento">
                  Data de Nascimento
                </label>
                <input
                  id="dataNascimento"
                  type="date"
                  className="block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none text-[#00A27B]"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 px-4 py-2 text-sm font-medium text-white bg-[#00A27B] rounded-md focus:outline-none focus:ring-1 active:bg-[#00a27cbf]"
              >
                Cadastrar
              </button>
              </form>
          </div>
                );
};
