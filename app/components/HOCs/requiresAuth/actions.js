export function getToken() {
    return localStorage.token
}

export function isAuthenticated(){
  if (getToken() != undefined) {
    return true
  }
  else {
    return false
  }
}
