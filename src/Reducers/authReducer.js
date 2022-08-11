import { authContants } from "../Actions/constants";

const initialState = { token: null, user: {}, authenticating: false, authticated: false, error: null, message: "", loading: false };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authContants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true
      };

      break;
    case authContants.LOGIN_SUCCESS:
      const { token, user } = action.payload
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
    case authContants.LOGOUT_REQUEST:
      state = {
        ...state,
        message: "Logging Out...",
        loading: true
      }
      break;
    case authContants.LOGOUT_SUCCESS:
      console.log(action);
      state = {
        ...state,
        message: action.payload.message,
        loading: false
      }
      break;
    case authContants.LOGOUT_FAIL:
      state = {
        ...state,
        error: action.payload.error,
        loading: false
      }
      break;
    default:
      state = initialState;
      break
  }
  return state;
};
export default authReducer;
