const APIURL =
"https://db.ygoprodeck.com/api/v7/cardinfo.php";


const main = document.getElementById('main');
// getMovies(APIURL);

// async function getMovies(APIURL) {
//  const resp = await fetch(APIURL);
//  const respData = await resp.json();

//   console.log(respData.data);
//   displayCards(respData);
// }

// displayCards = (respData) =>{
//   const{desc,name} = respData.data;
//   card_html = `
//   <h2${respData.data.name} | ${respData.data.desc}</h2>
  
//   `;
//   main.innerHTML = card_html;
//   console.log(main)
// }




const fetchPokemon = async () => {
  const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?offset=10&num=10";
  const res = await fetch(url);
  const respData = await res.json();

  const pokemon = respData.data.map((data, index) => ({
    type: data.type,
    name: data.name,
    desc: data.desc,
    card_images: data.card_images[0].image_url,
    id: index + 1,
  }));
  displayPokemon(pokemon);
  console.log(pokemon)
};

const displayPokemon = pokemon => {
  const pokemonHTMLString = pokemon
    .map(
      pokeman =>
      `
      <div class="card_layout">
        <div class="card_img">
            <img src="${pokeman.card_images}">
        </div>
        <dl class="card_info">
            <dd class="dd_name">${pokeman.name}</dd>
            <dd class="dd_type">${pokeman.type}</dd>
            <dd class="dd_desc">${pokeman.desc}</dd>
        </dl>
      </div>
      
      `
        
        
    )
    .join("");
  main.innerHTML = pokemonHTMLString;
  
};
fetchPokemon();