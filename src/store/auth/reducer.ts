import {AUTH_LOGIN_SUCCESS} from "../actionTypes";

const initialState = {
    user: {}
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case AUTH_LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.user
            }
        }
        default:
            return state
    }
}