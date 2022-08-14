import axiosAPI from "../Helpers/axios"
import { productContants } from "./constants"

const getProducts = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: productContants.GETPRODUCT_REQUEST });
        const res = await axiosAPI.get(`product/getProduct`);
        if (res.status === 200) {
            const { products } = res.data;
            console.log(res.data.products)
          dispatch({
            type: productContants.GETPRODUCT_SUCCESS,
            payload: { products },
          });
        } else {
          dispatch({ type: productContants.GETPRODUCT_FAIL });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

export const addProduct = (form) => {
    return async dispatch => {

        dispatch({ type: productContants.ADDPRODUCT_REQUEST })

        const res = await axiosAPI.post("product/addProduct", form)
        console.log(res)
        if (res.status === 200) {
            dispatch({ type: productContants.ADDPRODUCT_SUCCESS })
            dispatch(getProducts())
        } else {
            dispatch({ type: productContants.ADDPRODUCT_FAIL, payload: {} })
        }
    }
}