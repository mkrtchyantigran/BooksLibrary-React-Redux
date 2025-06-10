import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import createBookWithID from "../../utils/createBookWithID";



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

export const FetchBook = createAsyncThunk(
  "books/fetchBook",
  async () => {
    const res = await axios.get("http://localhost:7777/random-book");
    return  await res.data;
  }
)

const BookSlice= createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => { state.push(action.payload)},
    randomBook: (state, action) => { state.push(action.payload)},
    deleteBook: (state, action) => state.filter(book => book.id !== action.payload),
    toggleFavorite: (state, action) => state.map(book => book.id === action.payload ? {...book, isFavorite: !book.isFavorite} :book )
  },
  extraReducers: (builder) => {
    builder.addCase(FetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
          state.push(createBookWithID(action.payload, "via api"));
          
      }
      
    })
  }
});




export const { 
  addBook,
  randomBook,
  deleteBook,
  toggleFavorite
} = BookSlice.actions;

// thunFunction = dispatch, getState
// export const thunkFunction = async (dispatch) => {
//     try {
//       const res = await axios.get("http://localhost:7777/random-book");
//     if( res?.data && res?.data.title && res?.data.author) {
//       dispatch(addBook(createBookWithID(res.data, "via api")));
//     }
//     }

//     catch (e) {
//       console.log(e)
//     }
//   }

//state
export const selectBooksState = state => state.books;

export default BookSlice.reducer;

