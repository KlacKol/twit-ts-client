import {call, put, takeLatest} from "redux-saga/effects";
import {apiLogin, apiRegistration} from "../../services/AuthService";
import {AUTH_LOGIN_WATCHER, AUTH_REGISTRATION_WATCHER} from "../actionTypes";
import {authSuccessLogin, authSuccessRegistration} from "./action";
import {setToken} from "../../services/LocalStorageService";


function* loginWorker(action: any) {
    const data = yield call(apiLogin, action.user_login);
    setToken(data.accessToken);
    yield put(authSuccessLogin(data));
}

export function* loginWatcher() {
    yield takeLatest(AUTH_LOGIN_WATCHER, loginWorker)
}

function* registrationWorker(action: any) {
    console.log(action)
    const data = yield call(apiRegistration, action.user_registration)
    yield put(authSuccessRegistration(data))
}

export function* registrationWatcher() {
    yield takeLatest(AUTH_REGISTRATION_WATCHER, registrationWorker)
}