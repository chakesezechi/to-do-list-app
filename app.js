// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");



// Event Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions

function addTodo(e){
  // Prevents form from submitting
  e.preventDefault();

  // Todo DIV
  const todoDiv = document.createElement("div")
  todoDiv.classList.add('todo');

  // Create Li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  // Check Mark Button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn"); 
  todoDiv.appendChild(completedButton);

   // Check Trash Button
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add("trash-btn"); 
   todoDiv.appendChild(trashButton);

   // Append To List
   todoList.appendChild(todoDiv)

   // Clear To Do Input Value
   todoInput.value = "";

}

function deleteCheck(e) {
  const item = e.target;

  // Delete To Do
  if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    todo.remove();
  }
}
