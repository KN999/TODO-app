const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let list = document.getElementById('todo-list')
let itemCountSpan = document.getElementById('item-count')
let uncheckedCountSpan = document.getElementById('unchecked-count')
//number of checked boxes
var checked =  0;

function newTodo() {
  //creating a li
  var li = document.createElement("li");
  //appending a string to li
  li.innerHTML = "<input type='checkbox' class='myCheck' onClick='check()' ><input type='text'>" 
  li.setAttribute("class", "List");
  //appending that list to ul 
  list.appendChild(li);
  //counting number of TODO:
  itemCountSpan.innerHTML = list.childElementCount;
  //increasing count of unchecked TODO
  uncheckedCountSpan.innerHTML = itemCountSpan.innerHTML - checked;

}

function check () {
  //Note to self : Find the alternate to increment the value for checked maybe using this
  let i;
  let List = document.getElementsByClassName("myCheck");
  for ( i = 0, checked = 0; i < List.length; i++) {
    if (List[i].checked === true) {
      checked += 1;
    }
  }
  uncheckedCountSpan.innerHTML = itemCountSpan.innerHTML - checked;
  
}
