import axios from 'axios'
import {VEHICLE_URL} from '../../config/consts'

function getToken() {
  return localStorage.token
}

export function createVehicle(vehicleData, handler, errorHandler) {

  console.log(vehicleData);

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

export function getVehicles(handler, errorHandler) {
  axios({
    method: 'get',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLE_URL
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
