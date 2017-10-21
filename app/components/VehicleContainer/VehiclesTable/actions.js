import axios from 'axios'
import {VEHICLE_URL} from '../../../config/consts'

function getToken() {
  return localStorage.token
}

export function deleteVehicle(plate_id, scc, err) {
  axios({
    method: 'delete',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLE_URL + plate_id
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
