
/**
 * Adds a task to the task list when the form is submitted.
 * @param {Event} event - The form submission event.
 */
function addTask(event) {
  event.preventDefault();


  const nameInput = document.getElementById("name");
  const taskNameInput = document.getElementById("tname");
  const taskDescriptionInput = document.getElementById("tdesc");

  const name = nameInput.value;
  const taskName = taskNameInput.value;
  const taskDescription = taskDescriptionInput.value;

  
  if (!name || !taskName || !taskDescription) {
    alert("Please fill in all fields.");
    return;
  }


  const taskElement = document.createElement("table");
  taskElement.className = "task";

  const taskContent = document.createElement("tr");
  const userNameHeader = document.createElement("th");
  userNameHeader.textContent = "User Name";
  taskContent.appendChild(userNameHeader);
  const taskHeader = document.createElement("th");
  taskHeader.textContent = "Task Name";
  taskContent.appendChild(taskHeader);
  const descriptionHeader = document.createElement("th");
  descriptionHeader.textContent = "Task Description";
  taskContent.appendChild(descriptionHeader);
  taskElement.appendChild(taskContent);

 
  const taskRow = document.createElement("tr");
  const userNameData = document.createElement("td");
  userNameData.textContent = name;
  taskRow.appendChild(userNameData);
  const taskNameData = document.createElement("td");
  taskNameData.textContent = taskName;
  taskRow.appendChild(taskNameData);
  const taskDescriptionData = document.createElement("td");
  taskDescriptionData.textContent = taskDescription;
  taskRow.appendChild(taskDescriptionData);
  const deleteButtonData = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-task";
  deleteButton.textContent = "Done";
  deleteButtonData.appendChild(deleteButton);
  taskRow.appendChild(deleteButtonData);
  taskElement.appendChild(taskRow);

  
  const taskList = document.getElementById("task-list");
  taskList.appendChild(taskElement);

  document.getElementById("form").reset();

  
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(taskElement);
  });
}


document.getElementById("form").addEventListener("submit", addTask);