export const UPDATE_TODO = 'UPDATE_TODO';
import {createSlice,nanoid} from '@reduxjs/toolkit'
const initialState = {
    todos : [{id : 1, text: "Hello World"}]
}
export const  todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo: (state,action)=> {
            // state => current state
            //action =>  jo bhi data pass ho rha h
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            //pushing in current state
            state.todos.push(todo);
        },
        removeTodo: (state,action)=>{
                 // remove krne ke liye id to bheja hi hoga 
                 // 1 filter lga denge jo har 1 id dega agr id match ho jayegi to usko chod denge 
                 state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo: (state,action)=>{
            // update krne ke liye id to bheja hi hoga 
            // 1 filter lga denge jo har 1 id dega agr id match ho jayegi to usko chod denge 
            let data = action.payload;
            const updatedarr = [];
            state.todos.map((item)=>{
                if(item.id===data.id){
                    
                    item.text = data.text;
                  
                }
                updatedarr.push(item);
            })
           
   },
    }
})
export const handleEditSubmit=(payload)=>{
    return{
        type: UPDATE_TODO,
        payload
    }
}

export const{addTodo,removeTodo,updateTodo}=todoSlice.actions;
export default todoSlice.reducer