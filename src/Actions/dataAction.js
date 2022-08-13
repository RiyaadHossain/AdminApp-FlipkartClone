import axiosAPI from "../Helpers/axios"
import { dataContants } from "./constants"

export const getAllData = () => {
    return async dispatch => {
        dispatch({ type: dataContants.DATA_REQUEST })
        const category = await axiosAPI.get("category/getCategory")
        const product = await axiosAPI.get("product/getProduct")
        if (category.status === 200) dispatch({ type: dataContants })
        console.log(product)
    }
} 