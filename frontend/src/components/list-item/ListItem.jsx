
import { useDispatch } from "react-redux";
import { HiArchiveBox, HiBookmark  } from "react-icons/hi2";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";


const ListItems = ({book}) => {
  const dispatch = useDispatch();
  
const handleDeleteBook = (id) => {
  dispatch(deleteBook(id))
}

const hendleToggleFavortie = (id) => dispatch(toggleFavorite(id));
 
  
  return (
   <li className="flex justify-between items-center py-2 mb-2 rounded-lg px-4 border-b border-gray-300 bg-white hover:bg-[#dbe4f8] transition-colors duration-300">
      <div>
        <h3>Title: {book.title}</h3>
      <p>
        Author:
        <strong>{book.author}</strong></p>
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


