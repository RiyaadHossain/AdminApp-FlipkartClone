import axiosAPI from "../Helpers/axios";
import { userContants } from "./constants";

export const signup = (user) => {

    return async (dispatch) => {
        dispatch({
            type: userContants.SIGNUP_REQUEST,
        });

        const res = await axiosAPI.post("/admin/signup", {
            ...user
        })
        console.log(res.data.message)
        if (res.status === 201) {
            const { message } = res.data
            dispatch({
                type: userContants.SIGNUP_SUCCESS,
                payload: { message },
            });
        } else {
            dispatch({
                type: userContants.SIGNUP_FAIL,
                payload: { error: res.data.error },
            });
        }

    };
};