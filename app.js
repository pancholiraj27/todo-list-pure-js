console.log("script loaded");

localStorage.setItem("name", "raj");

// all the selectors
document.addEventListener("DOMContentLoaded", getTodos);
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

    // add todo to local storage

    saveLocalTodo(todoInput.value);

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
  } else {
    todoButton.addEventListener("click", editTodo);
  }
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
  removeLocalTodos(deleteTodo.parentElement);
}

function editTodo(e) {
  // console.log("todo editing", e.target.parentElement.firstChild);
  todoButton.innerText = "Edit";

  // console.log(todoInput.value);
  const editNewTodo = todoInput.value;

  const updatedTodo = e.target.parentElement.firstChild;
  todoInput.value = e.target.parentElement.firstChild.textContent;
  // console.log(updatedTodo);

  todoButton.addEventListener("click", (e) => {
    console.log("submiteed", todoInput.value);
    const newTodoValue = todoInput.value;
    // console.log((updatedTodo.innerText = "hello"));
    console.log(updatedTodo);
    updatedTodo.textContent = newTodoValue;
    todoInput.value = "";
    todoButton.innerText = "Add Todo";
    // console.log("todoss", todoInput.value, editNewTodo);
  });
}

// saving data to local storage

function saveLocalTodo(todo) {
  // is there any todo;
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// get data from local storage

function getTodos(e) {
  // is there any todo;

  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    noTodoDisplay.remove();
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    const newLi = document.createElement("li");
    const newTodo = todo;
    newLi.append(newTodo);
    // console.log(newLi);

    // add todo to local storage

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

    // adding event listener to buttons
    todoDone.addEventListener("click", workDone);
    trash.addEventListener("click", notWantTodo);
  });
}

// remove data from local storage

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  // console.log(todo, "hello there");
}
