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

  button.addEventListener('click', function(event){
    event.preventDefault();
    const userChoice = libraryList.value;
    console.log(userChoice);
      fetch(url)
        .then( (response) => {
            return response.json();
        })
        .then( (jsonData) => {
          
            const filmListObj = jsonData;
            const search = filmListObj[userChoice];

            console.log(search.title);
            console.log(search.description);
            console.log(search.image);
            console.log(search.running_time + ` mins`);

            h3Element.innerText = search.title;
            


            filmContentBox.style.border = "1px solid red";
            
        });
  })
}



  
ghibliLibraryApp.init();



