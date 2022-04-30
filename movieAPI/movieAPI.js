const movieCards = document.getElementById('movieCards');


const APIURL =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// initially get fav movies
getMovies(APIURL);

async function getMovies(APIURL) {
 const resp = await fetch(APIURL);
 const respData = await resp.json();

  console.log(respData.results);
//  console.log(APIURL)

 showMovies(respData.results);
}
// const getMovies = async(APIURL) =>{
//     const resp = await fetch(APIURL);
//     const respData = await resp.json();
//     console.log(respData);
//     console.log(APIURL);
//     showMovies(respData.results);
// }
function showMovies(movies) {
// clear main
main.innerHTML = "";

movies.forEach((movie) => {
    const { poster_path, title, vote_average,
        release_date,popularity, overview,id } = movie;
        

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    // console.log(movie)
//     console.log(IMGPATH)
// console.log(poster_path)

    movieEl.innerHTML = `
        <img onclick="selectMovie(${id})"
            src="${IMGPATH + poster_path}"onError="this.onerror=null;this.src='movieAPI/movieComingSoon.jpg';"
            alt="${title}"
        />
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(
                vote_average
            )}">${vote_average}</span>
            
        </div>
        <div class="date-info">
             <span class="#">${release_date}</span>
        </div>
        <div class="overview"onclick="selectMovie(${id})">
            <h3>Overview:</h3>
            ${overview}
        </div>
    `;

    main.appendChild(movieEl);
});


}


//function that will return the color of the rating either green,orange, or red depending on the rating
function getClassByRate(vote) {
if (vote >= 10) {
    return "green";
} else if (vote >= 5) {
    return "orange";
} else {
    return "red";
}
}
//search element
form.addEventListener("submit", (e) => {
e.preventDefault();

const searchTerm = search.value;

if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm);

    search.value = "";
}
console.log(searchTerm)
});

const selectMovie = async (id) =>{
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=04c35731a5ee918f014970082a0088b1`;
    const res = await fetch(url);
    const movieInfo = await res.json();
    displayMoviePopup(movieInfo);
}
const displayMoviePopup = (movieInfo) => {
    console.log(movieInfo);
    const genres = movieInfo.genres.map((genres) => genres.name).join(" ");

    if(movieInfo.revenue == 0 || movieInfo.budget == 0){
        profit = "TBT";
    } else{
         profit = movieInfo.revenue-movieInfo.budget;

    }
    const htmlString = `
        <div class="popup">
            <button id="closeBtn" onclick="closePopup()">Close</button>
            <div class="card">
            <img class="card-image" src="${IMGPATH+movieInfo.poster_path}"onError="this.onerror=null;this.src='movieAPI/movieComingSoon.jpg';"/>
            <h2 class="card-title">${movieInfo.title}
            </h2>
            <span class="tagline">${movieInfo.tagline}</span>   
            <p<small> 
            <br>
            genres: ${genres}
            <br>
            RunTime: ${movieInfo.runtime} Mins
            <br>
            Revenue: $${movieInfo.revenue.toLocaleString()}
        <br>
            Budget: ${movieInfo.budget.toLocaleString()}
            <br>
            profit: ${profit.toLocaleString()}
            </p>
            <a class="movie-link"href="${movieInfo.homepage}">Watch Here</a>

            </div>
        </div>
    `;
    movieCards.innerHTML = htmlString + movieCards.innerHTML;
};

const closePopup = () => {  
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup);
};