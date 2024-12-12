# EducaOnline

Projeto de blogging dinâmico - após a implementação utilizando a plataforma OutSystems e a implementação do back-end em Node.js, este repositório contém o desenvolvimento do front-end feito em React com TypeScript com utilização do Vite. 

Repositório do projeto back-end: https://github.com/barbara-azevedo/techChallenge2

## Grupo de trabalho
- RM 357978 - Bárbara Azevedo de Sá
- RM 357524 - Murilo Greco Campos de Almeida
- RM 357736 - Victor Lima Fernandes
- RM 357330 - Wellington Raimundo da Silva

Nosso grupo adotou uma abordagem colaborativa, realizando reuniões frequentes para alinhar atividades, compartilhar conhecimento e resolver desafios encontrados ao longo do desenvolvimento. 

## Interface gráfica

Este projeto conta com as seguintes páginas:
* Página principal com a lista de postagens;
* Página de leitura de postagens;
* Página de administrativa para gerenciamento de conteúdo;
* Página de edição de postagens;
* Página de criação de postagens;
* Página de login.

## Requisitos técnicos
* Desenvolvimento em React para desenvolvimento da interface;
* Utilização de hooks e componentes funcionais
* Utilização de styled components
* Aplicação responsiva
* Integração com back-end (chamadas aos endpoints REST)


# Documentação técnica de projeto

## Estrutura do projeto
A estrutura do projeto é organizada da seguinte forma:
```bash
src/   
├── assets/ 
│ └── # Contém arquivos estáticos
├── components/ 
│ └── # Contém componentes reutilizáveis da aplicação: backbutton, header, lista de posts, entre outros.
├── pages/ 
│ └── # Contém as páginas da aplicação: home, login, leitura de post, edição de post, entre outros. 
├── routes/ 
│ └── # Contém a configuração das rotas da aplicação.
├── services/ 
│ └── # Contém serviços para comunicação com APIs e outras funcionalidades.
├── app.tsx # Arquivo principal da aplicação.
├── index.css # Ponto de entrada da aplicação.
├── main.tsx # Arquivo de inicialização da aplicação.
└── vite-env.d.ts # Arquivo de configuração do Vite.
```


## Rotas
As páginas/rotas são organizadas da seguinte forma:
* Página inicial (Home): /
* Post: /post/:id
* Login: /login
* Página de gerenciamento: /postmanagement
* Criação de posts: /createpost
* Edição de post: /edit/:id

  :id é variável de acordo com o id do post selecionado. 


# Requisitos e setup

Tecnologias utilizadas:
* React
* Vite
* Typescript

## Clone do repositório
1. Clone o repositório:
```bash
git clone https://github.com/barbara-azevedo/techChallenge3.git
````
3. Navegue até o diretório do respositório:
```bash
cd techChallenge3
````
5. Instale as dependências
````bah
npm install
````
6. Execute o projeto
````bash
npm run dev
````


npm install react-router-dom
npm install @types/react-router-dom

npm install styled-components
npm install @types/styled-components

npm install axios
