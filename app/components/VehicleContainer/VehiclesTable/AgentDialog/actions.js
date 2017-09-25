import axios from 'axios'
import {VEHICLE_URL} from '../../../../config/consts'

function getToken() {
  return localStorage.token
}

export function changeAgent(plate_id, agent_uuid, scc, err) {
  axios({
    method: 'post',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLE_URL + plate_id + "/agent",
    data: agent_uuid
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

export function unassignAgent(plate_id, scc, err) {
  axios({
    method: 'delete',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLE_URL + plate_id + "/agent"
  })
  .then(function (res){
    scc(res.data)
  })
  .catch(function (err){
    err(err)
  })
}
