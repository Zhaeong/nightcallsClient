import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://135.0.72.83:8081`
  })
}
