import axios from 'axios'
import {VEHICLE_GROUP_URL} from '../../../../config/consts'

function getToken() {
  return localStorage.token
}

export function deleteGroup(group_id, scc, err) {
  axios({
    method: 'delete',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLE_GROUP_URL + group_id
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
