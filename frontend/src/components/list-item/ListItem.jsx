
import { useDispatch } from "react-redux";
import { HiArchiveBox, HiBookmark  } from "react-icons/hi2";

// import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";

import { deleteBook, toggleFavorite} from "../../redux/slices/bookSlice";

import markedMatch from "../../utils/markedMatch"

const ListItems = ({
    book,
    booksByFilteredTitle, 
    booksByFilteredAuthor 
}) => {
  const dispatch = useDispatch();
  
const handleDeleteBook = (id) => {
  dispatch(deleteBook(id))
}

const hendleToggleFavortie = (id) => dispatch(toggleFavorite(id));
 
  
  return (
   <li className="flex justify-between items-center py-2 mb-2 rounded-lg px-4 border-b border-gray-300 bg-white hover:bg-[#dbe4f8] transition-colors duration-300">
      <div>
        <h3>
          <span className="text-xs mr-2">Title:</span>
          {markedMatch(book.title, booksByFilteredTitle)}
        </h3>
        <p>
          <span className="text-xs mr-2">Author:</span>
          <strong>{markedMatch(book.author, booksByFilteredAuthor)}</strong>
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {book.source}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handleDeleteBook(book.id)}
          className="px-3 py-3 bg-red-500 hover:bg-red-600 text-xs transition-colors duration-300 text-white cursor-pointer rounded-lg"
        >
          <HiArchiveBox />
          </button>
          <button
            onClick={() => hendleToggleFavortie(book.id)}
            className={`${book.isFavorite ? " bg-amber-400 hover:bg-amber-300": "bg-gray-400 hover:bg-gray-300"} px-3 py-2 transition-colors duration-300 text-white cursor-pointer rounded-lg`}
          >
          <HiBookmark />
          </button>
      </div>
   </li>
  )
}

export default ListItems


