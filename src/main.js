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
    <div  class="b">
    <li> # ${pokemon.num}</li>
    <img src= "${pokemon.img}"/>
    <li> ${pokemon.name}</li>
    <button type="button" id="verMas">Ver Mas Info</button>
    </div></div>
    </div>`
}
let pagina = ""
for (let i = 0; i < pokemon.length; i++) {
    pagina += drawCard(pokemon[i]);
}
div.innerHTML = pagina;
/* 
    const contenedor = document.createElement("div")
    contenedor.classList.add("a")
    contenedor.classList.add(clase) 
    const contenedor2 = document.createElement("div")
    contenedor2.classList.add("b")
    const numero = document.createElement("li")
    numero.textContent = (pokemon.num)
    contenedor2.appendChild(numero)
    const imagen = document.createElement("img")
    imagen.setAttribute("src", pokemon.img)
    contenedor2.appendChild(imagen)
    const nombre = document.createElement("li")
    nombre.textContent = (pokemon.name)
    contenedor2.appendChild(nombre)
    const crearBoton = document.createElement("button")
    crearBoton.textContent = ("ver mas info")

    crearBoton.onclick = function () {

        ver.style.display = "block";
    };

    contenedor2.appendChild(crearBoton)
    contenedor.appendChild(contenedor2)


    return contenedor */

/* 
const modal1 = document.createElement("section")
modal1.classList.add("myModal")
const modal2 = document.createElement("div")
modal2.classList.add("modal-content")
const numeroModal = document.createElement("li")
numeroModal.textContent=(pokemon.num)
modal2.appendChild(numeroModal)
const imagenModal = document.createElement("img")
imagenModal.setAttribute("src", pokemon.img)
modal2.appendChild(imagenModal)
const nombreModal = document.createElement("li")
nombreModal.textContent=(pokemon.name)
modal2.appendChild(nombreModal)




modal1.appendChild(modal2)


drawModal.forEach(pokemon => {
    myModal.innerHTML += drawModal(pokemon) 
})

    for (let i = 0; i < pokemon.length; i++) {
    div.appendChild(drawModal(pokemon[i]))} */


/*modal*/
var modal = document.getElementById("myModal");


var btn = document.getElementById("verMas");

var span = document.getElementsByClassName("close");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

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

        /* console.log(pokeKanto); */

        div.innerHTML = ""
        pokeKanto.forEach(Kanto => {
            div.innerHTML += drawCard(Kanto)
        })

    }
    else if (event.target.value === ("johto")) {

        let pokeJohto = ordenJohto(pokemon)

        /* console.log(pokeJohto); */

        div.innerHTML = ""
        pokeJohto.forEach(Johto => {
            div.innerHTML += drawCard(Johto)
        })
    }
})