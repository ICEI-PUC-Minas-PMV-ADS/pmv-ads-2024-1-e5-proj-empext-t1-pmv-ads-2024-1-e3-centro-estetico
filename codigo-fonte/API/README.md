# Centro Estético API

API para gerenciar um centro estético, permitindo operações CRUD em diversas entidades como usuários, análises capilares, histórico de consultas, entre outros.

## Dependências do Projeto

Este projeto é construído usando Node.js, Fastify, Prisma ORM, Zod para validação de entrada e PostgreSQL como banco de dados. As versões específicas de cada dependência podem ser encontradas no arquivo `package.json`.

### Principais Dependências

- `@prisma/client` e `prisma`: ORM utilizado para interagir com o banco de dados PostgreSQL.
- `fastify`: Framework web para construir o servidor HTTP.
- `zod`: Biblioteca para validação de esquemas.
- `dotenv`: Módulo para carregar variáveis de ambiente a partir de um arquivo `.env`.

## Configuração do Ambiente

1. Certifique-se de ter o Node.js instalado em sua máquina. Este projeto recomenda o uso da versão LTS atual, que é `v20.11.1`.

2. Clone o repositório do projeto para sua máquina local.

3. Navegue até o diretório do projeto e instale as dependências executando:
   <code>npm install</code>

## Configuração do Banco de Dados

Este projeto usa PostgreSQL como banco de dados. Você pode configurar uma instância do PostgreSQL localmente ou usar um container Docker para isso.

### Usando Docker

Para configurar e iniciar o banco de dados PostgreSQL usando Docker, siga estes passos:

1. **Instalação do Docker e Docker Compose**: Certifique-se de ter tanto o Docker quanto o Docker Compose instalados em sua máquina. Visite [Docker](https://docs.docker.com/get-docker/) e [Docker Compose](https://docs.docker.com/compose/install/) para instruções de instalação caso ainda não os tenha instalado.

2. **Iniciar o Banco de Dados**: No diretório raiz do projeto, você encontrará um arquivo `docker-compose.yml` pré-configurado, que define o serviço para o banco de dados PostgreSQL. Para iniciar o banco de dados, execute o seguinte comando no terminal:
   <code>docker-compose up -d</code>

   Este comando utiliza o Docker Compose para iniciar o container do PostgreSQL em modo detached (em segundo plano), permitindo que você continue usando o terminal para outras tarefas.

3. **Verificação**: Após executar o comando, você pode verificar se o container do banco de dados está rodando corretamente com:
   <code>docker ps</code>

   Este comando lista todos os containers ativos. Você deve ver o container do PostgreSQL listado entre os containers em execução.


### Configuração das Variáveis de Ambiente

1. Crie um arquivo `.env` no diretório raiz do projeto, copiando o conteúdo do arquivo `.env.example` fornecido:
   <code>cp ./.env.example ./.env</code>

2. Certifique-se de ajustar as variáveis no arquivo `.env` conforme necessário, especialmente a `DATABASE_URL` para apontar para sua instância do PostgreSQL.

## Executando o Projeto

Para iniciar o servidor em modo de desenvolvimento, use o script npm `dev` definido no `package.json`:

<code>npm run dev</code>

Este comando iniciará o servidor Fastify em `http://localhost:<PORT>`, onde `<PORT>` é a porta definida na variável de ambiente `PORT` no seu arquivo `.env`.

### Build do Projeto

Para construir o projeto para produção, execute:

<code>npm run build</code>

Este comando compilará os arquivos TypeScript para JavaScript no diretório `build`.

### Iniciando o Servidor em Modo de Produção

Após a construção, você pode iniciar o servidor em modo de produção com:

<code>npm start</code>

## Estrutura do Projeto

- `src/`: Contém os arquivos de código-fonte do projeto, incluindo a definição das rotas Fastify e modelos Prisma.
- `.env.example`: Exemplo de arquivo de configuração das variáveis de ambiente.
- `docker-compose.yml`: Configuração do Docker Compose para iniciar o PostgreSQL.

## Licença

Este projeto está sob a licença ISC.
