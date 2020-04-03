import { combineReducers } from "redux";
import AuthReducer from './authReducer';
import UserReducer from "./userReducer";

const RootReducer = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
});

export default RootReducer;
