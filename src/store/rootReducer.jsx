import { combineReducers } from "redux";
import AuthReducer from '../redux/reducer/authReducer';
import UserReducer from "../redux/reducer/userReducer";
import StudentReducer from "../redux/reducer/studentReducer";

const RootReducer = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
    student: StudentReducer,
});

export default RootReducer;
