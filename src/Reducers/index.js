import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  order: orderReducer,
  product: productReducer
});
