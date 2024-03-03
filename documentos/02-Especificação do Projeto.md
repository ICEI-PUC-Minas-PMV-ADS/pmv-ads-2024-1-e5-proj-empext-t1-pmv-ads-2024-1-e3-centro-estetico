# Especificações do Projeto

Percebe-se que há uma falta de organização que está prejudicando a eficiência no trabalho, especialmente no preenchimento manual das fichas de anamnese dos clientes, que consomem muito tempo. Essas fichas são essenciais para compreender as necessidades e histórico médico dos clientes. Além disso, ela enfrenta dificuldades na organização do histórico de atendimentos e deseja poder acessá-los rapidamente. Outra lacuna é a ausência de fichas de cadastro para cada cliente, atualmente mantidas em papel, dificultando a localização quando necessário.

## Arquitetura e Tecnologias

o	Descreva brevemente a arquitetura definida para o projeto e as tecnologias a serem utilizadas. Sugere-se a criação de um diagrama de componentes da solução.

## Project Model Canvas

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/68014636/bbc41b6d-e5f4-4378-af46-a965b16f515d)


> **Links Úteis**:
> Disponíveis em material de apoio do projeto

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema permitirá o cadastro do cliente pela esteticista | MÉDIA |
|RF-002| O sistema possuirá ficha de anamnese para preenchimento do cliente e fichas corporal e/ou facial para preenchimento da esteticista | ALTA |
|RF-003| O sistema deverá gerar um link que possa ser compartilhado com o cliente para acessar a ficha de anamnese | MÉDIA |
|RF-004| O sistema permitira o cadastro de consultas feitas pela esteticista | ALTA |
|RF-005| O sistema permitirá o acesso do histórico de consultas do cliente de estetica alimentado pelas consultas cadastradas | ALTA |
|RF-006| O sistema deverá ter uma metodologia de busca, para localizar o cadastro dos clientes de estética | ALTA |
|RF-007| O sistema permitirá que as fichas de sejam revisadas e editadas pela esteticista | ALTA |
|RF-008| O sistema deverá destacar as informações mais relevantes no historico de cada cliente | MÉDIA |
|RF-009| O sistema deverá possuir um login para a esteticista acessar a plataforma | MÉDIA |
|RF-010| O sistema deverá exibir a agenda de disponibilidade da esteticista para realização de procedimentos | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema possuirá responsividade para atender todos os dispositivos homologados | ALTA |
|RNF-002| O sistema deverá operar em navegadores WEB | ALTA |
|RNF-002| O sistema deverá seguir as normas da LGPD | ALTA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

## Modelo ER (Projeto Conceitual)

![diagrama-conceitual](./img/diagrama-conceitual.png)

## Entidades
* **Usuario:** Representa os usuários do sistema. Podem ser administradores ou clientes.

* **Fichas (Capilar, Facial, Corporal):**  Categorias específicas de fichas de anamnese, cada uma destinada a um tipo de procedimento estético. Estas entidades armazenam informações pertinentes aos procedimentos capilares, faciais e corporais, respectivamente.

* **HistoricoDeConsultas:** Mantém um registro detalhado de todas as consultas realizadas pelo usuário, incluindo uma descrição da consulta, observações adicionais e as datas de criação e atualização. Esta entidade é crucial para o acompanhamento contínuo do histórico clínico e estético do cliente.


## Relações
**Usuario "pode ter" FichaCapilar:** Cada usuário pode ter múltiplas fichas de anamnese capilar associada a ele

**Usuario "pode ter" FichaFacial:** Cada usuário pode ter múltiplas fichas de anamnese facial associada a ele.

**Usuario "pode ter" FichaCorporal:** Cada usuário pode ter múltiplas fichas de anamnese corporal associada a ele

**Usuario "contém" HistoricoDeConsulta:** Este relacionamento mostra que toda vez que o cliente recebe um atendimento na clínica de estética, um registro é criado com informações relevantes.

Este diagrama conceitual fornece uma visão simplificada e abstrata do modelo de dados, focando na estrutura e nas relações principais.

## Projeto da Base de Dados

![diagrama-entidade-relacionamento](./img/diagrama-entidade-relacionamento.png)


## Entidades e Campos

### `Usuario`
- **Descrição**: Representa os usuários do sistema, incluindo tanto administradores quanto clientes. Contém informações pessoais e de contato, além de dados administrativos.
- **Campos**:
  - `id`: Identificador único para cada usuário.
  - `nome`: Nome completo do usuário.
  - `dataDeNascimento`: Data de nascimento do usuário.
  - `endereco`: Endereço residencial do usuário.
  - `estado_civil`: Estado civil do usuário (Casado, Solteiro, Divorciado).
  - `email`: E-mail de contato do usuário.
  - `telefone`: Número de WhatsApp do usuário.
  - `sexo`: Sexo do usuário (Masculino / Feminino).
  - `tipo_usuario`: Tipo de usuário (Admin, Cliente), definindo seu papel no sistema.
  - `criado_em`: Data de criação do registro do usuário.
  - `atualizado_em`: Data da última atualização do registro do usuário.

### `FichaCapilar`, `FichaFacial`, `FichaCorporal`
- **Descrição**: Estas entidades representam as fichas de anamnese específicas para cada tipo de procedimento estético (capilar, facial, corporal), armazenando informações pertinentes a cada um.
- **Campos Comuns**:
  - `id`: Identificador único para cada ficha de anamnese.
  - `usuarioId`: Chave estrangeira referenciando o usuário associado à ficha.
  - `perguntas`: aqui teremos as mais de 43 perguntas para cada ficha. Não listado por simplificação.
  - `criado_em`: Data de criação da ficha.
  - `atualizado_em`: Data da última atualização da ficha.

### `HistoricoDeConsultas`
- **Descrição**: Mantém registros detalhados de todas as consultas realizadas pelos usuários, incluindo descrições das consultas e observações adicionais.
- **Campos**:
  - `id`: Identificador único para cada registro de consulta.
  - `adminId`: Chave estrangeira referenciando o usuário do tipo admin ao qual a consulta está associada.
  - `clienteId`: Chave estrangeira referenciando o usuário do tipo cliente ao qual a consulta está associada.
  - `descricao`: Descrição detalhada da consulta.
  - `observacoes`: Observações adicionais sobre a consulta, sendo um campo não obrigatório.
  - `criado_em`: Data de criação do registro da consulta.
  - `atualizado_em`: Data da última atualização do registro da consulta.

## Relações

- **`Usuario -- FichaCapilar/FichaFacial/FichaCorporal`**: Ilustra que cada usuário pode ter múltiplas fichas de anamnese associadas, uma para cada tipo de procedimento estético (capilar, facial, corporal). Isso permite um acompanhamento detalhado e personalizado para cada cliente.

- **`Usuario -- HistoricoDeConsultas`**: Demonstra que cada usuário possui um histórico de consultas, permitindo um registro detalhado de todos os atendimentos e procedimentos realizados no centro estético.





## Diagrama de caso de uso

### ![Caso de Uso UML](img\Caso de Uso UML.jpeg)
