// bug: you can only delete the last item,
// when you click the first delete button, the last item goes away
// the first item cannot be crossed out after another one is added
// when you cross out the first item, the last item is crossed out instead

let button = document.getElementById("enter");
let input = document.getElementById("user-input");
let ul = document.querySelector("ul");
let li = undefined;
let deleteButton = undefined;

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
  li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });
  createDeleteButton().addEventListener("click", () => {
    li.remove();
    deleteButton.remove();
  });
}

function createDeleteButton() {
  deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.classList.add("btn", "btn-outline-danger", "delete");
  ul.appendChild(deleteButton);
  return deleteButton;
}

let crossOutItem = (function () {
  li = document.querySelectorAll("li");
  Array.from(li).forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("done");
    });
  });
})();

button.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterKeypress);
