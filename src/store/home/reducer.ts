import {TWIT_SUCCESS_CREATE_POST, TWIT_SUCCESS_GET} from "../actionTypes";


const initialState = {
    posts: []
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case TWIT_SUCCESS_GET: {
            return {
                ...state,
                posts: action.posts
            };
        }
        case TWIT_SUCCESS_CREATE_POST: {
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        }
        default:
            return state;
    }
};