import React, { useState } from "react"
import TodoService from "../../services/TodoService"
import { Redirect } from "react-router-dom";

const Create = () => {
  const initialTodoState = {
    userId : 1,
    title:'',
    completed : false
  }
  const [todo, setTodo] = useState(initialTodoState);
  const [toTodo, setToTodo] = useState(false)
  const handleInputChange = e => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };
  const createTodo = () => {
    TodoService.store(todo).then((res) => {
      setTodo(initialTodoState);
      setToTodo(true);
    })
  }
  return(
    <>
    {toTodo ? <Redirect to="/todo"/> : null}
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/4">
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Todo
            </label>
            <input type="text" value={todo.title} onChange={handleInputChange} name="title" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={createTodo}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default Create