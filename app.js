console.log("script loaded");

// all the selectors
const todoInput = document.querySelector("#todoForm");
const todoButton = document.querySelector("#todoSubmitButton");
const todoList = document.querySelector("#ul");

// all the Event Listener
console.log(todoButton);
todoButton.addEventListener("click", submitForm);

// functions

function submitForm(e) {
  e.preventDefault();
}
