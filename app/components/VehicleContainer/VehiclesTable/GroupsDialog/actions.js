import axios from 'axios'
import {VEHICLE_URL} from '../../../../config/consts'

function getToken() {
  return localStorage.token
}

export function setVehicleGroups(plate_id, groups, scc, err) {
  axios({
    method: 'put',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLE_URL + plate_id + "/groups",
    data: groups
  })
  .then(function (res){
    scc(res.data)
  })
  .catch(function (err){
    err(err)
  })
}
