// API ROOT
let API_ROOT = "https://api.vehicles.neu.edu.tr";

// Development route
if (process.env.NODE_ENV !== 'production') {
  API_ROOT = "http://127.0.0.1:5004";
}

// AUTH
export const AUTH_URL = `${API_ROOT}/auth/`;

// User
export const USER_URL = `${API_ROOT}/user/`;

// Vehicle
export const VEHICLE_URL = `${API_ROOT}/vehicle/`;
export const VEHICLE_TYPE_URL = `${API_ROOT}/vehicle/type/`;
export const VEHICLE_GROUP_URL = `${API_ROOT}/vehicle/group/`;
export function generateURL(vehicleType, vehicleGroup) {
  let url = `${API_ROOT}/vehicle/filter?vehicle_type=`+ vehicleType + `&vehicle_group_id=` + vehicleGroup + `&agent_state=ASSIGNED`;
  return url
}

// Agent
export const AGENT_URL = `${API_ROOT}/agent/`;
export const UNASSIGNED_AGENT_URL = `${API_ROOT}/agent/?state=UNASSIGNED`;
