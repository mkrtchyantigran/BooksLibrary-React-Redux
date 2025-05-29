import { useSelector } from "react-redux"
import { selectTitleFilter } from "../../redux/slices/filterSlice";
import ListItems from "../list-item/ListItem"



const List = () => {
  const books = useSelector(state => state.books);
  const booksByFilteredTitle = useSelector(selectTitleFilter);

  const filteredBooks = books.filter(book => {
    const matchesTitle = book.title.toLowerCase().includes(booksByFilteredTitle.toLowerCase());
    return matchesTitle;
  });
  console.log(filteredBooks);

  return (
    <div className="p-4 m-4 bg-[#f2f2f2] rounded-lg shadow-lg">
      <h2 className="text-center">Book List</h2>
      <ul className="p-0 m-4 max-h-[520px] min-h-[145px] overflow-y-auto">
        {
          !filteredBooks.length ? 
          <p>No Books available</p> :
          filteredBooks.map((book) => <ListItems book={book} key={book.id} />)
        }
      </ul>
    </div>
  )
}

export default List