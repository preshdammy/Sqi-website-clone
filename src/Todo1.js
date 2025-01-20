import React from 'react'
import { useState } from 'react'

let todoArray = []

const Todo1 = () => {
   let [title, setTitle] = useState('');
   let [content, setContent] = useState('')
   let [todoArray, setTodoArray] = useState([])

   const add = () =>{
    let addTodo = {
      title,
      content
    }
    setTodoArray([...todoArray, addTodo])
      setTitle('')
      setContent('')
   } 

   const deleteTodo = (index) => {
    const newTodoArray = todoArray.filter((p, i) => i !== index);
    setTodoArray(newTodoArray);
 };

 const editTodo = (index) => {
  const todoToEdit = todoArray[index];
  setTitle(todoToEdit.title); 
  setContent(todoToEdit.content); 

  deleteTodo(index);
};

const updateTodo = () => {
  const updatedTodoArray = [...todoArray, { title, content }];
  setTodoArray(updatedTodoArray);
  setTitle('');
  setContent('');
};

  return (
    <div >
      <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} placeholder="Title"/>
      <input type="text" onChange={(e)=>setContent(e.target.value)} value={content} placeholder="Content" />
      <button onClick={add} > Add todo</button>
      <button onClick={updateTodo} disabled={!title || !content}>
          Update todo
         </button>

      <br /><br />

      {todoArray.length === 0? "Todo list unavailabe" :
              todoArray.map((user, index) =>{
               return(
               <>
                  <div key={index}>
                       <h1>Title: {user.title}</h1>
                       <p>Content: {user.content}</p>
                       <button onClick={() => deleteTodo(index)}>Delete</button>
                       <button onClick={() => editTodo(index)}>Edit</button>
                    </div>
               </>
              )})
            }
    </div>
  )
}

export default Todo1