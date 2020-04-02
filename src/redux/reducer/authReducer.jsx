import { LOGOUT, SIGNIN } from "../action/type";


let initialState = {
    credentials: null,
    isLogin: false
}

const AuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGNIN: {
            state.credentials = payload;
            return { ...state, isLogin: true };
        }
        case LOGOUT: {
            state = {
                credentials: null,
            }
            return { ...state, isLogin: false };
        }
        default:
            return state;
    }
}

export default AuthReducer;
