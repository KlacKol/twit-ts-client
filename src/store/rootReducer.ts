import {combineReducers} from 'redux';

import twitReducer from './home/reducer'

export default combineReducers({
    twit: twitReducer
})