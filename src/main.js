import { example } from './data.js';

import data from './data/pokemon/pokemon.js';


/* importar data y donde mostar*/
const pokemon = data.pokemon;
/*console.log("pokemon", pokemon);*/
const div = document.getElementById("root");

const drawCard = (pokemon) => {
    return `<div>
<div id="a">
<div id="b">
<li> # ${pokemon.num}</li>
<img src= "${pokemon.img}"/>
<li> Nombre: ${pokemon.name}</li>
</div></div>
</div>`;
}
for (let i = 0; i <pokemon.length; i++) {
    div.innerHTML += drawCard(pokemon[i]);
}