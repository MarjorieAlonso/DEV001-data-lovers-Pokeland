
import data from './data/pokemon/pokemon.js';
import { searchFilter } from './data.js';

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
for (let i = 0; i < pokemon.length; i++) {
    div.innerHTML += drawCard(pokemon[i]);
}
/* buscar pokemon*/
const search = document.getElementById("search");

search.addEventListener ("keydown", (key) =>{
    const text= search.value;
     div.innerHTML = " ";
     if (searchFilter== name)

     
     /* (key.key === "Enter"){
        const text2 = searchFilter(text, pokemon);
        text2.forEach((element)=>{
            div.innerHTML += drawCard(element);
            console.log(searchFilter) 

      })
    }
}) 
 */
/*  const selectElement = document.querySelector('.filter'); 

selectElement.addEventListener('change', (event) => { 
    const resultado = document.querySelecto r('.resultado'); 
  console.log(event.target.value); 

  if (event.target.value === ("alfabetico1")) {
        container.innerHTML= "";
        for (let i = 0; i < test.sortAz.length; i++) {
            container.innerHTML += img(test.sortAz[i]);
        function az(
            funcion orderAZ =()
        )
    }
    else if (event.target.value === ("alfabetico2")) {
        function za()
    }
    else if (event.target.value === ("orden1")) {
        function 12()
    }
    else if (event.target.value === ("orden2")) {
        function 21()
    }
    else if (event.target.value === ("kanto")) {
        function gen1()
        }
    else if (event.target.value === ("johto")) {
        function gen2()
    }
 */