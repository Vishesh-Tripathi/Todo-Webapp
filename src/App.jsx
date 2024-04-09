

import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'



function App() {
  const[editbtn,setEditbtn]= useState(false);
  const[chngForm,setchgForm] = useState([]);
  const handleEdit = (todo)=>{
    setEditbtn(true);
    setchgForm(todo);
  }
  const back=()=>{
   setEditbtn(false);
    console.log("hello")
   }
  return (
    < >
      
      <AddTodo back={back} handleEdit={handleEdit} editbtn={editbtn} chngForm={chngForm} />
      <Todo handleEdit={handleEdit} editbtn={editbtn} chngForm={chngForm} />
     
      </>
  )
}

export default App
