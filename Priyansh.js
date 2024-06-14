function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  var task = taskInput.value.trim();

  if (task === "") return;

  var li = document.createElement("li");
  li.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" onclick="removeTask(this)">X</button>
  `;
  taskList.appendChild(li);

  taskInput.value = "";
}

function removeTask(element) {
  element.parentElement.remove();
}
