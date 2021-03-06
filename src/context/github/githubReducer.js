import {
    SEARCH_USERS,
    CLEAR_USERS,
    SET_LOADING
} from '../types';

export default (state,action) => {
    switch(action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            }
        default:
            return state; 
    }
}