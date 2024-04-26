const API_Key = "c7a928a11e9e543b65e5d2f7b9f56e60";
const Main_url = "https://api.themoviedb.org/3";

const containerIds = [
  "container",
  "container2",
  "container3",
  "container4",
  "container5",
  "container6",
  "container7",
  "container8",
  "container9",
  "container10",
  "container11",
  "container12",
];

const fetchAndDisplayData = async (url, containerId) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro ao recuperar os dados da API");
    }
    const data = await response.json();
    const container = document.getElementById(containerId);
    if (container) { // Verifica se o contêiner existe antes de acessá-lo
        data.results.forEach((item) => {
          const card = createCard(item);
          container.appendChild(card);
        });
    } else {
        console.error(`Elemento com ID '${containerId}' não encontrado.`);
    }
};

const createCard = (item) => {
  const card = document.createElement("article");
  card.className = "article-wrapper";
  const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

  card.innerHTML = `
            
        <div class="rounded-lg container-project">
        <a href="movie.html?id=${item.id}  alt="Favourites Poster">
            <img src="${imageUrl}" alt="${item.title || item.name}"></a>
        </div>
        <div class="project-info">
            <div class="flex-pr">
                <div class="project-title text-nowrap">${item.title || item.name}</div>
                <div class="project-hover">
                    <svg style="color: black;" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
            </div>
            <div class="types">
                <span class="project-type"><img width="12" height="12" src="https://img.icons8.com/ios-glyphs/30/551bb1/star--v1.png" alt="star--v1"/>${
                  item.vote_average
                }</span>
                <span class="project-type">${
                  item.release_date || item.first_air_date
                }</span>
            </div>
        </div>
    `;

  return card;
};

const fetchDataAndDisplayInContainers = async () => {
  const urls = [
    `${Main_url}/movie/popular?api_key=${API_Key}`,
    `${Main_url}/movie/top_rated?api_key=${API_Key}`,
    `${Main_url}/tv/popular?api_key=${API_Key}`,
    `${Main_url}/tv/top_rated?api_key=${API_Key}`,
    `${Main_url}/genre/27/movies?api_key=${API_Key}`,
    `${Main_url}/genre/28/movies?api_key=${API_Key}`,
    `${Main_url}/genre/35/movies?api_key=${API_Key}`,
    `${Main_url}/genre/10749/movies?api_key=${API_Key}`,
    `${Main_url}/discover/tv?api_key=${API_Key}&with_genres=16`,
    `${Main_url}/discover/tv?api_key=${API_Key}&with_genres=10759`,
    `${Main_url}/discover/tv?api_key=${API_Key}&with_genres=35`,
    `${Main_url}/discover/tv?api_key=${API_Key}&with_genres=18`,
  ];

  for (let i = 0; i < urls.length; i++) {
    await fetchAndDisplayData(urls[i], containerIds[i]);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  fetchDataAndDisplayInContainers();
});
