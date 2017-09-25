import axios from 'axios'
import { AUTH_URL } from '../../config/consts'

export function authUser(email, password, scc, err) {
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
      scc();
    }
  })
  .catch(function (err) {
    err(err);
  });
}

export function getToken() {
    return localStorage.token
}

export function isSignedIn(){
  if (getToken() != undefined) {
    return true
  }
  else {
    return false
  }
}
