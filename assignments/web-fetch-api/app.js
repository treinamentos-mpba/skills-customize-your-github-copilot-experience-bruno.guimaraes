const API_URL = "http://127.0.0.1:8000/tasks";

const taskForm = document.querySelector("#task-form");
const taskTitleInput = document.querySelector("#task-title");
const taskList = document.querySelector("#task-list");
const statusMessage = document.querySelector("#status-message");

let tasks = [];

function showStatus(message) {
  statusMessage.textContent = message;
}

function renderTasks() {
  taskList.replaceChildren();

  for (const task of tasks) {
    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");

    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.dataset.taskId = task.id;
    checkbox.id = `task-${task.id}`;

    label.htmlFor = checkbox.id;
    label.textContent = `${task.title}${task.completed ? " (concluída)" : ""}`;

    item.append(checkbox, label);
    taskList.append(item);
  }
}

async function loadTasks() {
  // TODO: Busque as tarefas, trate erros HTTP e de rede e atualize a interface.
}

async function createTask(title) {
  // TODO: Envie o título como JSON, trate a resposta e recarregue a lista.
}

async function updateTask(task, completed) {
  // TODO: Envie o título e o novo estado para /tasks/{task.id} com PUT.
}

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = taskTitleInput.value.trim();

  if (title) {
    await createTask(title);
  }
});

taskList.addEventListener("change", async (event) => {
  const checkbox = event.target;
  const task = tasks.find((item) => String(item.id) === checkbox.dataset.taskId);

  if (task) {
    await updateTask(task, checkbox.checked);
  }
});

loadTasks();
