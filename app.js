console.log("script loaded");

// all the selectors
const todoInput = document.querySelector("#todoForm");
const todoButton = document.querySelector("#todoSubmitButton");
const todoList = document.querySelector("#ul");
const noTodoDisplay = document.querySelector("#noTodoDisplay");

// all the Event Listener
console.log(todoButton);
todoButton.addEventListener("click", submitForm);

// functions

function submitForm(e) {
  e.preventDefault();
  // remove the h1 from the display
  noTodoDisplay.remove();
  // console.log();

  // creating new li
  const newLi = document.createElement("li");
  const newTodo = todoInput.value;
  newLi.append(newTodo);
  // console.log(newLi);

  // adding done button
  const todoDone = document.createElement("button");
  todoDone.innerText = "✅";
  // creating class name of button
  todoDone.setAttribute("class", "todoWorkDone");
  newLi.append(todoDone);

  // adding trash button
  const trash = document.createElement("button");
  trash.innerText = "❌";
  // creating class name of button
  trash.setAttribute("class", "trashWork");
  newLi.append(trash);

  // adding new li to ul
  todoList.append(newLi);
  // console.log(newLi);

  todoInput.value = "";

  // adding event listener to buttons
  todoDone.addEventListener("click", workDone);
  trash.addEventListener("click", notWantTodo);
}

function workDone(e) {
  // console.log("work done");
  // console.log(e.target);
  const doneTodo = e.target;
  // target the parent element and underline it
  doneTodo.parentElement.style.textDecoration = "line-through";
  // disabled the button when the work done
  doneTodo.disabled = true;
}

function notWantTodo(e) {
  console.log("deleting todo");
  const deleteTodo = e.target;
  // delete the particular todo
  deleteTodo.parentElement.remove();
  // deleteTodo.remove();
}
