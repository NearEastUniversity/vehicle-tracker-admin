import axios from 'axios'
import {GETALLUSERS_URL} from '../../config/consts'


export function getUsers(handler, errorHandler) {
  axios({
    method: 'get',
    headers: {Authorization: `Bearer ${localStorage.token}`},
    responseType: 'json',
    url: GETALLUSERS_URL
  })
  .then(function (res){
    if (res.status < 400) {
      handler(res.data)
    }
  })
  .catch(function (res){
    console.log(res);
    errorHandler(res)
  })
}
