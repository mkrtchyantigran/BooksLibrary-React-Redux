import {configureStore} from '@reduxjs/toolkit';
import booksReducer from './books/reducer';
import filterReducer from './slices/filterSlice';
import  BookSlice from "./slices/bookSlice";

const store = configureStore( {
  reducer: {
    books: BookSlice,
    filter: filterReducer
  }
});

export default store;