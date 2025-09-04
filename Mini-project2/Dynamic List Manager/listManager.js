const items = [];

const input = document.querySelector("#task-input");
const addButton = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

function addItem() {
  let value = input.value.trim();
  if (value.length === 0) return;

  const item = {
    id: Date.now().toString(),
    text: value,
    isEditing: false,
  };

  items.push(item);
  input.value = "";

  render();
}

function deleteItem(id) {
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
  }
  render();
}

function toggleEdit(id) {
  const item = items.find((item) => item.id === id);
  if (item) {
    item.isEditing = !item.isEditing;
  }
  render();
}

function saveEdit(id, newText) {
  const item = items.find((item) => item.id === id);
  if (item) {
    item.text = newText;
    item.isEditing = false;
  }
  render();
}

function render() {
  taskList.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");

    if (item.isEditing) {
      // Show input for editing
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.value = item.text;

      const saveBtn = document.createElement("button");
      saveBtn.innerText = "Save";
      saveBtn.addEventListener("click", () =>
        saveEdit(item.id, inputField.value)
      );

      li.appendChild(inputField);
      li.appendChild(saveBtn);
    } else {
      // Show text and edit/delete buttons
      li.innerText = item.text;

      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.classList.add("btn", "edit-btn");
      editBtn.addEventListener("click", () => toggleEdit(item.id));

      const delBtn = document.createElement("button");
      delBtn.innerText = "Delete";
      delBtn.classList.add("btn", "delete-btn");
      delBtn.addEventListener("click", () => deleteItem(item.id));

      li.appendChild(editBtn);
      li.appendChild(delBtn);
    }

    taskList.appendChild(li);
  });
}

// Add new tasks
addButton.addEventListener("click", addItem);
