import axios from 'axios'
import {VEHICLE_GROUP_URL} from '../../../config/consts'

function getToken() {
  return localStorage.token
}

export function deleteGroup(handler, errorHandler) {
  axios({
    method: 'delete',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLE_GROUP_URL
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
