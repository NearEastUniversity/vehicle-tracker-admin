import axios from 'axios'
import {USER_URL} from '../../../config/consts'

function getToken() {
  return localStorage.token
}

export function createUser(userData, handler, errorHandler) {
  axios({
    method: 'post',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: USER_URL,
    data: userData
  })
  .then(function (res){
    if (res.status < 400) {
      handler(res.data)
    }
  })
  .catch(function (res){
    // console.log(res);
    errorHandler(res)
  })
}
