
import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux'
// import { addBook } from '../../redux/books/actionCreators';


import createBookWithID from "../../utils/createBookWithID.js";

import { addBook, randomBook, FetchBook } from '../../redux/slices/bookSlice.js';
import data from "../../../../data/data.json"

const Form = () => {
  const [state, setState] = useState({
    title: "",
    author: ""
  });

  const dispatch = useDispatch();
  const {title, author} = state;
  

  	
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(title && author) {
      
      dispatch(addBook(createBookWithID({title, author,}, "via form" )))
      setState({title: "", author: ""})
    }

  }


  const hendleAddRandomBook =() => dispatch(addBook(createBookWithID(data[Math.floor(Math.random() * data.length)], "via random")));
  
  	
  

  const handleAddRandomBookViaAPI =  () => dispatch(FetchBook())

;
  return (
    <div className="w-full p-4 m-4 bg-[#f2f2f2] rounded-lg shadow-lg">
      <h2 className='mb-4 text-2xl'>add a new Book</h2>
      <form onSubmit={handleSubmit}>  
          <input 
            type="text"
            value={title}
            onChange={(e) => setState(prevState => ({ ...prevState, title: e.target.value }))}
            className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg'
            placeholder='Book Title'
          />
       
          <input 
            type="text"
            value={author}
            onChange={(e) => setState(prevState => ({...prevState, author: e.target.value}))}
            className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg'
            placeholder='Book Author'
          />
          <div className='flex gap-4 max-lg:flex-wrap'>
        <button
          type='submit'
          className="flex-1 max-md:basis-full max-lg:basis-1/3  bg-emerald-500 text-white text-sm py-2 px-4 rounded-md cursor-pointer  hover:bg-emerald-600 transition-colors duration-300"
        >
          Add Book
        </button>
        <button
          onClick={hendleAddRandomBook}
          type='button'
          className="max-md:basis-full max-lg:basis-1/3 flex-1  bg-cyan-600 hover:bg-cyan-500 transition-colors duration-300 text-white text-sm py-2 px-4 rounded-md cursor-pointer  "
        >
          Random
        </button >
        <button
          onClick={handleAddRandomBookViaAPI}
          type='button'
          className="max-md:basis-full max-lg:basis-1/3 flex-1  bg-[#007bff] text-white text-sm py-2 px-4 rounded-md cursor-pointer  hover:bg-[#0056b3] transition-colors duration-300"
        >
          Use API
        </button>
          </div>
       
      </form>
    </div>
  )
}

export default Form