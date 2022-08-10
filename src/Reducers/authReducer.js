import { authContants } from "../Actions/constants";

const initialState = { token: null, user: {}, authenticating: false, authticated: false };

const authReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case authContants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true
      };

      break;
    case authContants.LOGIN_SUCCESS:
      const {token, user} = action.payload
      state = {
        ...state,
        token,
        user: user,
        authenticating: false,
        authticated: true
      };
      break;
    case authContants.LOGIN_FAIL:
      state = {
        ...state,
        authticated: false
      }
      break;
    default:
      state = initialState;
  }
  return state;
};
export default authReducer;
