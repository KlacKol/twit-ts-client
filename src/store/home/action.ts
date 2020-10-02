import {TWIT_CREATE_NEW_POST, TWIT_START_LOAD, TWIT_SUCCESS_CREATE_POST, TWIT_SUCCESS_GET} from "../actionTypes";
import {PostModel, PostModelResponse} from "../../shared/models";

export  function twitSuccessGet(posts: any) {
    return {
        type: TWIT_SUCCESS_GET,
        posts
    }
}

export function loadPostsUser() {
    return {
        type: TWIT_START_LOAD
    }
}

export function createPost(post_saga: PostModel) {
    return {
        type: TWIT_CREATE_NEW_POST,
        post_saga
    }
}

export function twitSuccessCreatePost(post: PostModelResponse) {
    return {
        type: TWIT_SUCCESS_CREATE_POST,
        post
    }
}
