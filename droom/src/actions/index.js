import axios from 'axios'
export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const newMember = (thing) => dispatch => {
    dispatch({ type: FETCHING_START })
    axios.post('https://shrouded-taiga-50423.herokuapp.com/', thing)
        .then(res => {
            console.log('Response', res)
           
        })
        .catch(err => {
           console.log('Error', err)
        })
}