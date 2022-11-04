/* import data from "./data/pokemon/pokemon"; */

export const searchFilter = (search, pokemon)=> {
  const nameFilter= pokemon.filter((x) =>
    x.name.includes(search)
  );
  return nameFilter;

};
/* export const example  = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
}; */

/* return resultado */



/* const filtroGen = (pokemon) => {
  let clase = "";
  if (pokemon.generation.includes("johto")) {
      clase = "johto"
    else if (pokemon.generation.includes("kanto")){
      clase = "kanto"
    } */