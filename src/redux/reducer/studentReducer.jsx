import { GET_STUDENT_LIST } from "../action/type";


let initialState = {}

const StudentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_STUDENT_LIST: {
            state = payload;
            return { ...state};
        }
        default:
            return state;
    }
}

export default StudentReducer;
