
const API_Key = "c7a928a11e9e543b65e5d2f7b9f56e60";
const Main_url = "https://api.themoviedb.org/3";
const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');

const fetchAndDisplayData = async () => {
  try {
    const response = await fetch(`${Main_url}/movie/${id}?api_key=${API_Key}&language=en-US`);
    if (!response.ok) {
      throw new Error("Erro ao recuperar os dados da API");
    }
    const data = await response.json();
    const container = document.getElementById("container");

    if (container) { // Verifica se o contêiner existe antes de acessá-lo
      const card = createCard(data);
      container.appendChild(card);
    } else {
      console.error("Elemento com ID 'container' não encontrado.");
    }
  } catch (error) {
    console.error("Erro:", error);
  }
};

const createCard = (item) => {
  const card = document.createElement("article");
  card.className = "article-wrapper";
  const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

  card.innerHTML = `
    <div class="rounded-lg container-project">
      <a href="movie.html?id=${item.id}" alt="Favourites Poster">
        <img src="${imageUrl}" alt="${item.title || item.name}">
      </a>
    </div>
    <div class="project-info">
      <div class="flex-pr">
        <div class="project-title text-nowrap">${item.title || item.name}</div>
       
      </div>
      <div class="types">
        <span class="project-type">
          <img width="12" height="12" src="https://img.icons8.com/ios-glyphs/30/551bb1/star--v1.png" alt="star--v1"/>
          ${item.vote_average}
        </span>
        <span class="project-type">
          ${item.release_date || item.first_air_date}
        </span>
      </div>
    </div>
  `;

  return card;
};
fetchAndDisplayData();