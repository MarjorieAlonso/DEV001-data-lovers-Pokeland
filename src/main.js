import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

/* console.log(example, data); */
const pokemon = data.pokemon;
console.log("pokemon", pokemon);
const div = document.getElementById("root");

const drawCard = (pokemon) => {
    return `<div>
<li> # ${pokemon.num}</li>
<li> Nombre: ${pokemon.name}</li>

</div>`;
}
for (let i = 0; i < 10; i++) {
    div.innerHTML += drawCard(pokemon[i]);
}