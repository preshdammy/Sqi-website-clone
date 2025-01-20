import React from 'react'
import { useState } from 'react'


const App = () => {
  let [title, setTitle] = useState('');
  let [content, setContent] = useState('')
  let [todoArray, setTodoArray] = useState([])
  let [editing, setEditing] = useState(false)
  
  function addTodo(){
  const existTitle = todoArray.find((obj)=>obj.title === title)
    if(!title || !content){
      alert('All fields are mandatory')
    }else if(existTitle){
      alert('Todo with this title already exist')
    }
    else{
        let newTodo = {
          title,
          content
        }
        setTodoArray([...todoArray, newTodo])
    }
    setTitle('')
    setContent('')
  }

  const deleteTodo = (ind)=>{
      setTodoArray(todoArray.filter((obj, indexs)=>indexs !== ind))
  }

  const editTodo = (ind)=>{
        setEditing(ind)
        setTitle(todoArray[ind].title)
        setContent(todoArray[ind].content)
  }

  function cancelEdit() {
      setEditing(false)
      setContent('');
      setTitle('')
  } 

  const saveEdit = ()=>{
    if (todoArray[editing].title === title && todoArray[editing].content === content) {
      alert('Nothing has changed. Press cancel to discard discard changes')
    }else if(!title || !content){
      alert('Type in new title and content')
    }else{
      todoArray[editing].title = title;
      todoArray[editing].content = content
      setEditing(false)
      setContent('')
      setTitle('')
    }
    
  }

  return (
    <div className='w-100 d-flex flex-column justify-content-start align-items-center p-5'>
        <h2 className='text-primary'>Todo App</h2>
        <div className='w-100 row d-flex justify-content-center align-items-start mt-5 gap-5'>
          <div className='todoInputs col-4 bg-primary rounded-3 p-3 shad0w-lg me-5'>
            <h4 className='text-light'>{editing !== false ?'Edit Todo' :'Add Todo'}</h4>
            <form className='w-100 p-3'> 
              <input type="text" className='w-100 form-control mb-4' placeholder='Title' onChange={(e)=>setTitle(e.target.value)} value={title}/>
              <input type="text" className='w-100 form-control mb-4' placeholder='Content' onChange={(e)=>setContent(e.target.value)} value={content}/>
              {editing !== false ?(<div><button className='btn btn-warning px-2 py-1 me-2 rounded-2' type='button' onClick={cancelEdit}>Cancel</button>
              <button  className='btn btn-info px-2 py-1 mx-2 rounded-2' type='button' onClick={saveEdit}>Save Edit</button>
              </div>) 
              
              :(<button className='btn btn-primary border border-light border-2 shadow' type='button' onClick={addTodo}> Add Todo </button>)}
            </form>
          </div>
          {editing !== false ?'' : (<div className='w-50 col-6 rounded-3 border border-3 border-info ms-5 p-4'>
            <p>{todoArray.length===0 ?'Your todo list is empty' :''}</p>
                {
                  todoArray.map((obj, index)=>{
                    return (
                      <div className='mb-3'>
                        <div><span className='fw-semibold'>Title: </span><span>{obj.title}</span></div>
                        <div><span className='fw-semibold'>Content: </span><span>{obj.content}</span></div>
                        <div className='d-flex justify-content-start gap-3 align-items-center w-75 mt-2'>
                          <button className='px-2 py-1 fw-semibold btn btn-danger' onClick={()=>deleteTodo(index)}> Delete </button>
                          <button className='px-2 py-1 fw-semibold btn btn-warning' onClick={()=>editTodo(index)}> Edit </button>
                        </div>
                      </div>
                    )
                  })
                }
          </div>)}
          
      </div>
    </div>
  )
}

export default App