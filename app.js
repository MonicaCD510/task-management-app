let tasks = [];

let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

function addTask() {
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  tasks.push(taskText);
  taskInput.value = "";

  displayTasks();
}

function displayTasks() {
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.textContent = tasks[i];
    taskList.appendChild(li);
  }
}

addTaskBtn.addEventListener("click", addTask);