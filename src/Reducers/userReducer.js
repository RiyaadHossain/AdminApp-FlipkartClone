import { userContants } from "../Actions/constants";

const initialState = { loading: false, error: null, message: "" };

const userReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case userContants.SIGNUP_REQUEST:
            state = {
                ...state,
                loading: true
            };

            break;
        case userContants.SIGNUP_SUCCESS:
            const { message } = action.payload
            state = {
                ...state,
                message,
                loading: false
            };
            break;
        case userContants.SIGNUP_FAIL:
            const { error } = action.payload
            state = {
                ...state,
                error,
                loading: false
            }
            break
        default:
            state = initialState;
    }
    return state;
};
export default userReducer;
