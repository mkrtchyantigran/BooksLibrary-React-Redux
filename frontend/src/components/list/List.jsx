import { useSelector } from "react-redux"
import { selectAuthorFilter, selectTitleFilter, selectonlyFavoriteFilter } from "../../redux/slices/filterSlice";
import { selectBooksState} from "../../redux/slices/bookSlice"

import ListItems from "../list-item/ListItem";




const List = () => {
  const books = useSelector(selectBooksState)
  const booksByFilteredTitle = useSelector(selectTitleFilter);
  const booksByFilteredAuthor = useSelector(selectAuthorFilter);
  const booksByFilteredOnlyFavorite = useSelector(selectonlyFavoriteFilter);

  const filteredBooks = books.filter(book => {
    const matchesTitle = book.title.toLowerCase().includes(booksByFilteredTitle.toLowerCase());
    const matchesAuthor = book.author.toLowerCase().includes(booksByFilteredAuthor.toLowerCase());
    const matchesOnlyFavorite = booksByFilteredOnlyFavorite ? book.isFavorite : true;
    return matchesTitle && matchesAuthor && matchesOnlyFavorite;
  });


  
 

  return (
    <div className="p-4 m-4 bg-[#f2f2f2] rounded-lg shadow-lg">
      <h2 className="text-center">Book List</h2>
      <ul className="p-0 m-4 max-h-[520px] min-h-[145px] overflow-y-auto">
        {
          !filteredBooks.length ? 
          <p>No Books available</p> :
          filteredBooks.map((book) => <ListItems 
            key={book.id} 
            book={book} 
            booksByFilteredTitle={booksByFilteredTitle}
            booksByFilteredAuthor={booksByFilteredAuthor}
           

           />)
        }
      </ul>
    </div>
  )
}

export default List