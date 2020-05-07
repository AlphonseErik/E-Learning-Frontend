import { combineReducers } from "redux";
import AuthReducer from '../redux/reducer/authReducer';
import UserReducer from "../redux/reducer/userReducer";
import StudentReducer from "../redux/reducer/studentReducer";
import TeacherReducer from "../redux/reducer/teacherReducer";

const RootReducer = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
    student: StudentReducer,
    teacher: TeacherReducer,
});

export default RootReducer;
