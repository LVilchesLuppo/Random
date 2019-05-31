let sampleObject = {

  username: "Beto",
  bio: "locura indomita de aquellas",
  interests: ["mendicrem,jaboncitos chiquitos, cremalleras gordas", "pestillos"],
  age: 67,
  weight: 187,
  sex: "Shorar"

};


const objectIterator = (object) => {

  const objectList = document.getElementById('object');

  for (let key in object) {

    let itemRow = document.createElement('tr')
    let keyItem = document.createElement('td');
    keyItem.innerText = key;
    let valueItem = document.createElement('td');
    valueItem.innerText = object[key];
    itemRow.appendChild(keyItem);
    itemRow.appendChild(valueItem);
    objectList.appendChild(itemRow);


  }

};

objectIterator(sampleObject);
