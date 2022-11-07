
import data from './data/pokemon/pokemon.js';
import { searchFilter,ordenPokemon} from './data.js'

/* console.log(searchFilter(data.pokemon)) */

/* importar data y donde mostar*/
const pokemon = data.pokemon;
/*console.log("pokemon", pokemon);*/
const div = document.getElementById("root");
/*cartas de cada pokemon*/
const drawCard = (pokemon) => {
    let clase = "";
    if (pokemon.type.includes("grass")) {
        clase = "verde"
    } else if (pokemon.type.includes("normal")) {
        clase = "grisClaro"
    }
    else if (pokemon.type.includes("water")) {
        clase = "azulClaro"
    }
    else if (pokemon.type.includes("fire")) {
        clase = "naranja"
    }
    else if (pokemon.type.includes("bug")) {
        clase = "verdeClaro"
    }
    else if (pokemon.type.includes("poison")) {
        clase = "moradoClaro"
    }
    else if (pokemon.type.includes("electric")) {
        clase = "amarillo"
    }
    else if (pokemon.type.includes("ground")) {
        clase = "cafeOscuro"
    }
    else if (pokemon.type.includes("flying")) {
        clase = "celesteClaro"
    }

    else if (pokemon.type.includes("psychic")) {
        clase = "rojo"
    }

    else if (pokemon.type.includes("fairy")) {
        clase = "rosado"
    }

    else if (pokemon.type.includes("fighting")) {
        clase = "fucsia"
    }

    else if (pokemon.type.includes("rock")) {
        clase = "cafeClaro"
    }
    else if (pokemon.type.includes("ghost")) {
        clase = "moradoOscuro"
    }
    else if (pokemon.type.includes("dark")) {
        clase = "grafito"
    }

    return `<div>
<div class="a ${clase}"> 
<div  class="b">
<li> # ${pokemon.num}</li>
<img src= "${pokemon.img}"/>
<li> ${pokemon.name}</li>
</div></div>
</div>`;
}
let pagina =""
for (let i = 0; i < pokemon.length; i++) {
    pagina += drawCard(pokemon[i]);
} div.innerHTML =pagina;
/* buscar pokemon*/
const search = document.getElementById("Buscar");
const prueba = document.getElementById("prueba")
prueba.addEventListener("click", () => {
    const text = search.value;
    let busca = searchFilter(data.pokemon, text)
    /*  console.log(busca) */
    div.innerHTML = " "
    busca.forEach(nombre => {

        div.innerHTML += drawCard(nombre)
    });
})


const selectElement = document.querySelector('.filter');

selectElement.addEventListener('change', (event) => {
   const resultado = document.querySelector('.resultado');
  /*  console.log(event.target.value);   */
   if (event.target.value === "alfabetico1") {
    div.innerHTML = "";
   let pokemonAz= ordenPokemon (pokemon)
  /*  console.log(pokemonAz); */
  div.innerHTML=""
  pokemonAz.forEach(pokemon =>{
    div.innerHTML += drawCard(pokemon)
  })
  
   }
 
/*  else if (event.target.value === ("alfabetico2")) {
       
    }
    else if (event.target.value === ("orden1")) {
       
    }
    else if (event.target.value === ("orden2")) {
        
    }
    else if (event.target.value === ("kanto")) {
        
    }
    else if (event.target.value === ("johto")) {
        function gen2()
    }*/
})

 