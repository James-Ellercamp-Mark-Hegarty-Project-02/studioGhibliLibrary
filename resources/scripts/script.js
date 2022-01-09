// create a namespace object
// create an init method on the namespace object, and call it at the end of the file
const ghibliLibraryApp = {};
ghibliLibraryApp.init = () => {
    ghibliLibraryApp.getPieces();
}

ghibliLibraryApp.getPieces = function() {
  const url = new URL(`https://ghibliapi.herokuapp.com/films/`);
  const libraryList = document.querySelector('select');
  // const listValue = libraryList.value;
  const button = document.querySelector('button');
  // const userChoice = libraryList.value;
  const h3Element = document.querySelector('h3');
  const filmContentBox = document.querySelector('.film-content');
  const imageElement = document.querySelector('img');
  const descriptionElement = document.querySelector('.description');
  const runElement = document.querySelector('.run-time');
  const formElement = document.querySelector('form');

  button.addEventListener('click', function(event){
    event.preventDefault();
    const userChoice = libraryList.value;
    if (userChoice === "placeholder"){
      filmContentBox.style.display = "none";
      h3Element.innerText = '';
      imageElement.src = '';
      descriptionElement.innerText = '';
      imageElement.alt = '';
      runElement.innerText = '';

    } else {
    
      fetch(url)
        .then( (response) => {
            return response.json();
        })
        .then( (jsonData) => {
          
            const filmListObj = jsonData;
            const search = filmListObj[userChoice];


            filmContentBox.style.display = "flex";
            h3Element.innerText = search.title;
            imageElement.src = search.image;
            imageElement.alt = `The poster for the Studio Ghibli film ${search.title}`;
            descriptionElement.innerText = `Description: ` + search.description;
            runElement.innerText = `Run time: ` + search.running_time + ' mins';
            
    });
  }})
  libraryList.addEventListener('submit', function(event){
    event.preventDefault();
    const userChoice = libraryList.value;
    if (userChoice === "placeholder"){
      filmContentBox.style.display = "none";
      h3Element.innerText = '';
      imageElement.src = '';
      descriptionElement.innerText = '';
      imageElement.alt = '';
      runElement.innerText = '';
  
    } else {
    
      fetch(url)
        .then( (response) => {
            return response.json();
        })
        .then( (jsonData) => {
          
            const filmListObj = jsonData;
            const search = filmListObj[userChoice];
  
  
            filmContentBox.style.display = "flex";
            h3Element.innerText = search.title;
            imageElement.src = search.image;
            imageElement.alt = `The poster for the Studio Ghibli film ${search.title}`;
            descriptionElement.innerText = `Description: ` + search.description;
            runElement.innerText = `Run time: ` + search.running_time + ' mins';
            
    });
  }})
  
}


 
ghibliLibraryApp.init();