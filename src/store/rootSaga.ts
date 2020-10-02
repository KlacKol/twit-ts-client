import {all} from 'redux-saga/effects'
import {savePost, takePostsUser} from "./home/saga";
import {loginWatcher, registrationWatcher} from "./auth/saga";

export default function* rootSaga() {
    yield all([
        takePostsUser(),
        savePost(),
        loginWatcher(),
        registrationWatcher(),
    ])
}