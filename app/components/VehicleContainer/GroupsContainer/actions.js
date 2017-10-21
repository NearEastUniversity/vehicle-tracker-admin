import axios from 'axios'
import {VEHICLE_GROUP_URL} from '../../../config/consts'

function getToken() {
  return localStorage.token
}

export function getGroups(scc, err) {
  axios({
    method: 'get',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLE_GROUP_URL
  })
  .then(function (res){
    if (res.status < 400) {
      scc(res.data)
    }
  })
  .catch(function (error){
    // console.log(res);
    err(error)
  })
}
