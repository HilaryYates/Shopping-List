let button = document.getElementById("enter");
let input = document.getElementById("user-input");
let ul = document.querySelector("ul");

function listItem() {
  return input.value.length;
}

function addToListAfterClick() {
  if (listItem() > 0) {
    createListElement();
  }
}

function addToListAfterKeypress(event) {
  if (listItem() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function createListElement() {
  let li = document.createElement("li");
  li.classList.add("text-capitalize");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });
  createDeleteButton();
}

function createDeleteButton() {
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.classList.add("btn", "btn-outline-danger", "delete", "btn-sml");
  let items = document.querySelectorAll("li");
  items.forEach((item) => item.append(deleteButton));
  deleteButton.addEventListener("click", () => {
    deleteButton.parentElement.remove();
  });
}

button.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterKeypress);

button.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterKeypress);
