# Catálogo de Produtos - Docker, FastAPI, MySQL e Nginx

## Descrição

Projeto desenvolvido para demonstrar a criação de uma aplicação web containerizada utilizando Docker Compose.

A aplicação consiste em um catálogo de produtos com operações CRUD (Create, Read, Update e Delete), utilizando:

* FastAPI como API Backend
* MySQL como banco de dados relacional
* Nginx como proxy reverso
* HTML, CSS, JavaScript e Bootstrap no Front-end
* Docker Compose para orquestração dos serviços

---

## Arquitetura

```text
Navegador
     │
     ▼
   Nginx
     │
 ┌───┴────┐
 ▼        ▼
Frontend  FastAPI
              │
              ▼
            MySQL
```

### Componentes

| Serviço        | Função                                                  |
| -------------- | ------------------------------------------------------- |
| Front-end      | Interface web para cadastro e gerenciamento de produtos |
| Nginx          | Proxy reverso e servidor dos arquivos estáticos         |
| FastAPI        | API REST responsável pelas regras de negócio            |
| MySQL          | Persistência dos dados                                  |
| Docker Compose | Orquestração dos containers                             |

---

## Estrutura do Projeto

```text
catalogo-produtos/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── index.html
│   ├── app.js
│   └── style.css
│
├── nginx/
│   ├── nginx.conf
│   └── Dockerfile
│
├── mysql/
│   └── init.sql
│
├── docker-compose.yml
│
└── README.md
```

---

## Tecnologias Utilizadas

* Python 3.11
* FastAPI
* SQLAlchemy
* MySQL 8
* Nginx
* Docker
* Docker Compose
* Bootstrap 5
* JavaScript

---

## Requisitos

Antes de executar o projeto, é necessário possuir:

* Docker
* Docker Compose

Verificar instalação:

```bash
docker --version
docker compose version
```

---

## Como Executar

### Clonar o repositório

```bash
git clone https://github.com/eduardo130796/atividade_redes.git
```

```bash
cd catalogo-produtos
```

---

### Subir os containers

```bash
docker compose up --build
```

---

### Verificar containers

```bash
docker ps
```

Containers esperados:

* nginx
* fastapi
* mysql

---

## Acessos

### Aplicação Web

```text
http://localhost
```

### API

```text
http://localhost/api/products
```

### Swagger

```text
http://localhost:8000/docs
```

---

## API REST

### Criar Produto

```http
POST /products
```

Body:

```json
{
  "name": "Mouse Gamer",
  "category": "Periféricos",
  "price": 149.90
}
```

Resposta:

```json
{
  "id": 1,
  "name": "Mouse Gamer",
  "category": "Periféricos",
  "price": 149.90
}
```

---

### Listar Produtos

```http
GET /products
```

Resposta:

```json
[
  {
    "id": 1,
    "name": "Mouse Gamer",
    "category": "Periféricos",
    "price": 149.90
  }
]
```

---

### Buscar Produto por ID

```http
GET /products/{id}
```

---

### Atualizar Produto

```http
PUT /products/{id}
```

Body:

```json
{
  "name": "Mouse Gamer RGB",
  "category": "Periféricos",
  "price": 199.90
}
```

---

### Remover Produto

```http
DELETE /products/{id}
```

Resposta:

```json
{
  "message": "Produto removido"
}
```

---

## Portas Utilizadas

| Serviço | Porta Interna | Porta Externa |
| ------- | ------------- | ------------- |
| Nginx   | 80            | 80            |
| FastAPI | 8000          | 8000          |
| MySQL   | 3306          | 3306*         |

* Utilizada apenas para desenvolvimento e testes.

---

## Fluxo da Aplicação

1. Usuário acessa a aplicação pelo navegador.
2. Nginx recebe a requisição.
3. O Front-end é servido pelo Nginx.
4. Chamadas para `/api` são encaminhadas ao FastAPI.
5. FastAPI realiza operações no MySQL.
6. Os dados retornam em formato JSON.
7. O Front-end atualiza a interface.

---

## Funcionalidades

* Cadastro de produtos
* Listagem de produtos
* Consulta individual
* Atualização de produtos
* Exclusão de produtos
* Interface web responsiva
* Documentação automática da API (Swagger)

---

## Análise de Rede

O projeto também contempla análise de tráfego utilizando Wireshark para observação de:

* Requisições HTTP
* Comunicação entre containers
* Fluxo entre navegador, Nginx, API e banco de dados

---

## Autor

Projeto desenvolvido para atividade acadêmica de Containers, Redes e Orquestração de Serviços com Docker.
