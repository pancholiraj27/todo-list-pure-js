console.log("script loaded");

// all the selectors
const todoInput = document.querySelector("#todoForm");
const todoButton = document.querySelector("#todoSubmitButton");
const todoList = document.querySelector("#ul");
const noTodoDisplay = document.querySelector("#noTodoDisplay");

// all the Event Listener
todoButton.addEventListener("click", submitForm);

// functions

function submitForm(e) {
  e.preventDefault();
  // console.log(e.target.innerText === "Add Todo");
  if (e.target.innerText === "Add Todo") {
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

    // editing todo button
    const edit = document.createElement("button");
    edit.innerText = "✏️";
    // creating class name of button
    edit.setAttribute("class", "editWork");
    newLi.append(edit);

    // adding new li to ul
    todoList.append(newLi);
    // console.log(newLi);

    todoInput.value = "";

    // adding event listener to buttons
    todoDone.addEventListener("click", workDone);
    trash.addEventListener("click", notWantTodo);
    edit.addEventListener("click", editTodo);
  }
  // else {
  //   todoButton.addEventListener("click", editTodo);
  // }
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

// function editTodo(e) {
//   // console.log("todo editing", e.target.parentElement.firstChild);
//   todoButton.innerText = "Edit";
//   let oldTodoInput = e.target.parentElement.firstChild.textContent;
//   todoInput.value = oldTodoInput;
//   todoInput.value = oldTodoInput + todoInput.value;
//   // console.log(todoInput.value);

//   // const newValue = e.target.parentElement.firstChild.textContent;
//   // console.log(todoInput.value);
//   // console.log((e.target.parentElement.firstChild.textContent = "namaste"));

//   // todoButton.innerText = "Add Todo";
// }
