import axios from 'axios'
import {USER_URL} from '../../config/consts'

function getToken() {
  return localStorage.token
}

export function getUsers(scc, err) {
  axios({
    method: 'get',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: USER_URL
  })
  .then(function (res){
    if (res.status < 400) {
      scc(res.data)
    }
  })
  .catch(function (err){
    err(err)
  })
}
