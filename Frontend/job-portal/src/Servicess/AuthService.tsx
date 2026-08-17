
import axios from "axios"
const baseUrl = "http://localhost:8080/auth/"

const loginAuth = async (login: any) => {

  return axios.post(`${baseUrl}login`, login)
  .then((response) => response.data)
  .catch((error) => {throw error})

}
export {loginAuth};