let item = document.querySelector("#item");
let todobox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToDo(this.value);
    this.value = "";
  }
});

const addToDo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${item} <i class="fa-sharp fa-solid fa-trash-can del"></i>`;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listItem.querySelector(".del").addEventListener("click", function () {
    listItem.remove();
  });
  todobox.appendChild(listItem);
};
