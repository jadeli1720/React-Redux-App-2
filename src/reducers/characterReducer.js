import { 
        FETCH_CHAR_DATA_START,
        FETCH_CHAR_DATA_SUCCESS,
        // FETCH_CHAR_DATA_FAILURE
 } from '../actions'

const initialState = {
    characters: [],
    isLoading: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHAR_DATA_START:
            return {
                ...state,
                isLoading:true,
                error: ''
            };
        case FETCH_CHAR_DATA_SUCCESS:
            return {
                ...state,
                isLoading:false,
                characters: action.payload,
                error: ''  
            };
        default:
            return state;
    }
}