# Monitoring 

## Descrição

Api de CRUD para dados de geolocalização em tempo real com web socket, os dados são salvos no banco de dados nã relacional, o Mongo. 
## Instalação

Faça clone do projeto, e rode 
````npm install``` ou `
```yarn``` para instalação de todas as dependências


## Configuração

Crie uma conta no [Mongo Atlas](https://www.mongodb.com/cloud/atlas), crie um cluster e base de dados (Pode ser no modo gratuito) ou use o mongo local (para testes);

Configure seu usuário e senha em .env, crie um arquivo .env como o exemplo em .env.example, lá você irá configurar usuário e senha do seu mongo e a porta da aplicação.

Rode 
````npm run dev``` ou `
```yarn dev``` para executar com o nodemon, troque ####dev por ####start caso queira rodar com o node
