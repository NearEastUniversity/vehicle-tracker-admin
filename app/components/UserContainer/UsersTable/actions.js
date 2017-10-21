import axios from 'axios'
import {USER_URL} from '../../../config/consts'

function getToken() {
  return localStorage.token
}

export function deleteUser(uuid, scc, err) {
  axios({
    method: 'delete',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: USER_URL + uuid
  })
  .then(function (res){
    if (res.status < 400) {
      scc(res.data)
    }
  })
  .catch(function (error){
    err(error)
  })
}
