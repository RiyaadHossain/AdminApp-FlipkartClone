import axiosAPI from "../Helpers/axios";
import { authContants } from "./constants";

export const login = (user) => {
  return async (dispatch) => {
    const res = await axiosAPI.post("/user/signin", {
      ...user
    })

    dispatch({
      type: authContants.LOGIN_REQUEST,
      payload: { ...user },
    });

    if (res.status === 200) {
      const { token, user} = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      dispatch({
        type: authContants.LOGIN_SUCCESS,
        payload: { user, token },
      });
    } else {
      dispatch({
        type: authContants.LOGIN_FAIL,
        payload: { error: res.data.error },
      });
    }

  };
};
