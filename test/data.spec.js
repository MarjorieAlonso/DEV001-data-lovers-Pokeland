import { searchFilter,ordenAzPokemon} from '../src/data.js';


describe('searchFilter', () => {
  it('filtra por nombre de pokemon', () => {
    let data= [{name:"bulbasaur"},{name:"pikachu"}]
    let nombres="bulbasaur";
    let resultReal=searchFilter(data,nombres);
    let resultExpect= [{name:"bulbasaur"}]
    expect(resultReal).toEqual(resultExpect);
  });
});



describe("ordenAzPokemon", () => {
  it("ordena los pokemon de la a a la z", () => {
    let orden=[{name:"abra"},{name:"aerodactyl"}]
    let ascendente= "abra";
    let real= ordenAzPokemon(orden,ascendente);
    let expect=[{name:"abra"}]

    expect(real).toEqual(expect);
  });
  });

  /* it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */
