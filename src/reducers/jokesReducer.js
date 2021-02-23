import {GET_RANDOM_JOKE} from '../actions/types'

const initialState={
    random_joke:{}
}

//update random joke state
const getRandomJoke=function(state=initialState,action){

    switch(action.type){

        case GET_RANDOM_JOKE:
            return{
                ...state,
                random_joke:action.random_joke
            }
        
        default:
            return state
    }
}

export default getRandomJoke