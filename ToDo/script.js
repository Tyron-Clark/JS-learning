const todoInput = document.getElementById("todoInput");
const addTodo = document.getElementById("addTodo");
const todosList = document.getElementById("todos");
let todos = [];

addTodo.addEventListener("click", (e) => {
  const inputValue = todoInput.value.trim();
  if (!inputValue) return;

  todos.push(inputValue);
  todoInput.value = "";
  renderTodos();
});

function renderTodos() {
  todosList.innerHTML = "";

  todos.forEach((todoText, index) => {
    const todoItem = document.createElement("li");
    todoItem.className =
      "text-center flex justify-between border-gray-300 border-b-1 mt-3";

    const position = document.createElement("span");
    position.className = "flex-1";
    position.textContent = index + 1;

    const taskName = document.createElement("span");
    taskName.className = "flex-3";
    taskName.textContent = todoText;

    const status = document.createElement("select");
    status.className = "flex-1";
    // Status options
    const options = [
      { value: "pending", text: "Pending" },
      { value: "in-progress", text: "In Progress" },
      { value: "completed", text: "Completed" },
    ];
    options.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option.value;
      opt.textContent = option.text;
      status.appendChild(opt);
    });

    // Edit Button
    const edit = document.createElement("button");
    edit.className = "flex-1 text-blue-500";
    edit.textContent = "Edit";
    edit.addEventListener("click", () => editTodo(index));

    // Remove Button
    const remove = document.createElement("button");
    remove.className = "flex-1 text-red-500";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => removeTodo(index));

    todoItem.append(position, taskName, status, edit, remove);
    todosList.appendChild(todoItem);
  });
}

function removeTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function editTodo(index) {
  const newText = prompt("Edit your todo:", todos[index]);
  if (newText !== null) {
    todos[index] = newText.trim();
    renderTodos();
  }
}

// Initial render if needed
renderTodos();
