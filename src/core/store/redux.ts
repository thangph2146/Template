import { applyMiddleware, createStore } from 'redux';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';
import CONFIG from '../../config';
import appReducer, { RootState } from '../../modules';

 

const settingStore = createWhitelistFilter('settingStore', ['language']);

const persistConfig: PersistConfig<RootState> = {
  key: CONFIG.APP_NAME,
  storage,
  blacklist: [],
  transforms: [  settingStore ],
  whitelist: [  'settingStore'], 
};
const persistedReducer = persistReducer(persistConfig, appReducer);
const middleware: any = [];

 
const store = createStore(persistedReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);

export default store;

 