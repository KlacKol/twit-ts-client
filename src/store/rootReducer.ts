import {combineReducers} from 'redux';

import twitReducer from './home/reducer'
import userReducer from './auth/reducer'

export default combineReducers({
    user: userReducer,
    twit: twitReducer
})