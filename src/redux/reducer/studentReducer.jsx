import { GET_STUDENT_LIST } from "../action/type";


let initialState = {
    studentList: null
}

const StudentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_STUDENT_LIST: {
            state.studentList = payload;
            return { ...state};
        }
        default:
            return state;
    }
}

export default StudentReducer;
