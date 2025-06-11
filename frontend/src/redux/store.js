import {configureStore} from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import  BookSlice from "./slices/bookSlice";
import errorReducer from "./slices/errorSlice";

const store = configureStore( {
  reducer: {
    books: BookSlice,
    filter: filterReducer,
    error: errorReducer
  }
});

export default store;