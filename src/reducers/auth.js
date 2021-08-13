import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOUGOUT_USER } from "../actions/ActionTypes";

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, login: true };
    case LOUGOUT_USER:
      return { ...state, login: false };
    case REGISTER_USER:
      return { ...state, success: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}