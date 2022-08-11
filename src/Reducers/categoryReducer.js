import { categoryContants } from "../Actions/constants";

const initialState = { categories: [], loading: false, error: null };

const categoryReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case categoryContants.GETALLCATE_REQUEST:
            state = { ...state, loading: true }
            break;

        case categoryContants.GETALLCATE_SUCCESS:
            state = { ...state, loading: false, categories: action.payload.message }
            break;

        case categoryContants.GETALLCATE_FAIL:
            state = { ...state, loading: false, error: action.payload.error }
            break;

        case categoryContants.ADDCATE_REQUEST:
            state = { ...state, loading: true }
            break;

        case categoryContants.ADDCATE_SUCCESS:
            state = { ...state, loading: false, categories: action.payload.message }
            break;

        case categoryContants.ADDCATE_FAIL:
            state = { ...state, loading: false, error: action.payload.error }
            break;

        default:
            break;
    }
    return state
}

export default categoryReducer