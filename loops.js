let array1  = [1,2,3,4,5,6,7,8,9];
let array2  = [1,2,2,4,5,6,7,8];
let array3  = [1,2,3,4,5,6,9];
let objArray = [
  {
    name : "beto",
    cash: 200,
  },

  {
    name : "cachito",
    cash: 98000,
  },
  {
    name : "tit0",
    cash: 9999999.1,
  },
]

const sumUpArray = (array) => {

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

document.getElementById('result').innerText = sumUpArray(array1);

const sumUpMap = (array) => {

  let sum = 0;
  array.map((number) => {
    sum += number;
  });

  return sum;

};

document.getElementById('result2').innerText = sumUpMap(array2);

const sumUpForEach = (array) => {

  let sum = 0;
  array.forEach((number)=>{
    sum += number;
  });

};

document.getElementById('result3').innerText = sumUpMap(array3);

const goThruArr = (array) => {

  const list = document.getElementById('list');

  for (let i = 0; i < array.length; i++) {
    let item = document.createElement('li');
    item.innerText = array[i].name + " tiene $ " + array[i].cash;
    list.appendChild(item);
  }

};

goThruArr(objArray);

const goThruMap = (array) => {

  array.map((value) => {

    let list2 = document.getElementById('list2');
    let item = document.createElement('li');
    item.innerText = value.name + " tiene tanta platita como " + value.cash;
    list2.appendChild(item);
  })

};

goThruMap(objArray);
