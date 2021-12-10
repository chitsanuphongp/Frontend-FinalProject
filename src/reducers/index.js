import { combineReducers } from "redux";
import { userReducer } from "../reducers/userReducer.js";
import { PrizecheckReducer } from "../reducers/PrizecheckReducer.js";

const rootReducer = combineReducers({
    user: userReducer,
    checkprize: PrizecheckReducer,
});

export default rootReducer