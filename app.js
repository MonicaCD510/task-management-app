const taskNameInput = document.getElementById("task-name");
const taskCategoryInput = document.getElementById("task-category");
const taskDeadlineInput = document.getElementById("task-deadline");
const taskStatusInput = document.getElementById("task-status");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

let tasks = [];

// ADD TASK
function addTask() {
  const name = taskNameInput.value.trim();
  const category = taskCategoryInput.value.trim();
  const deadline = taskDeadlineInput.value;
  const status = taskStatusInput.value;

  if (name === "" || category === "" || deadline === "") {
    alert("Please fill in all fields");
    return;
  }

  const task = {
    name: name,
    category: category,
    deadline: deadline,
    status: status
  };

  tasks.push(task);
  displayTasks();

  taskNameInput.value = "";
  taskCategoryInput.value = "";
  taskDeadlineInput.value = "";
  taskStatusInput.value = "In Progress";
}

// REMOVE TASK
function removeTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

// DISPLAY TASKS
function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function(task, index) {
    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = `${task.name} | ${task.category} | ${task.deadline}`;

    // STATUS DROPDOWN
    const statusSelect = document.createElement("select");

    const option1 = document.createElement("option");
    option1.value = "In Progress";
    option1.textContent = "In Progress";

    const option2 = document.createElement("option");
    option2.value = "Completed";
    option2.textContent = "Completed";

    statusSelect.appendChild(option1);
    statusSelect.appendChild(option2);

    statusSelect.value = task.status;

    statusSelect.addEventListener("change", function() {
      tasks[index].status = statusSelect.value;
    });

    // REMOVE BUTTON
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
      removeTask(index);
    });

    li.appendChild(taskText);
    li.appendChild(statusSelect);
    li.appendChild(removeButton);

    taskList.appendChild(li);
  });
}

// BUTTON CLICK
addTaskButton.addEventListener("click", addTask);