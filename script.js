function onReady() {
  console.log('Javascript still works! What a gosh darn relief.');
}

let todoCounter = 0;

function handleSubmit(event){
  //"event.preventDefault();" stops form from taking over refreshing the page. And prevents the thing from submitting if you hit enter.
  event.preventDefault();
  console.log('Did this work?');
  // go *get* the input stuff
  let todoText = document.getElementById('todo-text').value;
  let todoAuthor = document.getElementById('todo-author').value;
  console.log(todoText, todoAuthor);

  // *SET* the value to be an empty string!
  document.getElementById('todo-text').value = '';
  document.getElementById('todo-author').value = '';

  let todoList = document.getElementById('todoList');
  todoList.innerHTML +=
`<li>
  <button onclick="deleteItem(event)">❌</button>
 ${todoText} (${todoAuthor})
</li>`
  console.log(todoCounter);
  todoCounter ++
  document.getElementById('todoCounter').textContent = todoCounter
}

function deleteItem(event){
  console.log('trying to delete: ');
  event.target.parentElement.remove(); //.parentElement.remove removes the parent elements above targeted item!
  console.log(todoCounter);
  event.target.parentElement.remove();
  todoCounter --
  document.getElementById('todoCounter').textContent = todoCounter
}


onReady();