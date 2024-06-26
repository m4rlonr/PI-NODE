# Guia de Instalação e Inicialização do Projeto

Este guia irá orientá-lo na instalação das dependências e na inicialização dos servidores do Node.js com Nodemon e Vue.js.

## Pré-requisitos

- Node.js instalado (versão recomendada: 14.x ou superior)
- npm (geralmente incluído com o Node.js)
- Vue CLI instalado globalmente

## Passos para Configuração

### 1. Clonar o Repositório

git clone https://github.com/usuario/seu-projeto.git
cd seu-projeto

### 2. Instalar Dependências do Backend

        cd .\API\
        npm install

### 3. Instalar Dependências do Frontend

        cd .\WEB\
        npm install

## Inicializando os Servidores

### 1. Inicializar o Servidor Backend com Nodemon

No diretório backend, execute:

        npm run dev

### 2. Inicializar o Servidor Frontend com Vue.js

No diretório frontend, execute:

        npm run dev

## Estrutura do Projeto

- backend/: Contém o código do servidor Node.js.
- frontend/: Contém o código do aplicativo Vue.js.

## Comandos Úteis

- Instalar Dependências:
  - Backend: npm install
  - Frontend: npm install
- Iniciar Servidor Backend: nodemon server.js
- Iniciar Servidor Frontend: npm run serve

## Problemas Comuns

- Erro de Permissão ao Instalar Nodemon Globalmente: Use sudo no Linux/Mac ou execute o terminal como administrador no Windows.

  sudo npm install -g nodemon

## Váriaveis de ambiente API

        AUTHORITY_URL=
        CLIENT_ID=
        PBI_USERNAME=
        PBI_PASSWORD=
        CLIENT_SECRET=
        SCOPE_BASE=
        PORT=

- Lembre-se de criar o arquivo na raiz do projeto

## Estrutura de Diretórios do Projeto

O projeto está organizado em três principais diretórios: `API`, `DOC` e `WEB`. A seguir, a estrutura detalhada de cada diretório.

        PI-NODE/
        ├── .idea/
        ├── API/
        │   ├── node_modules/
        │   ├── .env
        │   ├── .gitignore
        │   ├── App.js
        │   ├── nodemon.json
        │   ├── package.json
        │   └── package-lock.json
        ├── DOC/
        │   ├── insomnia.png
        │   └── README.md
        ├── WEB/
        │   ├── .idea/
        │   ├── .vscode/
        │   ├── node_modules/
        │   ├── public/
        │   ├── src/
        │   │   ├── .gitignore
        │   │   ├── index.html
        │   │   ├── jsconfig.json
        │   │   ├── package.json
        │   │   ├── package-lock.json
        │   │   ├── README.md
        │   │   └── vite.config.js
        ├── LICENSE
        └── README.md
