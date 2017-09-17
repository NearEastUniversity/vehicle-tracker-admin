import axios from 'axios'
import {VEHICLE_URL} from '../../../config/consts'

function getToken() {
  return localStorage.token
}

export function createVehicle(vehicleData, handler, errorHandler) {
  axios({
    method: 'post',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLE_URL,
    data: vehicleData
  })
  .then(function (res){
    if (res.status < 400) {
      handler(res.data)
    }
  })
  .catch(function (res){
    errorHandler(res)
  })
}
