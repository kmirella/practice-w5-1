 window.addEventListener("load", function(){
    console.log("My first function");

})
 

// kiírja a böngészőben a címeket 

/* function loadEvent() {
    console.log("My second function")
    let rootElement = document.getElementById("root")

    
    
    let card=function (movieRecieved) {
        return `
        <div class="card">
            <h2>${movieRecieved.title}</h2>
            <div class="time">${movieRecieved.year}</div>
            <div class="rate">${movieRecieved.rate}</div>
        </div>
        `;
    };
 
    rootElement.insertAdjacentHTML("beforeend", card({
        "title": "Moulin Rouge",
        "year": 2000,
        "rate": 9.9
    }));

    let actuallyFavoriteMovie = {
        "title": "Eternal sunshine of a spotless mind",
        "year": 2004,
        "rate": 9.8
    }

    rootElement.insertAdjacentHTML("beforeend", card(actuallyFavoriteMovie));
    rootElement.insertAdjacentHTML("beforeend", card(movies[0]));

    for (const movieSend of movies) {
        rootElement.insertAdjacentHTML("beforeend", card(movieSend)); */
    }

   /*  funciton loadEvent() {

        let rootElement = document.getElementById("root");

        let cardElement2 = function (title, year, rate {
                return `
            <div class="card">
                <h1>${title}</h1>
                <time>${year}<time>
                <h3>${rate}</h3>
            </div>
            `;
        
    }

    for (const movieSend of movies) {
        let neverThan2000 = false;
        if (movieSend.year > 2000) {
            neverThan2000 = true;
        }
        if (neverThan2000) {
            rootElement.insertAdjacentHTML("beforeend", cardElement2(movieSend.title, movieSend.year, movieSend.rate));
        }
    }

}



/*     let anotherFavoriteMovie = {
        "title": "The last Scout boy"
        "year": 1991
        "rate": 7.0
    }
 
rootElement.insertAdjacentHTML(`beforeend`, card2(movieSend.title, movieSend.year, movieSend.rate));


    for (const movieSend of movies) {
        rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate));
    }

    // console.log(movies);

}
 */
window.addEventListener("load", loadEvent);  */


function loadEvent(){

    let rootElement = document.getElementById("root")

    let cardElement2 = function(title, year, rate){
        return `
        <div class="card">
            <h2>${title}</h2>
            <time>${year}</time>
            <span>${rate}</span>
        </div>
        `;
    } 

    let renderAllCradElements = function (incomingMoviesArray) {
        let renderedCardList = `<dic class="cards">`;
        // for ciklus, ami végigmegy a cardsarray-en
        for (const incomingMovie of incomingMoviesArray) {
            renderedCardList += card2(incomingMovie.title, incomingMovie.year, incomingMovie.rate)
           /*  renderedCardList += `
            // a for ciklus minden lépcsőjénél hozzáadja a renderedCardList-hez az adott elemet a megfelelő div card-ban
            <div class="card">
                <h2>${incomingMovie.title}</h2>
                <time>${incomingMovie.year}</time>
                <span>${incomingMovie.rate}</span>
            </div>
            ` */
        }
        return renderedCardList

        renderedCardList += `</div>`
        console.log(renderedCardList);
        // return-li az elkészült elemekkel feltöltött cardList-et
        return renderedCardList;
    }

    // movies.sort(function(a, b){return a.year - b.year});

    let newGoodMovies = [];

    for (const movieSend of movies) {
       /*  let newerThan2000 = false;
        if (movieSend.year > 2000) {
            newerThan2000 = true;
        }

        if (newerThan2000) {
            rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate));
        } */

        // let floorRate = Math.floor(movieSend.rate);
        

        if (movieSend.year > 2000 && movieSend.rate >=8 ) {
            newGoodMovies.push(movieSend)
            // rootElement.insertAdjacentHTML("beforeend", card(movieSend.title, movieSend.year, floorRate));
        } 

    }
    newGoodMovies.sort(function(a, b){return a.year - b.year});

    rootElement.insertAdjacentHTML("beforeend", renderAllCradElements(newGoodMovies)
}

window.addEventListener("load", loadEvent)