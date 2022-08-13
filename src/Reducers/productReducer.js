import { productContants } from "../Actions/constants";

const initialState = { product: [], error: null };

const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case productContants.ADDPRODUCT_REQUEST:
            state = { ...state, laoding: true }
            break;
        case productContants.ADDPRODUCT_SUCCESS:
            state = { ...state, product: action.payload.product }
            break;
        case productContants.ADDPRODUCT_FAIL:
            state = { ...initialState }
            break;
        default:
            break;
    }
    return state

}

export default productReducer