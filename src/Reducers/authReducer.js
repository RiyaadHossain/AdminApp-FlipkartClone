import { authContants } from "../Actions/constants";

const initialState = { token: null, user: {} };

const authReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case authContants.LOGIN_REQUEST:
      state = {
        ...state,
        ...action.payload,
      };

      break;
    default:
      state = "Hello";
  }
  return state;
};
export default authReducer;
