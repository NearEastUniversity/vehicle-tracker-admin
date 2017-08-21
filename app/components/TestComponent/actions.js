import axios from 'axios'
import {USER_URL} from '../../config/consts'

function getToken() {
  return localStorage.token
}

export function getUsers(handler) {
  // config axios
  axios({
    method: 'get',
    headers: {Authorization: "Bearer " + getToken()},
    url: USER_URL
  })
  // Log's all users
  .then(function (response){
      handler(response.data)
      console.log(response.data)
  })
  // Log's error
  .catch(function (error){
    console.log("Atention!: " + error)
  })
}

export function createUser(email, password, handler) {
  // config axios
  axios({
    method: 'post',
    headers: {Authorization: "Bearer " + getToken()},
    url: USER_URL,
    data: {
      email: email,
      password: password
    }
  })
  // Log's new created user
  .then(function (response){
      handler(response.data)
      console.log(response.data)
  })
  // Log's error
  .catch(function (error){
    console.log("Atention!: " + error)
  })
}
