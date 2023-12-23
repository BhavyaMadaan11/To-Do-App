import React, { useState } from 'react'
import './Todo.css'

function Todo() {

  const[newTodo,setNewTodo] = useState('');
  const[listTodo,setListTodo] = useState([]);

  // useEffect(() => {
  //   console.log(listTodo);
  // }, [listTodo]);
  
  let addList = (newTodo)=>{
    if(newTodo){
      setListTodo((listTodo)=>[...listTodo,newTodo])
    }  
  }

  const removeItem = (key) =>{
    let updatedTodoList = [...listTodo];
    updatedTodoList.splice(key,1)
    setListTodo(updatedTodoList)
  }

  return (
    <>
    <h1 className='Todo-app'>ToDo App</h1>

    <div className="input-container">
      <input 
        type='text' 
        id='input-box'
        placeholder='Enter Your ToDo Here...'
        value={newTodo}
        onChange={e=>{
          setNewTodo(e.target.value)
        }}
        >
      </input>

      <button className='btn' onClick={()=>{
        addList(newTodo)
        setNewTodo("")
        }}>
        Add
      </button>
    </div>

    <ul className='todoList'>
      {listTodo.map((listItem,index)=> (
        <li key={index} className='list-item'>{listItem} <button className='del-btn' onClick={()=>removeItem(index)}>Remove</button></li>
      ))}
       {/* <li className='list-item'>Item <button className='del-btn'>Remove</button></li>
      <li className='list-item'>Item <button className='del-btn'>Remove</button></li>
      <li className='list-item'>Item <button className='del-btn'>Remove</button></li>  */}
    </ul>
    </>
  )
}

export default Todo;