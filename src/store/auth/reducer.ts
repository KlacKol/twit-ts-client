import {AUTH_LOGIN_SUCCESS, AUTH_LOGOUT} from "../actionTypes";
import {getToken} from "../../services/LocalStorageService";

let user = getToken();
const initialState = user ? {
    data: user,
    loggedIn: true
} : {
    data: {},
    loggedIn: false
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case AUTH_LOGIN_SUCCESS: {
            return {
                ...state,
                data: action.user
            }
        }
        case AUTH_LOGOUT: {
            return {
                ...state,
                data: {},
                loggedIn: false
            }
        }
        default:
            return state
    }
}