import axios from 'axios'
import {USER_URL} from '../../../config/consts'

function getToken() {
  return localStorage.token
}

export function deleteUser(uuid, handler, errorHandler) {
  axios({
    method: 'delete',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: USER_URL + uuid
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
