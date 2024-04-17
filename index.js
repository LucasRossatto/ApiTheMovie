const API_Key = "c7a928a11e9e543b65e5d2f7b9f56e60";
const urlFilmes = `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}`;
const container = document.getElementById("container");

fetch(urlFilmes)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao recuperar os dados da API');
        }
        return response.json();
    })
    .then(data => cards(data.results)) // Corrigido para acessar data.results
    .catch(error => console.error('Erro:', error));
 
function cards(dataArray) {
    dataArray.forEach(movie =>  {
        const card = document.createElement("article");
        card.className = "article-wrapper";
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
       
        card.innerHTML = `
            <div class="rounded-lg container-project">
                <img src="${imageUrl}" alt="${movie.title}">
            </div>
            <div class="project-info">
                <div class="flex-pr">
                    <div class="project-title text-nowrap">${movie.title}</div>
                    <div class="project-hover">
                        <svg style="color: black;" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
                <div class="types">
                <span style="background-color: rgba(165, 96, 247, 0.43); color: rgb(85, 27, 177);" class="project-type"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/a560f7/star--v1.png" alt="star--v1"/>${movie.vote_average}</span>
                <span class="project-type">•${movie.genres}</span>
                </div>
            </div>
        `;
       
        container.appendChild(card);
    });
}
 


