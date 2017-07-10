import axios from 'axios'
import {USERS_URL} from '../../config/consts'

const HEADERS = {Authorization: `Bearer ${localStorage.token}`}

export function getUsers(handler, errorHandler) {
  axios({
    method: 'get',
    headers: HEADERS,
    responseType: 'json',
    url: USERS_URL
  })
  .then(function (res){
    if (res.status < 400) {
      handler(res.data)
    }
  })
  .catch(function (res){
    console.log(res);
    errorHandler(res)
  })
}


export function createUser(email, password, handler, errorHandler) {

  console.log(email, password);

  axios({
    method: 'post',
    headers: HEADERS,
    responseType: 'json',
    url: USERS_URL,
    data: {
      email: email,
      password: password
    }
  })
  .then(function (res){
    if (res.status < 400) {
      handler(res.data)
    }
  })
  .catch(function (res){
    console.log(res);
    errorHandler(res)
  })
}
