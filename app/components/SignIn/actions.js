import axios from 'axios'
import { AUTH_URL } from '../../config/consts'

export function authUser(email, password, handler, errorHandler) {
  axios({
    method: 'post',
    headers: {},
    responseType: 'json',
    url: AUTH_URL,
    data: {
      email: email,
      password: password
    }
  })
  .then(function (res){
    if (res.status < 400){
      localStorage.token = res.data.authorization_token;
      console.log(localStorage.token);
      handler();
    }
  })
  .catch(function (res) {
    errorHandler();
  });
}
