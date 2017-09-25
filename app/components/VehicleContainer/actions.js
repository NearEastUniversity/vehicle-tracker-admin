import axios from 'axios'
import {VEHICLE_URL, UNASSIGNED_AGENT_URL, VEHICLE_GROUP_URL, VEHICLE_TYPE_URL} from '../../config/consts'

function getToken() {
  return localStorage.token
}

export function getVehicles(scc, err) {
  axios({
    method: 'get',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLE_URL
  })
  .then(function (res){
    if (res.status < 400) {
      scc(res.data)
    }
  })
  .catch(function (err){
    err(err)
  })
}

export function getUnassignedAgents(scc, err) {
  axios({
    method: 'get',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: UNASSIGNED_AGENT_URL
  })
  .then(function (res){
    if (res.status < 400) {
      scc(res.data)
    }
  })
  .catch(function (err){
    err(err)
  })
}

export function getVehicleGroups(scc, err) {
  axios({
    method: 'get',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLE_GROUP_URL
  })
  .then(function (res){
    if (res.status < 400) {
      scc(res.data)
    }
  })
  .catch(function (err){
    err(err)
  })
}

export function getVehicleTypes(scc, err) {
  axios({
    method: 'get',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLE_TYPE_URL
  })
  .then(function (res){
    if (res.status < 400) {
      scc(res.data)
    }
  })
  .catch(function (err){
    err(err)
  })
}
