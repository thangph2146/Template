import moment from "moment";

class PokemonEntity {
  //copy props from backend:
  createdAt: string = "";
  constructor(pokemon:any) {
    if(!pokemon) return ;
    Object.assign(this, pokemon);
    // convert entity type here
    this.createdAt = pokemon.createdAt? moment(pokemon.createdAt).format("DD/MM/YYYY"):"";
  }
  static createListPokemon(listPokemon:Array<any>){
    if (!Array.isArray(listPokemon)) return [];
    return listPokemon.map((pokemon:PokemonEntity) => {
      return new PokemonEntity(pokemon);
    });
  }
}
export default PokemonEntity;
