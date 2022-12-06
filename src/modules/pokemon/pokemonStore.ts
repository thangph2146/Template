import { createSlice } from "@reduxjs/toolkit";
import PokemonPresenter from "./presenter";

interface IPokemon {
  listPokemon?: Array<{}>;
}

const pokemonStore = createSlice({
  name: "pokemonStore",
  initialState: {
    listPokemon: [] || undefined,
  } as unknown as IPokemon,
  reducers: {
    setListPokemon: (state, { payload }) => {
      state.listPokemon = payload;
    },
  },
  extraReducers: {
   
  },
});

export default pokemonStore;
