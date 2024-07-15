import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // middleware
import rootReducer from './reducers'; // import your root reducer

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production', // Redux DevTools will be enabled only in development mode
});

export default store;
