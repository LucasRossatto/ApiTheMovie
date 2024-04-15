
const urlRick = "https://rickandmortyapi.com/api/character/?page=1";
const main = document.getElementById("container");
const API_KEY = "1044c4fe22053f24519e99e6e5874882";
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;


fetch(urlRick, )
    .then(rest => rest.json() )
    .then(data => cards(data))

function cards(data) {

    const dataArray = data.results;
    //Criar os cards de forma automática

    dataArray.forEach(element => {
        const card = document.createElement("article");
    card.className = "article-wrapper"
    card.innerHTML = `
        <div class="rounded-lg container-project"><img src=${element.image} alt=${element.name}>
        </div>
        <div class="project-info">
            <div class="flex-pr">
                <div class="project-title text-nowrap">${element.name}</div>
                    <div class="project-hover">
                    <svg style="color: black;" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
            </div>
    `
    main.appendChild(card)
    });

}