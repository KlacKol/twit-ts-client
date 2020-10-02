import {takeLatest, put, call} from 'redux-saga/effects'

import {TWIT_CREATE_NEW_POST, TWIT_START_LOAD} from "../actionTypes";
import {twitSuccessCreatePost, twitSuccessGet} from "./action";
import {twitCreatePost, twitGetPostsUser} from "../../services/PostService";

// GET ALL POSTS
function* takeWorker() {
    const data = yield call(twitGetPostsUser)
    yield put(twitSuccessGet(data))
}

export function* takePostsUser() {
    yield takeLatest(TWIT_START_LOAD, takeWorker)
}


// POST
function* saveWorker(action: any) {
    const data = yield call(twitCreatePost, action.post_saga)
    yield put(twitSuccessCreatePost(data))
}

export function* savePost() {
    yield takeLatest(TWIT_CREATE_NEW_POST, saveWorker)
}