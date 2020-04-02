import { combineReducers } from "redux";
import AuthReducer from './authReducer';

const RootReducer = combineReducers({
    auth: AuthReducer
});

export default RootReducer;
