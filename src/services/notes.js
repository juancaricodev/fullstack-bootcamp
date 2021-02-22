import axios from 'axios'

const URL = 'http://localhost:5000/notes'

const getAll = () => {
  return axios.get(URL)
}

const create = (newObject) => {
  return axios.post(URL, newObject)
}

const update = (id, newObject) => {
  const url = `${URL}/${id}`
  return axios.put(url, newObject)
}

export default {
  getAll,
  create,
  update
}
