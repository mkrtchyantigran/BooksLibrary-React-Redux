

const ListItem = ({book}) => {
  const { title, author} = book;
  return (
   <li className="flex justify-between items-center py-2 mb-2 rounded-lg px-4 border-b border-gray-300 bg-white hover:bg-[#dbe4f8] transition-colors duration-300">
      <h3>{title}</h3>
      <p>{author}</p>
   </li>
  )
}

export default ListItem