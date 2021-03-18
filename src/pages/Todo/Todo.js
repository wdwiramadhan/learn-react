import React, { useState, useEffect } from "react";
import TodoService from "../../services/TodoService";
import { Link } from "react-router-dom";

const Task = () => {
  const [todos, setTodos] = useState({
    loading: false,
    data: null,
    error: false,
  });
  useEffect(() => {
    setTodos({
      loading: true,
      data: null,
      error: false,
    });
    TodoService.getTodos()
      .then((res) =>
        setTodos({
          loading: false,
          data: res.data,
          error: false,
        })
      )
      .catch((err) =>
        setTodos({
          loading: false,
          data: null,
          error: false,
        })
      );
  }, [setTodos]);
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-wrap">
        <div className="w-full">
          <Link
            to="todo/create"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Add Todo
          </Link>
        </div>
        <div className="w-full mt-5">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {todos.error ? (
                <p>There was an error. Refresh page or try again later.</p>
              ) : todos.data ? (
                todos.data.map((todo, key) => (
                  <tr key={key}>
                    <td className="border px-4 py-2">{key + 1}</td>
                    <td className="border px-4 py-2">{todo.title}</td>
                    <td className="border px-4 py-2">
                      {todo.completed ? (
                        <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-3 rounded-full">
                          completed
                        </button>
                      ) : (
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded-full">
                          on going
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Task;
