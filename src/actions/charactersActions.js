import axios from 'axios';

export const FETCH_CHAR_DATA_START = 'FETCH_CHAR_DATA_START';
export const FETCH_CHAR_DATA_SUCCESS = 'FETCH_CHAR_DATA_SUCCESS';
export const FETCH_CHAR_DATA_FAILURE = 'FETCH_CHAR_DATA_FAILURE';

//Action Creator with asynchronous actions
//https://rickandmortyapi.com/api/character/
export const getData = () => {
    return dispatch => {
        dispatch({ type:'FETCH_CHAR_DATA_START' });
        axios.get('')
        .then(res => {
            //res.data
            dispatch({ type:'FETCH_CHAR_DATA_SUCCESS', payload: res.data.results});
            console.log('res success', res)
            })
        .catch(err => {
            dispatch({ type:'FETCH_CHAR_DATA_FAILURE', payload: err.response });
            console.log('error', err)
        });

    };
};