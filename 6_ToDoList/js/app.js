document.addEventListener("DOMContentLoaded", init());
function init() {
  console.log(`${window}: DOM content loaded and succesfully parsed!`);
}

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const removeAllTasksBtn = document.getElementById("removeFinishedTasksButton");

function addNewTask() {
  const newTask = document.createElement("li");
  newTask.innerText = taskInput.value;
  taskList.appendChild(newTask);
  taskInput.value = null;

  const finishBtn = document.createElement("button");
  newTask.appendChild(finishBtn);
  finishBtn.classList.add("btn");
  finishBtn.innerText = "Complete";

  const deleteBtn = document.createElement("button");
  newTask.appendChild(deleteBtn);
  deleteBtn.classList.add("btn");
  deleteBtn.innerText = "Delete";

  finishBtn.addEventListener("click", function() {
    newTask.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", function() {
    taskList.removeChild(newTask);
  });
}

addBtn.addEventListener("click", addNewTask);

removeAllTasksBtn.addEventListener("click", function() {
  for (let i = 0; i < taskList.childElementCount; i++) {
    if (taskList.children[i].className === "completed") {
      taskList.removeChild(taskList.children[i]);
      i--;
    }
  }
});
