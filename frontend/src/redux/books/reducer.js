import * as actionTypes from "./actionTypes";


const initialState = [
  {
    id:1,
    title: "Book 1",
    author: "Author 1"
  },
   {
    id:2,
    title: "Book 1",
    author: "Author 1"
  },
   {
    id:3,
    title: "Book 1",
    author: "Author 1"
  }
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload]
    case actionTypes.DELETE_BOOK:
      return state.filter(book => book.id !== action.payload)
      default:
      break;
  }
}

export default booksReducer;