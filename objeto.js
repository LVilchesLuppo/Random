var myFilm new Object();
  myFilm.director = "Benito Camela";
  myFilm.year  ="2561";
  myFilm.country = "Croatia";
  console.log(myFilm.director);
  console.log(myFilm.year);
  console.log(myFilm.country);
  myFilm["locura"] = "mucha";

  function showProps (obj, objName){
      var result = '';
      for(var i in obj){
        if(obj.hasOwnProperty(i)){
          //esta propiedad pregunta si el objeto tiene esa propiedad
          result+= objName + "." + i + "=" + obj[i] + "\n";
        }
        return result;
      }

  document.write(showProps(myFilm,"myFilm"));    
