import {IoMdTrash, IoMdBookmark  } from "react-icons"
import { useDispatch } from "react-redux"

import { deleteBook } from "../../redux/books/actionCreators"
const ListItem = ({book: {title, author, id}}) => {
  const dispatch = useDispatch();

  const handleDeleteBook = () => dispatch(deleteBook(id));
  
  return (
   <li className="flex justify-between items-center py-2 mb-2 rounded-lg px-4 border-b border-gray-300 bg-white hover:bg-[#dbe4f8] transition-colors duration-300">
      <div>
        <h3>{title}</h3>
      <p>
        Author:
        <strong>{author}</strong></p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handleDeleteBook(id)}
          className="px-3 py-2 bg-red-500 hover:bg-red-600 text-xs transition-colors duration-300 text-white cursor-pointer rounded-lg"
        >
          <IoMdTrash />
          </button>
             <button
          className="px-3 py-2 bg-red-500 hover:bg-red-600 text-xs transition-colors duration-300 text-white cursor-pointer rounded-lg"
        >
          <IoMdBookmark />
          </button>
      </div>
   </li>
  )
}

export default ListItem