import thunk from "redux-thunk";
const { rootReducer } = require("../Reducers");
const { createStore, applyMiddleware } = require("redux");

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
