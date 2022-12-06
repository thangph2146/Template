import { combineReducers } from '@reduxjs/toolkit';
import profileStore from './authentication/profileStore';
import pokemonStore from './pokemon/pokemonStore';
import userStore from './user/userStore';

const appReducer = combineReducers({
  pokemonStore: pokemonStore.reducer,
  profile: profileStore.reducer,
  userStore: userStore.reducer,

});

export type RootState = ReturnType<typeof appReducer>;
export default appReducer;
