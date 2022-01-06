// create a namespace object
// create an init method on the namespace object, and call it at the end of the file
const ghibliLibraryApp = {};
ghibliLibraryApp.init = () => {
    ghibliLibraryApp.getPieces();
}

ghibliLibraryApp.getPieces = function() {
  const url = new URL(`https://ghibliapi.herokuapp.com/films`);
  const libraryList = document.querySelector('select');
  const listValue = libraryList.value;
  const button = document.querySelector('input[type="submit"]');

//   button.addEventListener('click', function(event){
//       event.preventDefault;
//       console.log(listValue);
//   })
  
  console.log(listValue);


//   url.search = new URLSearchParams({

//   });

  fetch(url)
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data[0].title);
    })
}



  
ghibliLibraryApp.init();




// artApp.getPieces = function() {
//   const url = new URL(`https://www.rijksmuseum.nl/api/en/collection`);
//   url.search = new URLSearchParams({
//     key: artApp.key,
//     imgonly: true
//   });

//   fetch(url)
//     .then(results => {
//       // apply .json() method to our results object
//       return results.json();
//     }).then(data => {
//       // print the data to our console
//       console.log(data);
//     })
// }