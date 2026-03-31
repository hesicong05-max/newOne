const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  input.value = "";
}