//Paragraph
const para = document.querySelector("#change-paragraph");

const changeButton = document.querySelector("#paragraph-change-button");

changeButton.addEventListener("click", () => {
  para.innerHTML = "This paragraph has been changed";
});

// Buttons
const clickButton = document.querySelector("#display-name-button");
const displayName = document.querySelector("#display-name");

clickButton.addEventListener("click", () => {
  displayName.classList.remove("invisible");
});

// Mouse Over
const lightbulb = document.querySelector("#light-bulb");

lightbulb.addEventListener("mouseover", () => {
  lightbulb.src = "images/light-bulb-on.png";
});
lightbulb.addEventListener("mouseout", () => {
  lightbulb.src = "images/light-bulb-off.png";
});

// Toggle
const alert = document.querySelector("#toggle-alert");
const toggleButton = document.querySelector("#toggle-button");

toggleButton.addEventListener("click", () => {
  alert.classList.toggle("invisible");
  if (toggleButton.innerHTML == "On") {
    toggleButton.innerHTML = "Off";
  } else {
    toggleButton.innerHTML = "On";
  }
});

// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side
const textBox = document.querySelector("#form-validate-first-name");
const valid = document.querySelector(".valid-feedback");
const invalid = document.querySelector(".invalid-feedback");
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const formValue = textBox.value;
  if (formValue.length >= 3) {
    textBox.classList.add("is-valid");
    textBox.classList.remove("is-invalid");
  } else {
    textBox.classList.add("is-invalid");
    textBox.classList.remove("is-valid");
  }
});

// Challenge: Lists
const list = document.querySelector("#hobby-list");
const addButton = document.querySelector("#add-button");
const input = document.querySelector("#form-hobby-text");

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const inputText = input.value;
  let listItem = document.createElement("li");
  listItem.classList.add("list-group-item");
  listItem.innerHTML = `${inputText}`;
  list.appendChild(listItem);
  input.value = "";
});

// Challenge: Lists (Part 2)

const list2 = document.querySelector("#hobby-list-2");

list2.addEventListener("click", (element) => {
  element.preventDefault();

  const deleteButton = (element) => {
    if (element.target.classList.contains("remove-hobby")) {
      element.target.parentElement.remove();
    }
  };
  deleteButton(element);
});
