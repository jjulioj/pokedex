

const pokemons = []
const grupoGrama = []
const grupoFogo = []

function carregarPokemons(){

        fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => response.json())
          .then(data => {
            const pokemons = data.results;
      
            for (let index = 0; index < pokemons.length; index++) {
                const pokemon = pokemons[index];
                const id = index + 1;
                pokemon.imagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
                adicionarCardPokemon(pokemon, grupoGrama, grupoFogo);
            }
          })
          .catch(error => console.error('Erro ao carregar os pokémons:', error));
      }

function adicionarCardPokemon(pokemon, grupoGrama, grupoFogo){

    const imagemElemento = document.createElement("img")
    imagemElemento.setAttribute("src", pokemon.imagem)

    
    const textoElemento = document.createElement("h1")
    textoElemento.innerHTML = pokemon.name

    if (grupoGrama.includes(pokemon.name)) {
        textoElemento.classList.add("grama")
    } else if (grupoFogo.includes(pokemon.name)) {
        textoElemento.classList.add("fogo")
    }
   
    
    const divElemento = document.getElementById("conteudo-pokemon")
    divElemento.appendChild(imagemElemento)
    divElemento.appendChild(textoElemento)
}