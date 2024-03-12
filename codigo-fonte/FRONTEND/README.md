# Estúdio de Beleza: Fatima Styles

Este projeto é uma aplicação ReactJS criada com Vite. Ele segue determinadas convenções e padrões de estrutura de pasta, convenções de nomenclatura e estilo de codificação.

## Instalação

Para instalar e executar este projeto, siga estes passos:

1. Clone o repositório para a sua máquina local:

```bash
git clone <url-do-repositorio>
```

2. Navegue até o diretório do projeto:

```bash
cd diretorio-do-projeto
```

3. Instale as dependências utilizando npm:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Estrutura de Pastas

O projeto segue uma estrutura de pasta padrão:

- `pages`: Contém componentes de nível superior representando páginas individuais da aplicação.
- `components`: Contém componentes de interface do usuário reutilizáveis.
- `contexts`: Contém provedores de contexto do React.
- `routes`: Contém a configuração de rotas, com a pasta `Router` dentro.
- Dentro de cada pasta de componente ou página:
  - `index.jsx`: Arquivo principal do componente.
  - `styles.js`: Componentes estilizados específicos para o componente utilizando styled-components.

## Styled Components

Este projeto utiliza styled components para estilização. Os styled components permitem escrever CSS em JavaScript, fornecendo estilos específicos para os componentes. Para usar styled components:

1. Importe a função `styled` da biblioteca styled-components:

```javascript
import styled from 'styled-components';
```

2. Defina os styled components usando a função `styled`:

```javascript
const StyledComponente = styled.div`
  /* Estilos CSS */
`;
```

3. Use o styled component definido nos seus componentes React:

```javascript
const MeuComponente = () => {
  return <StyledComponente>Componente Estilizado</StyledComponente>;
};
```

Para mais informações sobre styled components, consulte a [documentação](https://styled-components.com/docs).

## Padrões de Linguagem e Codificação

Este projeto está padronizado em inglês, incluindo nomes de pastas, nomes de arquivos e código. É essencial aderir a esses padrões para consistência e manutenibilidade da base de código.

## Importância de Seguir Padrões

Seguir padrões e convenções garante consistência em toda a base de código, tornando mais fácil para os desenvolvedores entender, manter e colaborar no projeto. Nomes consistentes, estrutura de pasta e estilo de codificação levam a uma melhor organização e legibilidade, resultando em uma aplicação mais robusta e fácil de manter.