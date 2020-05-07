import { GET_TEACHER_LIST } from "../action/type";


let initialState = {
    teacherList: null
}

const TeacherReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TEACHER_LIST: {
            state.teacherList = payload;
            return { ...state};
        }
        default:
            return state;
    }
}

export default TeacherReducer;
