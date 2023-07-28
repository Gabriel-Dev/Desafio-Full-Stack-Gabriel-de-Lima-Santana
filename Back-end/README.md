# Desafio-Fullstack-Nex-Digital

## Preparando o ambiente back-end

- Navegue e abra o terminal na pasta Back-end

- Instale todos os pacotes

```bash
npm install
```

- Crie um arquivo .env na raiz do projeto seguindo exemplo do arquivo .env.example

- Execute as migrações

```bash
npx sequelize-cli db:migrate
```
- Inicie o servidor

```bash
npm run dev
```

- Para acessar a documentação da API acesse a url "http://localhost:3001/api-docs" no seu navegador 