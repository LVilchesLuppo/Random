let namesArr = [];
//let namesArr = new Array();

const submitUser = (actionType) => {

  let userName = document.getElementById('user-input').value;
  editArray(actionType, userName);
  //push() agrega un elemento al final de un array y devuelve la longitud
  console.log(namesArr);
  document.getElementById('user-input').value = '';
  printArray();
}

const editArray = (actionType, data) => {

  if(actionType === 'push'){
    namesArr.push(data);
  } else if (actionType === 'unshift') {
    namesArr.unshift(data);
    //unshift lo pone al principio del Array :o
  } else if (actionType === 'pop') {
    namesArr.pop();
  } else if (actionType === 'shift') {
    namesArr.shift();
  }
}


const removeUserAtIndex = () => {
  
  let arrIndex = parseInt(document.getElementById('array-index').value);
  console.log(typeof arrIndex);
  namesArr.splice(arrIndex, 1);
  printArray();
}

const printArray = () => {
  document.getElementById('names').innerText = namesArr;
}
