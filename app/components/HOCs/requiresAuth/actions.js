export function getToken() {
    return localStorage.token
}

export function removeUserEssentials() {
  localStorage.removeItem('token');
  // localStorage.removeItem('roles');
  // localStorage.removeItem('id');
  // localStorage.removeItem('user');
  // localStorage.removeItem('userEmail');
}

export function isAuthenticated(){
  if (getToken() != undefined) {
    return true
  }
  else {
    return false
  }
}
