// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// import movies from "data.js";


function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map( movie => movie.director);

    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));

    return stevenMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    
    let total = moviesArray.reduce((previousValue, currentValue) =>  {
        if(!currentValue.score){
            return previousValue ;
        } else {
        return previousValue + currentValue.score;} 
    } , 0);

    let avg = total / moviesArray.length;
    avg = Number(avg.toFixed(2));
    ;

    return avg; 
}

// scoresAverage(movies);
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

    if (dramaMovies.length === 0){
        return 0;
    }

    let total = dramaMovies.reduce((previousValue, currentValue) =>  previousValue + currentValue.score , 0);
    let avg = total / dramaMovies.length;
    avg = Number(avg.toFixed(2));
    // avg = Math.round(avg * 100) / 100;

    return avg; 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedArray = moviesArray.map( movie => movie);

    sortedArray.sort((a, b) => {
        if (a.year === b.year){
            if( a.title < b.title) return -1
            if (a.title > b.title) return 1 ;
        } else {
            return a.year - b.year;
        }
    });

    return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let sortedTitles = moviesArray.map( movie => movie.title);

    sortedTitles.sort();

    return sortedTitles.slice(0, 20);

    // return sortedTitles;





}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
