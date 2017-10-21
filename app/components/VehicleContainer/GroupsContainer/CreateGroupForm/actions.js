import axios from 'axios'
import {VEHICLE_GROUP_URL} from '../../../../config/consts'

function getToken() {
  return localStorage.token
}

export function createGroup(groupData, scc, err) {
  axios({
    method: 'post',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLE_GROUP_URL,
    data: groupData
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
