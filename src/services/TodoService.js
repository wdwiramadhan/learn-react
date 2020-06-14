import Axios from "../api";

const getAll = async() => {
  return await Axios.get("/todos");
}

const store = async() => {
  return await Axios.post("/todos");
}

const remove = () => {

}

export default {
  getAll,
  store,
  remove
}