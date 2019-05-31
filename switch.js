let answer = "RABANOGIGANTE";

const printAnswer = (value) => {

  let rightAnswer;
  switch (value) {
    case 'Mario':
      rightAnswer = "Mario es el nombre del sujeto en cuestion";
      break;
    case 'Luminico':
      rightAnswer = "Luminico es el nombre del sujeto en cuestion";
      break;
    case 'Domeniko':
      rightAnswer = "Domeniko es el nombre del sujeto en cuestion";
      break;
    case 'RABANOGIGANTE':
      rightAnswer = "RABANOGIGANTE es el nombre del sujeto en cuestion";
      break;
    default:
      rightAnswer = "PARECE QUE DICHO SUJETO JAMAS HA EXISTI2";


  }

  document.getElementById('answer').innerText = rightAnswer;

};

printAnswer(answer);
