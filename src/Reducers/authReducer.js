import { authContants } from "../Actions/constants";

const initialState = { name: "Riyad" };

const authReducer = (state = initialState, action) => {
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
