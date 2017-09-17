import axios from 'axios'
import {VEHICLES_WITH_AGENTS_URL} from '../../config/consts'

function getToken() {
  return localStorage.token
}

export function getVehicles(handler, errorHandler) {
  axios({
    method: 'get',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: VEHICLES_WITH_AGENTS_URL
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
