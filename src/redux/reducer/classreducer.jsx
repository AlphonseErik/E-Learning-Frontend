import { GET_CLASS_LIST } from "../action/type";


let initialState = {
    classList: null
}

const ClassReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CLASS_LIST: {
            state.classList = payload;
            return { ...state};
        }
        default:
            return state;
    }
}

export default ClassReducer;
