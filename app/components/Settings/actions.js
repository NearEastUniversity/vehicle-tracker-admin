import axios from 'axios'
import {AUTH_URL} from '../../config/consts'

function getToken() {
  return localStorage.token
}

export function getUserCredentials(scc, err) {
  axios({
    method: 'get',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: AUTH_URL
  })
  .then(function (res){
    if (res.status < 400) {
      scc(res.data.user)
    }
  })
  .catch(function (error){
    err(error)
  })
}
