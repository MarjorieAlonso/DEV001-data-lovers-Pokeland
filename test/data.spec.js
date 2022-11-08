import { searchFilter, ordenAzPokemon } from '../src/data.js';


describe('searchFilter', () => {
  it('filtra por nombre de pokemon', () => {
    let data = [{ name: "bulbasaur" }, { name: "pikachu" }]
    let nombres = "bulbasaur";
    let resultReal = searchFilter(data, nombres);
    let resultExpect = [{ name: "bulbasaur" }]
    expect(resultReal).toEqual(resultExpect);
  });
});



describe("ordenAzPokemon", () => {
  it("deberia ser una funcion", () => {


    expect(typeof ordenAzPokemon).toBe("function");
  });
});
it('Que retorne el array ordenado de la A-Z', () => {
  const arrAsc = [
    { name: "bulbasaur" }, { name: "abra" }, { name: "charmander" }
  ]
  const resultado = [{ name: "abra" }, { name: "bulbasaur" }, { name: "charmander" }]
  expect(ordenAzPokemon(arrAsc)).toEqual(resultado)
});



/* it('returns `anotherExample`', () => {
  expect(anotherExample()).toBe('OMG');
});
}); */
