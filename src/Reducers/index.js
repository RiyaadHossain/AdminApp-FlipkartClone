import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import dataReducer from "./dataReducer";
import orderReducer from "./orderReducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  order: orderReducer,
  product: productReducer,
  data: dataReducer
});
