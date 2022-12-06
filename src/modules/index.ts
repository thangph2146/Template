import { combineReducers } from '@reduxjs/toolkit';
import pokemonStore from './pokemon/pokemonStore';

const appReducer = combineReducers({
  pokemonStore: pokemonStore.reducer
});

export type RootState = ReturnType<typeof appReducer>;
export default appReducer;
