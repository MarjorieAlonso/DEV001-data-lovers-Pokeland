
import data from './data/pokemon/pokemon.js';

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
    else if (pokemon.type.includes("water") ) {
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
   
    else if (pokemon.type.includes ("psychic")){
        clase = "rojo"
    }
       
    else if (pokemon.type.includes("fairy")) {
        clase = "rosado"
    }
       
    else if (pokemon.type.includes("fighting")) {
        clase = "fucsia"
    }
       
    else if (pokemon.type.includes("rock") ){
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
<div class="b">
<li> # ${pokemon.num}</li>
<img src= "${pokemon.img}"/>
<li> Nombre: ${pokemon.name}</li>
</div></div>
</div>`;
}
for (let i = 0; i < pokemon.length; i++) {
    div.innerHTML += drawCard(pokemon[i]);
}



