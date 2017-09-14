import axios from 'axios'
import {VEHICLE_GROUP_URL} from '../../../config/consts'

function getToken() {
  return localStorage.token
}

export function createGroup(groupData, handler, errorHandler) {
  axios({
    method: 'post',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLE_GROUP_URL,
    data: groupData
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
