const todoInput = document.getElementById("todoInput");
const addTodo = document.getElementById("addTodo");
const todosList = document.getElementById("todos");
let todos = [];

addTodo.addEventListener("click", (e) => {
  // Get and validate input
  const inputValue = todoInput.value.trim();
  // If no value..
  if (!inputValue) return;

  // Add to empty todos array and clear input value
  todos.push(inputValue);
  todoInput.value = "";

  // Clear todoList before rebuilding,
  // Without this, todoList returns every entered input value
  todosList.innerHTML = "";

  console.log(todos);

  // Create list items for todos
  todos.forEach((todoText, index) => {
    const todoItem = document.createElement("li");
    todoItem.className =
      "text-center flex justify-between border-gray-300 border-b-1 mt-3";

    const position = document.createElement("span");
    position.className = "flex-1";
    position.textContent = index + 1; // Show position in array +1

    const taskName = document.createElement("span");
    taskName.className = "flex-3";
    taskName.textContent = todoText;

    const status = document.createElement("select");
    status.className = "flex-1";

    // Options for select dropdown
    const options = [
      { value: "pending", text: "Pending" },
      { value: "in-progress", text: "In Progress" },
      { value: "completed", text: "Completed" },
    ];

    // Loop over options and add to select dropdown
    options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      status.appendChild(optionElement);
    });

    const edit = document.createElement("button");
    edit.className = "flex-1 text-blue-500";
    edit.textContent = "Edit";

    const remove = document.createElement("button");
    remove.className = "flex-1 text-red-500";
    remove.textContent = "Remove";

    // Append all elements together
    todoItem.append(position, taskName, status, edit, remove);
    todosList.appendChild(todoItem);
  });
});
