import axios from "axios"
const baseUrl = "http://localhost:8080/users/"

const registerUser = async (user: any) => {

  return axios.post(`${baseUrl}register`, user)
  .then((response) => response.data)
  .catch((error) => {throw error})

}

const loginUser = async (login: any) => {

  return axios.post(`${baseUrl}login`, login)
  .then((response) => response.data)
  .catch((error) => {throw error})

}

export  {registerUser, loginUser}