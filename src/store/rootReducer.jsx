import { combineReducers } from "redux";
import AuthReducer from '../redux/reducer/authReducer';
import UserReducer from "../redux/reducer/userReducer";

const RootReducer = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
});

export default RootReducer;
