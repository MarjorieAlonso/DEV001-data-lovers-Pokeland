import data from './data/pokemon/pokemon.js';
import { searchFilter, ordenAzPokemon, ordenZaPokemon, ordenAscendente, ordenDescendente, ordenKanto, ordenJohto } from './data.js'

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
    <div  class="b" id="${pokemon.num}">
    <li> # ${pokemon.num}</li>
    <img src= "${pokemon.img}"/>
    <li> ${pokemon.name}</li>
    <button type="button" class="verMas">Ver Mas Info</button>
    </div></div>
    </div>`
}
let pagina = ""
for (let i = 0; i < pokemon.length; i++) {
    pagina += drawCard(pokemon[i]);
}
div.innerHTML = pagina;

/*modal*/
let modal = document.getElementById("myModal");

let btns = document.getElementsByClassName("verMas");


Array.from(btns).forEach((btn) => {
    btn.onclick = function (event) {

        const guardar = pokemon.filter((elemento) => {
            return elemento.num == event.target.parentNode.id
        })[0]
        
        modal.style.display = "block"
        modal.innerHTML =
     `<div>

    <div  class="visual">
    <button id="close"> Cerrar </button>
    <br>
    <li class="zoom"> # ${guardar.num} </li>
    <img src= "${guardar.img}" id="foto"/>
    <li class="zoom">${guardar.name}</li>
    <li> tipo :${guardar.type}</li>
    <li> tamaño :${guardar.size.height}</li>
    <li>peso ${guardar.size.weight}</li>
    </div>
    </div> `
    
        let close = document.getElementById("close");
        close.onclick = function () {
            modal.style.display = "none";
        }

    }
})


/* buscar pokemon*/
const search = document.getElementById("Buscar");
const prueba = document.getElementById("prueba");
prueba.addEventListener("click", () => {
    const text = search.value;
    let busca = searchFilter(data.pokemon, text)
    div.innerHTML = " "
    busca.forEach(nombre => {

        div.innerHTML += drawCard(nombre)
    });
});


/*filtros*/
const selectElement = document.querySelector('.filter');

selectElement.addEventListener('change', (event) => {

    /*  filtro de la A a la Z  */
    if (event.target.value === "alfabetico1") {
        div.innerHTML = "";
        let pokemonAz = ordenAzPokemon(pokemon)
        pokemonAz.forEach(pokemon => {

            div.innerHTML += drawCard(pokemon)

        })
    }
    /* filtro de la Z a la A */
    else if (event.target.value === ("alfabetico2")) {

        let pokemonZa = ordenZaPokemon(pokemon)
        /*  console.log(pokemonAz); */
        div.innerHTML = ""
        pokemonZa.forEach(pokemon => {
            div.innerHTML += drawCard(pokemon)
        })
    }
    /* filtro por 1 al 251*/
    else if (event.target.value === ("orden1")) {

        let pokeAscendente = ordenAscendente(pokemon)
        /*  console.log(pokemonAz); */
        div.innerHTML = ""
        pokeAscendente.forEach(pokemon => {
            div.innerHTML += drawCard(pokemon)
        })
    }
    /* filtro por 251 al 1*/
    else if (event.target.value === ("orden2")) {

        let pokeDescendente = ordenDescendente(pokemon)

        div.innerHTML = ""
        pokeDescendente.forEach(pokemon => {
            div.innerHTML += drawCard(pokemon)
        })
    }


    else if (event.target.value === ("kanto")) {

        let pokeKanto = ordenKanto(pokemon)

        div.innerHTML = ""
        pokeKanto.forEach(Kanto => {
            div.innerHTML += drawCard(Kanto)
        })

    }
    else if (event.target.value === ("johto")) {

        let pokeJohto = ordenJohto(pokemon)

        div.innerHTML = ""
        pokeJohto.forEach(Johto => {
            div.innerHTML += drawCard(Johto)
        })
    }
})