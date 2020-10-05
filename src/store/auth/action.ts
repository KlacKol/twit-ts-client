import {
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_WATCHER, AUTH_LOGOUT,
    AUTH_REGISTRATION_SUCCESS,
    AUTH_REGISTRATION_WATCHER
} from "../actionTypes";
import {AuthModelResponse, LoginModel, RegistrationModel} from "../../shared/models";
import {clearToken} from "../../services/LocalStorageService";

export  function authLogin(user_login: LoginModel) {
    return {
        type: AUTH_LOGIN_WATCHER,
        user_login
    }
}

export  function authSuccessLogin(user: AuthModelResponse) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        user
    }
}

export  function authRegistration(user_registration: RegistrationModel) {
    return {
        type: AUTH_REGISTRATION_WATCHER,
        user_registration
    }
}

export  function authSuccessRegistration(user: AuthModelResponse) {
    return {
        type: AUTH_REGISTRATION_SUCCESS,
        user
    }
}

export function logoutUser() {
    clearToken();
    return {
        type: AUTH_LOGOUT
    }
}