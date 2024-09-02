const API_Key = "c7a928a11e9e543b65e5d2f7b9f56e60";
const Main_url = "https://api.themoviedb.org/3";
const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');

const fetchAndDisplayData = async () => {
  try {
    const response = await fetch(`${Main_url}/tv/${id}?api_key=${API_Key}&language=pt-BR`);
    if (!response.ok) {
      throw new Error("Erro ao recuperar os dados da API");
    }
    const data = await response.json();
    const container = document.getElementById("container");

    if (container) { 
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
  const backDropContainer = document.querySelector(".backGroundImg"); 
  card.className = "article-wrapper";
  const BackdropUrl = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`; 
  const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;


  card.innerHTML = `
    <div class="align-movie">
      <div class="rounded-lg container-project">
          <img src="${imageUrl}" alt="${item.title || item.name}">
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
          <span class="project-type">${item.genres.map(genre => genre.name)}</span>
        </div>
        <span class="project-tagline">"${item.tagline}"</span>
        <h1 class="project-desc-title" >Sinopse</h1>
        <span class="project-desc">${item.overview}</span>
      </div>
  `;

  if (backDropContainer) {
    backDropContainer.style.backgroundImage = `url(${BackdropUrl})`;
  } else {
    console.error("Elemento com a classe 'backGroundImg' não encontrado.");
  }

  return card;
};

fetchAndDisplayData();
