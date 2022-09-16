import React from 'react'
import './style.css'

export default function TodoList(props) {

  let todos = [
    {
      id :1 ,
      description : 'buy food ',
      completed : false
    },
    {
      id :2 ,
      description : 'buy drink ',
      completed : false
    },
    {
      id :3 ,
      description : 'buy laptop ',
      completed : false
    },
]
const handleInfo = ()=>{props.setView('info')}


const mapTodo = todo => {
  return <p className='todo-item'>
     <div onClick={handleInfo}> {todo.id}  - { todo.description } </div> 
     <div>X</div> 
     </p>
     }


  return (
    <div id='todoListContainer'>
      <h1>TodoList</h1>
      {todos.map(mapTodo)}
      </div>
  )
}

/* 

1-create an array that containes all todos 
2-create a functtion that takes the array that I just create and print all todos into the screen
3- return that function I just create inside a div
4-make onClick into the div that contained the info and make it take the user to the info of the todo through using props.setView('info)

*/