  
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOUGOUT_USER } from "./ActionTypes";
import { request } from "../utils/axios";

const USER_URL = "/users";

export function loginUser(dataToSubmit) {
    const data = request("post", USER_URL + "/login", dataToSubmit);
  
    return {
      type: LOGIN_USER,
      payload: data,
    };
}

export function logoutUser() {
  const data = request("post", USER_URL + "/logout");

  return {
    type: LOUGOUT_USER,
    payload: data,
  };
}
  
  export function registerUser(dataToSubmit) {
    const data = request("post", USER_URL + "/register", dataToSubmit);
  
    return {
      type: REGISTER_USER,
      payload: data,
    };
  }
  
  export function auth() {
    const data = request("post", "/check");
  
    return {
      type: AUTH_USER,
      payload: data,
    };
  }