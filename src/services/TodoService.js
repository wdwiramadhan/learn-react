import Axios from "../api";

const getTodos = async () => {
  const todos = await Axios.get("/todos");
  return todos;
};

const store = async () => {
  const todo = await Axios.post("/todos");
  return todo;
};

export default {
  getTodos,
  store,
};
