import axios from 'axios'
import {VEHICLE_URL} from '../../../config/consts'

function getToken() {
  return localStorage.token
}

export function createVehicle(vehicleData, scc, err) {
  axios({
    method: 'post',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLE_URL,
    data: vehicleData
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
