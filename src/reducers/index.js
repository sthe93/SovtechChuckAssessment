import {combineReducers} from 'redux'
import getCategories from './categoryReducer'
import getRandomJoke from './jokesReducer'

//root reducer
export default combineReducers({
    getCategories:getCategories,
    getRandomJoke:getRandomJoke
})