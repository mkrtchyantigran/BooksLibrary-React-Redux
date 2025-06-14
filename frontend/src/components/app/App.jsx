import Header from "../header/Header.jsx";
import Form from "../form/Form.jsx";
import Filter from "../filter/Filter.jsx";
import List from "../list/List.jsx";
import Error from "./error/Error.jsx";
function App() {
  

  return (
   <div className="flex flex-col items-center   bg-gray-500 dark:bg[#1b2632] min-h-screen">
        
       <Header />

      <main className=" container flex justify-between w-full mb-4 max-md:flex-col">
        <div className="flex  flex-1 basis-2/5 mx-auto max-md:w-full">
          <Form/>
        </div>
        <div className="flex flex-col flex-1 basis-3/5">
          <Filter />
          <List />
        </div>
      </main>
      <Error />
   </div>
  )
}

export default App
