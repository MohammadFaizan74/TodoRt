import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    const[inputValue,setInputValue]=useState('');
    const [todos,setTodos]=useState([]);

     function handleInputChange(e){
        setInputValue(e.target.value);
     }
     const handleAddTodos=()=>{
        if(inputValue!==""){
            const newTodo={
                id:Date.now(),
                text:inputValue,
                completed:false,
            };
            setTodos([...todos,newTodo])
           // console.log(todos)
            }
            
        
     };
     const handleToggleChange=(id)=>{
        //console.log(id)
        const updatedTodos=todos.map((todo)=>{
            if(todo.id===id){
                return{...todo,completed:!todo.completed};
            }
            return todo;
           
        })
        setTodos(updatedTodos);
        //console.log(updatedTodos)
}
const Removehandler=(id)=>{
    const filteredTodos= todos.filter((todo)=>todo.id !==id);
    console.log(filteredTodos);
    setTodos(filteredTodos)
    

};

  return (
    <div>
        <div className='todo-container'>
            <h1>Todo List</h1>
            <input type='text' value={inputValue} placeholder='Enter  a new list' 
            onChange={handleInputChange}
            />
            <button onClick={handleAddTodos}>Add</button>
            <ul className='todo-list'>
                {todos.map((todo)=>(
                    <li className={`todo-item ${todo.completed==true?"Completed":""}`}>
                        <input type='checkbox' onChange={()=>handleToggleChange(todo.id)}/>
                        <span className='todo-text'>{todo.text}</span>
                        <button onClick={()=>Removehandler(todo.id)}>Remove</button>
                    </li>

                ))}

            </ul>

        </div>
    </div>
  )
}

export default TodoList