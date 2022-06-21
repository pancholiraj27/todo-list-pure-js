console.log("live from todo");

const todoButton = document.getElementById("todoButton");

todoButton.addEventListener("click", function (e) {
  let allTodos = [];
  e.preventDefault();
  const inputTodo = document.getElementById("todoForm");
  allTodos.push(inputTodo.value);
  //   console.log(inputTodo.value);
  //   inputTodo.innerText = "hello";
  const ul = document.getElementById("ul");
  for (let i = 0; i < allTodos.length; i++) {
    let node = document.createElement("li");
    nodeText = allTodos[i];
    node.append(nodeText);
    ul.appendChild(node);
  }
});

// console.log(allTodos);
