import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo,  updateTodo } from '../Features/Todo/Todoslice'
import { MdKeyboardBackspace } from "react-icons/md";

function AddTodo({editbtn,chngForm,back}) {
    // add dispatch se hota h
    const [input,setInput] = useState('')
    const [editValue,setEditvalue] = useState('');
    const dispatch = useDispatch()

    const addTodoHandler =(e)=>{
        e.preventDefault();
        // dispatch reducer ka y\use krke store to chize bhejta h dispatch=>reducer=>store
        console.log(input)
        dispatch(addTodo(input))
        setInput('')// for cleaning field
    }

    useEffect(()=>{
      setEditvalue(chngForm.text);
    },[chngForm])
    // console.log(chngForm.text);
     
  const  editTodo =(e)=>{
       e.preventDefault();
      //  console.log(chngForm.text)
      let editedObj={
        id:chngForm.id,
        text:editValue
      }
      dispatch(updateTodo(editedObj))
      // chngForm.text === editValue;
  }

    
    return (
      <>
         <h1 className=' text-center justify-center items-center text-3xl p-12 font-bold'>Todo App </h1>
         {editbtn === false ? (
           <form onSubmit={addTodoHandler} className="space-x-3 mt-12 ml-[600px]">
           <input
             type="text"
             className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             placeholder="Enter a Todo..."
             value={input}
             onChange={(e) => setInput(e.target.value)}
           />
           <button
             type="submit"
             className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
           >
            Add Todo
           </button>
         </form>
         ):( <form onSubmit={editTodo} className="space-x-3 mt-12  ml-[600px]">
         <input
           type="text"
           className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
           placeholder="Enter a Todo..."
           value={editValue||''}
           onChange={(e) => setEditvalue(()=>e.target.value)}
          
           
         />
         <button
           type="submit"
           className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
         >
           Update Todo
         </button>
         <button  onClick={()=>back()} className='"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'><MdKeyboardBackspace /></button>
       </form>)}
         </>
   
       
      
      )
}

export default AddTodo
