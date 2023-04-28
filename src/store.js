import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { CookieStorage } from 'redux-persist-cookie-storage';
import Cookies from 'cookies-js'
import { rootReducer } from './features/rootReducer';

const persistConfig = {
  key: 'root',
  storage: new CookieStorage(Cookies),
  whitelist: ['todoReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store)

export {store, persistor}
