import axiosAPI from "../Helpers/axios"
import { categoryContants, dataContants, productContants } from "./constants"

export const getAllData = () => {
    return async dispatch => {
        dispatch({ type: dataContants.DATA_REQUEST })

        const res = await axiosAPI.get("data/initialData")

        if (res.status === 200) {
            // console.log(res);
            dispatch({ type: categoryContants.GETALLCATE_SUCCESS, payload: { message: res.data.category} })
            dispatch({ type: productContants.GETPRODUCT_SUCCESS, payload: { products: res.data.product } })

        } else {

        }

    }
} 