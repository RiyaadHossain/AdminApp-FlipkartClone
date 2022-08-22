import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const { rootReducer } = require("../Reducers");
const { createStore, applyMiddleware } = require("redux");

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
