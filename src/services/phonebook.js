import axios from 'axios'

const URL = 'http://localhost:5000/persons'

const getAll = () => {
  const request = axios.get(URL)
  return request.then(res => res.data)
}

const create = (newObject) => {
  const request = axios.post(URL, newObject)
  return request.then(res => res.data)
}

export default { getAll, create }
