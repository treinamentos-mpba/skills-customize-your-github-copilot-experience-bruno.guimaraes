# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Aprenda a construir uma API REST com FastAPI, definindo rotas HTTP, validando dados com modelos Pydantic e verificando o comportamento dos endpoints com testes.

## 📝 Tasks

### 🛠️ Create the First API Endpoint

#### Description
Crie uma aplicação FastAPI que gerencie uma lista de tarefas. Comece com um endpoint de consulta que retorne todas as tarefas armazenadas em memória.

#### Requirements
A aplicação concluída deve:

- Criar uma instância de `FastAPI` em um arquivo `main.py`
- Implementar `GET /tasks` e retornar uma lista de tarefas em formato JSON
- Incluir pelo menos duas tarefas iniciais, cada uma com `id`, `title` e `completed`
- Iniciar localmente com Uvicorn e disponibilizar a documentação interativa em `/docs`


### 🛠️ Implement Task CRUD Operations

#### Description
Expanda a API para permitir criar, consultar, atualizar e remover tarefas. Use modelos Pydantic para validar os dados recebidos e retorne respostas HTTP apropriadas.

#### Requirements
A aplicação concluída deve:

- Implementar `POST /tasks` para criar uma tarefa com título obrigatório e estado `completed` inicialmente falso
- Implementar `GET /tasks/{task_id}` e retornar `404` quando a tarefa não existir
- Implementar `PUT /tasks/{task_id}` para atualizar uma tarefa existente
- Implementar `DELETE /tasks/{task_id}` e retornar `404` quando a tarefa não existir
- Usar modelos Pydantic para validar os dados de entrada e definir os campos da tarefa


### 🛠️ Test the API

#### Description
Escreva testes automatizados para verificar os fluxos principais da API usando o `TestClient` do FastAPI. Os testes devem cobrir resultados de sucesso e erros esperados.

#### Requirements
A aplicação concluída deve:

- Criar testes para listar, criar, consultar, atualizar e remover tarefas
- Verificar os códigos de status e o conteúdo JSON das respostas
- Verificar respostas `404` para identificadores inexistentes
- Executar os testes com `pytest` e garantir que todos passem
