# Planos de Testes de Software

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

* Caso de Teste 01:

Neste teste, avaliaremos o Registro e Login por parte da Esteticista.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/105240089/13d2f29c-391c-4da1-80e0-898484f87213)


* Caso de Teste 02:

Neste teste, avaliaremos o sistema de procura de clientes pela Esteticista.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/105240089/b4470d84-6efc-499f-bb21-f674de7b8552)

* Caso de Teste 03:

Neste teste, realizaremos o cadastro do cliente pela conta admin, que será da esteticista.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/105240089/354e7c98-f46f-4335-9088-a8e3845f13a2)


* Caso de Teste 04:

| Caso de Teste | CT-04 - Cadastrar ficha facial de um cliente especifico |
|---------------|-------------------------------------------------------------------------------|
| Requisitos Associados |  `RF-011` - O sistema possuirá ficha facial para preenchimento da esteticista		|
| Objetivos do teste | Cadastrar corretamente a ficha facial de um cliente |
| Passos | 1) Acessar o navegador <br> 2) Fazer login caso deslogado <br>  3) Digitar nome do cliente desejado no input da homePage <br>  4) Selecionar o cliente <br>  5) Preencher a ficha facial do cliente <br> 6) Salvar ficha do cliente <br> |
| Critérios com êxito | O cadastro da ficha seja efetuado, o usuario seja redirecionado a homepage e veja feedback da tela seja de sucesso |

* Caso de Teste 05:

| Caso de Teste | CT-05 - Cadastrar consulta de ficha facial de um cliente |
|---------------|-------------------------------------------------------------------------------|
| Requisitos Associados |  `RF-004` - O sistema permitirá o cadastro de consultas feitas pela esteticista		|
| Objetivos do teste | Cadastrar corretamente a consulta de ficha facial de um cliente |
| Passos | 1) Fazer login caso deslogado <br> 2) Clicar em "cadastrar consulta" <br> 3) Selecionar o tipo de consulta que está cadastrando <br> 4) Preencher corretamente os dados necessários <br> 5) Salvar a ficha de consulta cliente <br> |
| Critérios com êxito | O cadastro de consulta seja realizado |

* Caso de Teste 06:

| Caso de Teste | CT-06 - Cadastrar consulta de ficha facial de um cliente |
|---------------|-------------------------------------------------------------------------------|
| Requisitos Associados |  `RF-009` - O sistema deverá possuir um login para a esteticista acessar a plataforma		|
| Objetivos do teste | Vizualização e edição do perfil da esteticista |
| Passos | 1) Fazer login caso deslogado <br> 2) Clicar em foto do perfil <br> 3) Clicar em perfil <br> 4) Vizualizar os dados e editar caso precise <br> |
| Critérios com êxito | Vizualização correta dos dados e edição funcionando |

* Caso de Teste 07:

| Caso de Teste | CT-07 - Cadastrar questionário de saúde |
|---------------|-------------------------------------------------------------------------------|
| Requisitos Associados |  `RF-002` - O sistema possuirá questionário de saúde para preenchimento do cliente		|
| Objetivos do teste | Cadastrar corretamente questionário de saúde |
| Passos | 1) Fazer login caso deslogado <br> 2) Digitar nome do cliente desejado no input da homePage <br> 3) Selecionar o cliente <br> 4) Clicar na opção "questionário de saúde" <br>  5) Preencher alguns campos obrigatórios e não obrigatórios <br> 6) Clicar no botão "Enviar" <br> |
| Critérios com êxito | Verificar se as validações estão corretas, se há algum aviso de que algum campo não foi devidamente marcado. <br> Verificar se ao clicar no botão "enviar", de fato manda os dados pro banco de dados. |

Resultado do Teste:

- Validação dos dados: OK, mas a Queixa Principal apresenta problemas em armazenar o texto inserido.

- Os campos obrigatórios possuem tratamento de obrigatoriedade funcionando corretamente.

- O visual está completo e agradável, letras com tamanho bom e texto de fácil compreensão.

 
# Evidências de Testes de Software

* Evidência do Caso de Teste 01:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/105240089/1d4a83a5-6bce-4ebd-9b89-967787c2d48d) ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/105240089/5a5d84ca-2f71-4d67-8c52-6c7d290bb652)  ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/105240089/3af9057e-4e0c-4b52-a24d-b8c625c5480f) ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/105240089/a57ed51f-d7d8-464c-9a83-0ee027bc49e3) ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/105240089/73aa5285-33b5-443b-b435-3fa6f3fa04db) ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/105240089/16799bcc-f259-4f27-8662-342ccf4383fa)

Realizamos diversos inputs nos quais alguns apresentavam erros previstos e foram corretamente alertados, testes efetuados com sucesso.

* Evidência do Caso de Teste 02:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/105240089/d412f32f-dd58-4299-b5ee-74633f52366a) ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/105240089/4c8ed530-b6fa-4935-b907-166added2ab6) ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/105240089/683e357c-ebe9-4b38-98da-22c9973f0d42)

Pesquisas faltando letra e mesmo assim acha um usuário onde encontra aquela string, e quando o input tem mais letras que o necessário, acusa "Nenhum cliente encontrado", corretamente. Testes aprovados.

* Evidência do Caso de Teste 03:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/105240089/ff1f8a3c-58f4-470d-98a3-8e48d281d703)![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/105240089/bd28afbc-c598-4ba5-86b7-928f9f4c6805)

Algumas validações como cliente cadastrado ou inexistência de e-mail estão em falta, porém a função adicionar cliente está funcionando corretamente.

* Evidência do Caso de Teste 04:

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/55036173/129e9eb3-9411-42c1-aead-3cbe292c2daf" width="500" height="800">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/55036173/24124f23-2d7d-4876-ae2c-448eb4f5df84" width="500" height="800">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/55036173/4c24e2c3-ccd3-4556-ab10-f99935db26c4" width="500" height="800">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/55036173/a56f9420-4bd1-4f1f-be31-b7242c7056e0" width="500" height="800">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/55036173/ebe118eb-dff9-4567-8ea1-ba3ff0dd30c9" width="500" height="700">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/55036173/2e9bd160-9bfd-4871-bf6c-b47d387ed66c" width="500" height="800">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/55036173/fa031a88-0f38-41b1-a69f-8e3733527d18" width="500" height="700">

<br>* Evidência do Caso de Teste 05:

VÍDEO - Appointment Test - https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/blob/main/documentos/img/Appointment%20Test.mp4

Planejamento de testes - Appointment

Cenário 1: Exibição e obrigatoriedade dos campos

1) Verificar se todos os campos são exibidos corretamente conforme o figma
	- OK

2) Verificar se os campos obrigatórios possuem tratamento de obrigatoriedade no frontend
	- OK

3) Validar se é possível preencher todos os valores
	- OK


Cenário 2: Gravação de consulta

1) Validar gravação de consulta do tipo CAPILAR no banco de dados
	- OK

2) Validar gravação de consulta do tipo FACIAL no banco de dados
	- OK

3) Verificar integridade dos valores
	- OK


Cenário 3: Posição e gravação das imagens

1) Verificar se as imagens são salvas no banco conforme seleção em tela
	- OK

2) Verificar se não existe marcação de uma imagem que interfira em outra do mesmo carrosel
	- OK

3) Validar duplicidade de marcadores
	- OK


Cenário 4: Usabilidade geral

1) Verificar se a tela é usável e confortável ao usuário
	- OK


Pontos de melhoria:

 - Avaliar a necessidade de um redirecionamento após gravar a consulta com o cliente

 - Limpar os dados de imagem ao modificar o tipo de consulta

 - Fechar o calendário ao escolher a data

 - Alertar de consultas agendadas no mesmo horário




* Evidência do Caso de Teste 06:


  
![1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/98265702/1c610e4c-f1e5-4cae-8fd9-97765daabea5)
![2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/98265702/24fbd257-aaf6-4fe0-befd-85f69ad02271)
![3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-pmv-ads-2024-1-e3-centro-estetico/assets/98265702/3f8a8e11-c7fc-4a1e-9a0b-3eda29513633)


