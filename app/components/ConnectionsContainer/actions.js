import axios from 'axios'
import {
  VEHICLE_TYPE_URL,
  VEHICLE_GROUP_URL,
  generateURL,
} from '../../config/consts'

function getToken() {
  return localStorage.token
}

export function getVehicles(vehicleType, vehicleGroup, handler, errorHandler) {
  axios({
    method: 'get',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: generateURL(vehicleType, vehicleGroup)
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

export function getVehicleTypes(handler, errorHandler) {
  axios({
    method: 'get',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLE_TYPE_URL
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

export function getVehicleGroups(handler, errorHandler) {
  axios({
    method: 'get',
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
    errorHandler(res)
  })
}
