let list = [];

const addToList = () => {

  let newTask = document.getElementById('new-task');
  let todoList = document.getElementById('list');
  let item = document.createElement('li');
  item.innerText = newTask.value;
  item.onclick = removeFromList.bind(this,list.length);
  todoList.appendChild(item);
  list.push(newTask.value);
  newTask.value = '';

};

const removeFromList = (index) => {

  let todoList = document.getElementById('list');
  console.log(index);
  list.splice(index, 1);
  todoList.innerHTML = '';
  rebuildList();
  


};

const rebuildList = () => {

  let todoList = document.getElementById('list');
  list.map((task,index)=>{

    let item = document.createElement('li');
    item.innerText = task;
    item.onclick = removeFromList.bind(this,index);
    todoList.appendChild(item);

  });

};
