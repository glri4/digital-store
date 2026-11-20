
# Digital Store

Projeto de uma loja virtual desenvolvido com React, Vite, Node.js, Express e MySQL.

## Tecnologias utilizadas

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express
- MySQL
- mysql2
- dotenv
- cors

## Funcionalidades

- Visualização de produtos
- Busca e filtros de produtos
- Visualização de detalhes dos produtos
- API REST para gerenciamento de produtos
- Cadastro, consulta, atualização e exclusão de produtos (CRUD)

## Estrutura do projeto

```text
digital-store/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── database/
│   │   └── schema.sql
│   ├── routes/
│   ├── .env.example
│   └── server.js
├── public/
├── src/
├── .gitignore
├── package.json
└── README.md
```

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Instalar as dependências do frontend

```bash
npm install
```

### 3. Configurar o banco de dados

No MySQL, execute o script localizado em:

`backend/database/schema.sql`

### 4. Configurar o backend

Entre na pasta backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` com base no `.env.example` e configure suas credenciais do MySQL.

### 5. Iniciar o servidor backend

Dentro da pasta backend:

```bash
npm run dev
```

A API estará disponível em:

`http://localhost:3001`

### 6. Iniciar o frontend

Em outro terminal, volte para a pasta principal do projeto e execute:

```bash
npm run dev
```

O frontend estará disponível no endereço informado pelo Vite, normalmente:

`http://localhost:5173`

## Endpoints da API

Base URL: `http://localhost:3001/api/products`

| Método | Endpoint | Descrição |
|---|---|---|
| GET | /api/products | Listar produtos |
| GET | /api/products/:id | Buscar produto por ID |
| POST | /api/products | Cadastrar produto |
| PUT | /api/products/:id | Atualizar produto |
| DELETE | /api/products/:id | Excluir produto |

## Banco de dados

Banco utilizado: MySQL.

Tabela principal: `products`.

Os dados dos produtos incluem:
- ID
- Nome
- Descrição
- Preço
- Imagem
- Marca
- Categoria
- Data de criação

## Autoria

Projeto acadêmico desenvolvido para fins de aprendizagem e prática de desenvolvimento web.
