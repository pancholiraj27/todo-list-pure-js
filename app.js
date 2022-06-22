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
  // creating new li
  const newLi = document.createElement("li");
  const newTodo = "hello";
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
}
