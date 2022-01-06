
const studioGhibliCatalogue = {};

studioGhibliCatalogue.url = 'https://ghibliapi.herokuapp.com/films';

// console.log(studioGhibliCatalogue);
fetch(studioGhibliCatalogue.url)
        .then( (response) => {
            return response.json();
        })
        .then( (jsonData) => {
            console.log(jsonData);
            jsonData.forEach(function(i){
                console.log(i.title);
            })
        });




// Studio Ghibli API url = https://ghibliapi.herokuapp.com/#tag/Films%2Fpaths%2F~1films%2Fget