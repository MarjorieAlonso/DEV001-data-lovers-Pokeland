/* import { TestWatcher } from 'jest'; */
import { searchFilter, ordenAzPokemon, ordenZaPokemon, ordenAscendente, ordenDescendente, ordenKanto, ordenJohto } from '../src/data.js';

/*test search*/
describe('searchFilter', () => {
  it('filtra por nombre de pokemon', () => {
    let data = [{ name: "bulbasaur" }, { name: "pikachu" }]
    let nombres = "bulbasaur";
    let resultReal = searchFilter(data, nombres);
    let resultExpect = [{ name: "bulbasaur" }]
    expect(resultReal).toEqual(resultExpect);
  });
});


/*test de AZ*/
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


/*test za*/
describe("ordenZaPokemon", () => {
  it("deberia ser una funcion", () => {
    expect(typeof ordenZaPokemon).toBe("function");
  });
});
it('Que retorne el array ordenado de la Z-A', () => {
  const arrDesc = [
    { name: "bulbasaur" }, { name: "abra" }, { name: "charmander" }
  ]
  const resultadoDesc = [{ name: "charmander" }, { name: "bulbasaur" }, { name: "abra" }]
  
  expect(ordenZaPokemon(arrDesc)).toEqual(resultadoDesc)
});

/*test 1-251*/
describe("ordenAscendentePokemon", () => {
  it("deberia ser una funcion", () => {


    expect(typeof ordenAscendente).toBe("function");
  });
});
it('Que retorne el array ordenado de 1-251', () => {
  const arrAscent = [
    { num: "1" }, { num: "66" }, { num: "12" }
  ]
  const resultadoAscent = [{ num: "1" }, { num: "12" }, { num: "66" }]
  
  expect(ordenAscendente(arrAscent)).toEqual(resultadoAscent)
});

/* test 251-1*/
describe("ordenDescendentePokemon", () => {
  it("deberia ser una funcion", () => {


    expect(typeof ordenDescendente).toBe("function");
  });
});
it('Que retorne el array ordenado de 251-1', () => {
  const arrDescent = [
    { num: "1" }, { num: "66" }, { num: "12" }
  ]
  const resultadoDescent = [{ num: "66" }, { num: "12" }, { num: "1" }]
  
  expect(ordenDescendente(arrDescent)).toEqual(resultadoDescent)
});

/* test filtro kanto*/
describe("ordenKanto", () => {
  it("deberia ser una funcion", () => {

    expect(typeof ordenKanto).toBe("function");
  });
});
it("que retorne el array Kanto", () => {
  const genKanto = [{
    generation: {
      "name": "kanto"
    },
  }]
  const resultadoKanto = [{
    generation: {
      "name": "kanto"
    }
  }]
  
  expect(ordenKanto(genKanto)).toEqual(resultadoKanto)
});

/* test filtro johto*/
describe("ordenJohto", () => {
  it("deberia ser una funcion", () => {
    expect(typeof ordenJohto).toBe("function");
  });
});
it("que retorne el array Johto", () => {
  const genJohto = [{
    generation: {
      "name": "johto"
    },
  }]
  const resultadoJohto = [{
    generation: {
      "name": "johto"
    }
  }]
  
  expect(ordenJohto(genJohto)).toEqual(resultadoJohto)
});