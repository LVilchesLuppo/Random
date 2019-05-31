let animal = "obejero aleman";
let food = "";
const printToScreen = (prop) => {

  //Operador ternario del carajo!

  let food = animal === "cat" ? "fish!"
                              : "MARIONETITAS DULCES"

    /*if(animal === 'cat'){
      food = "fish";
    } else {
      food = "MORCILLA CON ENSALADITA";
   }*/
   document.getElementById('answer').innerText = "El " + animal + " ama levantarse todos los dias y comer un plato de " + food; 
};

printToScreen(animal);
