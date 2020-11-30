import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import rootReducer from './reducer';
import { ownLogger } from './logger';
import thunk from 'redux-thunk';

const middleWares =[ownLogger, thunk];

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'user']
}  
const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: middleWares,
})

export const persistore = persistStore(store);
export default store;


