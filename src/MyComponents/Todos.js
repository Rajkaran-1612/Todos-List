import React from 'react'
import TodoItem from "./TodoItem"

const Todos = (props) => {

  const myStyle = {
    minHeight: "50vh",
    margin: "40px auto"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">Todo List</h3>

      {props.todos.length === 0 ? <p>No todos here</p> : props.todos.map((todo) => {
        return( <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/>
        )
      })}
      
    </div>
  )
}

export default Todos