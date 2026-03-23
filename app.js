const taskNameInput = document.getElementById("task-name");
const taskCategoryInput = document.getElementById("task-category");
const taskDeadlineInput = document.getElementById("task-deadline");
const taskStatusInput = document.getElementById("task-status");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

let tasks = [];

function addTask() {
  const task = {
    name: taskNameInput.value,
    category: taskCategoryInput.value,
    deadline: taskDeadlineInput.value,
    status: taskStatusInput.value
  };

  tasks.push(task);
  displayTasks();

  taskNameInput.value = "";
  taskCategoryInput.value = "";
  taskDeadlineInput.value = "";
  taskStatusInput.value = "In Progress";
}

function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function(task) {
    const li = document.createElement("li");
    li.textContent = `${task.name} | ${task.category} | ${task.deadline} | ${task.status}`;
    taskList.appendChild(li);
  });
}

addTaskButton.addEventListener("click", addTask);