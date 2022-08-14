import { productContants } from "../Actions/constants";

const initialState = { product: [], error: null };

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case productContants.GETPRODUCT_SUCCESS:
            state = {
                ...state,
                product: action.payload.products
            }
            break;
        default:
            break;
    }
    return state

}

export default productReducer