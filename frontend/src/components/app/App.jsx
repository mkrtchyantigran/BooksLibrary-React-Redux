import Header from "../header/Header.jsx";
import Form from "../form/Form.jsx";
import Filter from "../filter/Filter.jsx";
import List from "../list/List.jsx";
function App() {
  

  return (
   <div className="flex flex-col items-center justify-center text-center bg-gray-600 dark-bg [#112d49]">
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
   </div>
  )
}

export default App
