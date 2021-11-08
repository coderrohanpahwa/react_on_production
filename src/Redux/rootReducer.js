// all reducers should be combined here before the use

import { combineReducers } from "redux";
import  UserReducer  from "./User/UserReducer";

const rootReducer = combineReducers({
    User : UserReducer
})

export default rootReducer;