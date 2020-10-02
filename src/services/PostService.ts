import axios from 'axios'
import {PostModel} from "../shared/models";



const api = process.env.REACT_APP_API_URL + '/post';

export const twitCreatePost = async (post: PostModel) => {
    return await axios.post(api, post).then(res => res.data);
}

export const twitGetPostsUser = async () => {
    return await axios.get(api).then(res => res.data)
}