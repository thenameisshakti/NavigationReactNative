import authReducer from '../context/auth'
import { configureStore } from '@reduxjs/toolkit'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer , persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};


AsyncStorage.getItem('persist:root').then(value => {
  console.log('PERSISTED DATA:', value);
});

const persistedReducer = persistReducer(persistConfig, authReducer);



const store = configureStore({
    reducer: {
        auth: persistedReducer
    }
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
