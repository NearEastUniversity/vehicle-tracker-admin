import axios from 'axios'
import {VEHICLE_URL, VEHICLE_TYPE_URL, VEHICLE_GROUP_URL, AGENT_URL} from '../../../config/consts'

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

export function getAgents(handler, errorHandler) {
  axios({
    method: 'get',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: AGENT_URL
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
