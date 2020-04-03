import { GET_USER_ID, GET_USER_PROFILE } from "../action/type";


let initialState = {
    userID: undefined,
    type: null,
    isSuperAdmin: undefined,
    userProfile: null,
}

const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER_ID: {
            // console.log(payload)
            if (payload.isSuperAdmin) {
                state.isSuperAdmin = payload.isSuperAdmin;
            }
            state.userID = payload.userID;
            state.type = payload.type;
            return { ...state };
        }
        case GET_USER_PROFILE: {
            // console.log(payload);
            state.userProfile = payload;
            return { ...state };
        }
        default:
            return state;
    }
}

export default UserReducer;