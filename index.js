const API_Key = "c7a928a11e9e543b65e5d2f7b9f56e60";
const urlFilmesPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}`;
const urlFilmesMaisVistos = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}`;
const urlSeriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${API_Key}`;
const urlSeriesMaisVistas =`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_Key}`;
const urlFilmesTerror = `https://api.themoviedb.org/3/genre/27/movies?api_key=${API_Key}`;
const urlFilmesAcao = `https://api.themoviedb.org/3/genre/28/movies?api_key=${API_Key}`;
const urlFilmesComedia = `https://api.themoviedb.org/3/genre/35/movies?api_key=${API_Key}`
const urlFilmesRomance = `https://api.themoviedb.org/3/genre/10749/movies?api_key=${API_Key}`
const urlSeriesTerror = `https://api.themoviedb.org/3/genre/27/tv?api_key=${API_Key}`;
const container = document.getElementById("container");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const container4 = document.getElementById("container4");
const container5 = document.getElementById("container5");
const container6 = document.getElementById("container6");
const container7 = document.getElementById("container7");
const container8 = document.getElementById("container8");
const container9 = document.getElementById("container9");
const container10 = document.getElementById("container10");
const container11 = document.getElementById("container11");
const container12 = document.getElementById("container12");

fetch(urlFilmesPopulares)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao recuperar os dados da API');
        }
        return response.json();
    })
    .then(data => cards(data.results))
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
                <span class="project-type"><img width="12" height="12" src="https://img.icons8.com/ios-glyphs/30/551bb1/star--v1.png" 
                alt="star--v1"/>${movie.vote_average}</span>
                <span class="project-type">${movie.release_date}</span>
                </div>
            </div>
        `;
       
        container.appendChild(card);
    });
}

fetch(urlFilmesMaisVistos)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao recuperar os dados da API');
        }
        return response.json();
    })
    .then(data => cards2(data.results))
    .catch(error => console.error('Erro:', error));

function cards2(dataArray) {
    dataArray.forEach(movie =>  {
        const card2 = document.createElement("article");
        card2.className = "article-wrapper";
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
       
        card2.innerHTML = `
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
                <span  class="project-type"><img width="12" height="12" src="https://img.icons8.com/ios-glyphs/30/551bb1/star--v1.png" alt="star--v1"/>${movie.vote_average}</span>
                <span class="project-type">${movie.release_date}</span>
                </div>
            </div>
        `;
       
        container2.appendChild(card2);
    });
}
fetch(urlSeriesPopulares)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao recuperar os dados da API');
        }
        return response.json();
    }) 
    .then(data => cards3(data.results))
    .catch(error => console.error('Erro:', error));

function cards3(dataArray) {
    dataArray.forEach(serie =>  {
        const card3 = document.createElement("article");
        card3.className = "article-wrapper";
        const imageUrl = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
       
        card3.innerHTML = `
            <div class="rounded-lg container-project">
                <img src="${imageUrl}" alt="${serie.n}">
            </div>
            <div class="project-info">
                <div class="flex-pr">
                    <div class="project-title text-nowrap">${serie.name}</div>
                    <div class="project-hover">
                        <svg style="color: black;" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
                <div class="types">
                <span  class="project-type"><img width="12" height="12" src="https://img.icons8.com/ios-glyphs/30/551bb1/star--v1.png" alt="star--v1"/>${serie.vote_average}</span>
                <span class="project-type">${serie.first_air_date}</span>
                </div>
            </div>
        `;
       
        container3.appendChild(card3);
    });
}
fetch(urlSeriesMaisVistas)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao recuperar os dados da API');
        }
        return response.json();
    }) 
    .then(data => cards4(data.results))
    .catch(error => console.error('Erro:', error));

function cards4(dataArray) {
    dataArray.forEach(serie =>  {
        const card4 = document.createElement("article");
        card4.className = "article-wrapper";
        const imageUrl = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
       
        card4.innerHTML = `
            <div class="rounded-lg container-project">
                <img src="${imageUrl}" alt="${serie.name}">
            </div>
            <div class="project-info">
                <div class="flex-pr">
                    <div class="project-title text-nowrap">${serie.name}</div>
                    <div class="project-hover">
                        <svg style="color: black;" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
                <div class="types">
                <span  class="project-type"><img width="12" height="12" src="https://img.icons8.com/ios-glyphs/30/551bb1/star--v1.png" alt="star--v1"/>${serie.vote_average}</span>
                <span class="project-type">${serie.first_air_date}</span>
                </div>
            </div>
        `;
       
        container4.appendChild(card4);
    });
}
fetch(urlFilmesTerror)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao recuperar os dados da API');
        }
        return response.json();
    }) 
    .then(data => cards5(data.results))
    .catch(error => console.error('Erro:', error));

function cards5(dataArray) {
    dataArray.forEach(movie =>  {
        const card5 = document.createElement("article");
        card5.className = "article-wrapper";
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
       
        card5.innerHTML = `
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
                <span  class="project-type"><img width="12" height="12" src="https://img.icons8.com/ios-glyphs/30/551bb1/star--v1.png" alt="star--v1"/>${movie.vote_average}</span>
                <span class="project-type">${movie.release_date}</span>
                </div>
            </div>
        `;
       
        container5.appendChild(card5);
    });
}
fetch(urlFilmesAcao)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao recuperar os dados da API');
        }
        return response.json();
    }) 
    .then(data => cards6(data.results))
    .catch(error => console.error('Erro:', error));

function cards6(dataArray) {
    dataArray.forEach(movie =>  {
        const card6 = document.createElement("article");
        card6.className = "article-wrapper";
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
       
        card6.innerHTML = `
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
                <span  class="project-type"><img width="12" height="12" src="https://img.icons8.com/ios-glyphs/30/551bb1/star--v1.png" alt="star--v1"/>${movie.vote_average}</span>
                <span class="project-type">${movie.release_date}</span>
                </div>
            </div>
        `;
       
        container6.appendChild(card6);
    });
}
fetch(urlFilmesComedia)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao recuperar os dados da API');
        }
        return response.json();
    }) 
    .then(data => cards7(data.results))
    .catch(error => console.error('Erro:', error));

function cards7(dataArray) {
    dataArray.forEach(movie =>  {
        const card7 = document.createElement("article");
        card7.className = "article-wrapper";
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
       
        card7.innerHTML = `
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
                <span  class="project-type"><img width="12" height="12" src="https://img.icons8.com/ios-glyphs/30/551bb1/star--v1.png" alt="star--v1"/>${movie.vote_average}</span>
                <span class="project-type">${movie.release_date}</span>
                </div>
            </div>
        `;
       
        container7.appendChild(card7);
    });
}
fetch(urlFilmesRomance)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao recuperar os dados da API');
        }
        return response.json();
    }) 
    .then(data => cards8(data.results))
    .catch(error => console.error('Erro:', error));

function cards8(dataArray) {
    dataArray.forEach(movie =>  {
        const card8 = document.createElement("article");
        card8.className = "article-wrapper";
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
       
        card8.innerHTML = `
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
                <span  class="project-type"><img width="12" height="12" src="https://img.icons8.com/ios-glyphs/30/551bb1/star--v1.png" alt="star--v1"/>${movie.vote_average}</span>
                <span class="project-type">${movie.release_date}</span>
                </div>
            </div>
        `;
       
        container8.appendChild(card8);
    });
}
fetch(urlSeriesTerror)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao recuperar os dados da API');
        }
        return response.json();
    }) 
    .then(data => cards9(data.results))
    .catch(error => console.error('Erro:', error));

function cards9(dataArray) {
    dataArray.forEach(serie =>  {
        const card9 = document.createElement("article");
        card9.className = "article-wrapper";
        const imageUrl = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
       
        card9.innerHTML = `
            <div class="rounded-lg container-project">
                <img src="${imageUrl}" alt="${serie.name}">
            </div>
            <div class="project-info">
                <div class="flex-pr">
                    <div class="project-title text-nowrap">${serie.name}</div>
                    <div class="project-hover">
                        <svg style="color: black;" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
                <div class="types">
                <span  class="project-type"><img width="12" height="12" src="https://img.icons8.com/ios-glyphs/30/551bb1/star--v1.png" alt="star--v1"/>${serie.vote_average}</span>
                <span class="project-type">${serie.first_air_date}</span>
                </div>
            </div>
        `;
        container9.appendChild(card9);
});
}


document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const container2 = document.getElementById("container2");
  
    // Adiciona a classe "active" ao primeiro item de cada carrossel para iniciar a visualização
    container.children[0].classList.add("active");
    container2.children[0].classList.add("active");
  
    // Adiciona um evento de clique aos botões de navegação (anterior e próximo)
    document.querySelectorAll(".slide-nav-button").forEach(button => {
      button.addEventListener("click", () => {
        const direction = button.classList.contains("slide-nav-previous") ? -1 : 1;
        const activeElement = container.querySelector(".active");
        const activeElement2 = container2.querySelector(".active");
  
        if (activeElement && activeElement2) {
          const newActiveElement = activeElement.nextElementSibling || activeElement.parentElement.firstElementChild;
          const newActiveElement2 = activeElement2.nextElementSibling || activeElement2.parentElement.firstElementChild;
          
          activeElement.classList.remove("active");
          activeElement2.classList.remove("active");
          newActiveElement.classList.add("active");
          newActiveElement2.classList.add("active");
  
          // Role suavemente para o novo elemento ativo
          newActiveElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
          newActiveElement2.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        }
      });
    });
  });

  
  