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

const sendOtp = async (email: any) => {

  return axios.post(`${baseUrl}sendOtp/${email}`)
  .then((response) => response.data)
  .catch((error) => {throw error})

}

const verifyOtp = async (email:any,otp: any) => {

  return axios.get(`${baseUrl}verifyOtp/${email}/${otp}`)
  .then((response) => response.data)
  .catch((error) => {throw error})
}

const changePass = async (email:any,password: any) => {

  return axios.post(`${baseUrl}changePass`,{email,password})
  .then((response) => response.data)
  .catch((error) => {throw error})

}


export  {registerUser, loginUser, sendOtp, verifyOtp, changePass};