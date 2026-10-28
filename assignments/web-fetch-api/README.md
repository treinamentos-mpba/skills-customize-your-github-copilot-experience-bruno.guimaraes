# 📘 Atividade: Aplicação Web com Fetch API

## 🎯 Objetivo

Conecte uma página HTML a uma API REST usando JavaScript e `fetch()`. Você vai carregar, criar e atualizar tarefas, mostrando as respostas da API na interface.

## 📝 Tarefas

### 🛠️ Carregar e Exibir Tarefas

#### Descrição
Use o arquivo `app.js` inicial e a API de tarefas criada na atividade de FastAPI. Busque as tarefas no endpoint `GET /tasks` e apresente cada uma na página.

#### Requisitos
A página concluída deve:

- Fazer uma requisição `GET` para `http://127.0.0.1:8000/tasks` usando `fetch()`
- Converter a resposta JSON e exibir o título e o estado de cada tarefa
- Mostrar uma mensagem enquanto os dados são carregados e outra quando não houver tarefas
- Apresentar uma mensagem clara se a requisição falhar ou a API retornar um erro HTTP

### 🛠️ Criar Tarefas pelo Formulário

#### Descrição
Conecte o formulário da página ao endpoint `POST /tasks` para que o usuário possa criar uma tarefa sem sair da interface.

#### Requisitos
A página concluída deve:

- Enviar o título informado em JSON no formato esperado pela API
- Verificar se a resposta HTTP foi bem-sucedida antes de tratar o resultado
- Limpar o formulário e atualizar a lista depois de criar a tarefa
- Exibir erros de validação ou de comunicação sem apagar o texto digitado

### 🛠️ Atualizar o Estado de uma Tarefa

#### Descrição
Permita marcar uma tarefa como concluída ou reabri-la usando o endpoint `PUT /tasks/{task_id}`.

#### Requisitos
A página concluída deve:

- Exibir um controle para alterar o estado de cada tarefa
- Enviar o identificador, o título e o novo valor de `completed` no corpo JSON da requisição `PUT`
- Atualizar a lista quando a API confirmar a alteração
- Reverter o controle para o estado anterior e informar o usuário caso a atualização falhe
- Iniciar a API FastAPI e servir os arquivos desta atividade por um servidor local, por exemplo, `python -m http.server 5500`
- Se a página e a API estiverem em origens diferentes, configurar o `CORSMiddleware` da API para permitir a origem local da página
- Testar carregamento, criação, atualização e erros com a API em execução
