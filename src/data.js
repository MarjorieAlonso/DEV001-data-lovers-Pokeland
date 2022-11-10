/*  import data from "./data/pokemon/pokemon";  */

export const searchFilter = (pokemon, nombrePokemon) => {
  const nameFilter = pokemon.filter(x =>
    x.name.toUpperCase() == nombrePokemon.toUpperCase())


    ; return nameFilter


};
export const ordenAzPokemon = (array) => {

  return array.sort(function (a, b) {

    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  })


}
export const ordenZaPokemon = (array) => {
  return array.sort(function (a, b) {

    if (b.name < a.name) {
      return -1;
    }
    if (b.name > a.name) {
      return 1;
    }
  })

}
export const ordenAscendente = (array) => {
  return array.sort(function (a, b) {

    if (a.num < b.num) {
      return -1;
    }
    if (a.num > b.num) {
      return 1;
    }
  })

}
export const ordenDescendente = (array) => {
  return array.sort(function (a, b) {

    if (b.num < a.num) {
      return -1;
    }
    if (b.num > a.num) {
      return 1;
    }
  })

}
export const ordenKanto = (pokemon) => {
  const kanto = pokemon.filter(e => e.generation.name == "kanto")

  return kanto;
}
export const ordenJohto = (pokemon) => {
  
  const johto = pokemon.filter(e => e.generation.name == "johto")
  return johto;
}