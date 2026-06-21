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

### Estrutura do Projeto
atividade_redes/
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

Antes de executar o projeto é necessário possuir:

* Docker
* Docker Compose

Verificar instalação:

```bash
docker --version
docker compose version
```

---

## Como Executar

### 1. Clonar o repositório

```bash
git clone https://github.com/eduardo130796/atividade_redes.git
```

### 2. Acessar a pasta do projeto

```bash
cd atividade_redes
```

---

### 3. Construir e iniciar os containers

```bash
docker compose up --build
```

Na primeira execução o MySQL pode levar alguns segundos para concluir sua inicialização.

---

### 4. Verificar os containers

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

### API REST

```text
http://localhost:8000/products
```

### Documentação Swagger

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

Resposta:

```json
{
  "message": "Produto atualizado"
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

1. O usuário acessa a aplicação pelo navegador.
2. O Nginx recebe a requisição.
3. Os arquivos estáticos do Front-end são servidos pelo Nginx.
4. As chamadas para a API são encaminhadas ao FastAPI.
5. O FastAPI processa a requisição e realiza operações no MySQL.
6. O banco retorna os dados ao FastAPI.
7. O FastAPI responde em formato JSON.
8. O Front-end atualiza a interface exibida ao usuário.

---

## Funcionalidades

* Cadastro de produtos
* Listagem de produtos
* Consulta individual de produtos
* Atualização de produtos
* Exclusão de produtos
* Interface web responsiva
* Documentação automática da API (Swagger)

---

## Análise de Rede

O projeto contempla análise de tráfego utilizando Wireshark para observação de:

* Requisições HTTP entre navegador e aplicação
* Comunicação entre os containers
* Fluxo de dados entre Nginx, FastAPI e MySQL
* Respostas da API em formato JSON

---

## Demonstração

A demonstração do projeto apresenta:

* Inicialização da infraestrutura utilizando o comando docker compose up --build
* Execução dos containers
* Utilização da API REST
* Cadastro e listagem de produtos
* Navegação pela interface web
* Configuração do Nginx como proxy reverso
* Captura e análise de tráfego utilizando Wireshark

---

## Autor

Eduardo Roquête Cabral Júnior e Vitória Maria de Souza Almeida Gomes

Projeto desenvolvido para atividade acadêmica sobre Containers, Redes e Orquestração de Serviços utilizando Docker Compose, FastAPI, MySQL e Nginx.
