import axiosAPI from "../Helpers/axios";
import { authContants } from "./constants";

export const login = (user) => {
  return async (dispatch) => {
    const res = await axiosAPI.post("/user/signin", {
      ...user
    })
    console.log(res)
    dispatch({
      type: authContants.LOGIN_REQUEST,
      payload: { ...user },
    });

  };
};
