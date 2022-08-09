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
      const { token, user } = res.data
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

export const logout = () => {
  return async dispatch => {
    dispatch({
      type: authContants.LOGOUT_REQUEST
    })
  }
}

export const isLoggedIn = () => {
  return async dispatch => {
    const token = localStorage.getItem("token")
    const user = JSON.parse(localStorage.getItem("user"))
    if (token) {
      dispatch({
        type: authContants.LOGIN_SUCCESS,
        payload: { user, token },
      });
    } else {
      dispatch({
        type: authContants.LOGIN_FAIL,
        payload: { error: "User need to Login" },
      });
    }
  }
}
