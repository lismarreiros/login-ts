# 🔒 Projeto: Sistema de Cadastro e Login (Frontend + Backend)

## ✅ Descrição

Este projeto é uma aplicação completa para cadastro e login de usuários, composta por um backend em Node.js com Express e banco de dados SQLite (better-sqlite3), e um frontend que consome a API para autenticação de usuários.

---

## 🛠️ Tecnologias utilizadas

### **Backend**

- Node.js
- Express.js
- better-sqlite3
- bcryptjs (para hash de senha)
- crypto (para geração de UUIDs)
- dotenv (para variáveis de ambiente)

### **Frontend**

- React.js
- Axios (para requisições HTTP)
- CSS 

---

## ▶️ Como rodar o projeto

### **Backend**

1. Instale as dependências:

```bash
cd backend
npm install
```

2. Execute o servidor:

```bash
node server.js
```

O backend estará rodando, por exemplo, em `http://localhost:3000`.

---

### **Frontend**

1. Instale as dependências:

```bash
cd frontend
npm install
```

2. Execute a aplicação:

```bash
npm start
```

O frontend estará disponível em `http://localhost:5173` ou na porta definida no seu ambiente.

---

## 📡 Rotas da API

| Método | Rota         | Descrição                |
| ------ | ------------ | ------------------------ |
| POST   | `/users`     | Cria um novo usuário     |
| GET    | `/users/:id` | Busca usuário por ID     |
| POST   | `/login`     | Realiza login do usuário |

---

## ✅ Melhorias futuras

- Adicionar geração de JWT no login
- Validação de campos no backend
- Middleware de autenticação
- Tela de recuperação de senha
- Feedback de erro e loading no frontend

