# API-CLIENTES

Api para manipulação de clientes, produtos e pedidos.

# Requisitos

- NodeJS 10.19.0
- npm 6.14.9
- mysql 8.0.22

# Passos para rodar o projeto

Crie o arquivo .env e copie o .env.example para o arquivo criado e após isso siga os seguintes passos:

- Na pasta do projeto digite o comando:
  - npm install
- Entre na pasta /src do projeto e digite os comandos:
  - npx sequelize db:create api\*clientes
  - npx sequelize db:migrate
- Volte na pasta projeto digite o comando:
  - npm run dev

# Testes unitários

Para testar a aplicação utilizando testes unitários utilize o comando:

- npm run test
