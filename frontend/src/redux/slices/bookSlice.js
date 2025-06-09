import { createSlice } from "@reduxjs/toolkit"




const initialState = [
   {
    id: 1,
    title: "Book 1",
    author: "Author 1",
    source: "initial",
    isFavorite: false
  },
   {
    id:2,
    title: "Book 1",
    author: "Author 1",
    source: "initial",
    isFavorite: true
  },
   {
    id:3,
    title: "Book 1",
    author: "Author 1",
    source: "initial",
    isFavorite: false
  },
  
]

const BookSlice= createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => { state.push(action.payload)},
    deleteBook: (state, action) => state.filter(book => book.id !== action.payload),
    toggleFavorite: (state, action) => state.map(book => book.id === action.payload ? {...book, isFavorite: !book.isFavorite} :book )
  }
});

export const { 
  addBook,
  deleteBook,
  toggleFavorite
} = BookSlice.actions;

//state
export const selectBooksState = state => state.books;

export default BookSlice.reducer;

