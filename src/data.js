/*  import data from "./data/pokemon/pokemon";   */

export const searchFilter =  (pokemon,nombrePokemon)=> {
  const nameFilter= pokemon.filter (x=>
    x.name==nombrePokemon)

    
  ;return nameFilter


};
export const ordenPokemon=(array)=>{
  console.log(array);
}


/* const filtroGen = (pokemon) => {
  let clase = "";
  if (pokemon.generation.includes("johto")) {
      clase = "johto"
    else if (pokemon.generation.includes("kanto")){
      clase = "kanto"
    } */