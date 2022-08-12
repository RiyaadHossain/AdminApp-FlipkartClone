import axiosAPI from "../Helpers/axios"
import { productContants } from "./constants"

export const addProduct = () => {
    return async dispatch => {

        dispatch({ type: productContants.ADDPRODUCT_REQUEST })

        const res = await axiosAPI.post("")

        if (res.status === 200) {
            dispatch({ type: productContants.ADDPRODUCT_SUCCESS, payload: {} })
        } else {
            dispatch({ type: productContants.ADDPRODUCT_FAIL, payload: {} })
        }
    }
}