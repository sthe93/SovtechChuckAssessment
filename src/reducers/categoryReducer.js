import {GET_CATEGORIES,ACTIVE_CATEGORY,GET_CATEGORY_JOKE,GET_RANDOM_JOKE} from '../actions/types';


const initialState={
    categories:[],
    activeCategory:"",
    joke:{}
}

// update global states associated with joke categories
const getCategories=function(state=initialState,action){
    
    switch(action.type){

        case GET_CATEGORIES:
            return{
                ...state,
                categories:action.categories
            }
        case ACTIVE_CATEGORY:
            return{
                ...state,
                activeCategory:action.category
            }
        case GET_CATEGORY_JOKE:
            return{
                ...state,
                joke:action.joke
            }
        default:
            return state
    }
}

export default getCategories