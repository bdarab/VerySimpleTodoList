const InputButton = document.querySelector("#basic-addon");
const TodosContainer = document.querySelector(".todosContainer");
const InputField = document.querySelector("#inputField");

InputButton.addEventListener("click", () => {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = InputField.value;
  TodosContainer.appendChild(paragraph);
  InputField.value = "";
  paragraph.addEventListener("click", () => {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", () => {
    paragraph.remove();
  });
});
