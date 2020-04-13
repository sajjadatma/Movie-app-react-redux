import axios from '../axios'
import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types';


export const searchMovie = text => dispatch =>{
    dispatch({
        type: SEARCH_MOVIE,
        payload:text
    })
} 

export const fetchMovies = (text,page) => dispatch => {
    axios.get(`/movies?q=${text}&page=${page}`)
        .then(response => dispatch({
            type: FETCH_MOVIES,
            payload: response.data.data,
            isExist: response.data.metadata,
            currentPage:response.data.metadata.current_page
    })).catch(err =>console.log(err))
}
export const fetchMovie = id => dispatch => {
    axios.get(`/movies/${id}`)
        .then(response => dispatch({
            type: FETCH_MOVIE,
            payload:response.data
    })).catch(err =>console.log(err))
}
export const setLoading = () => {
    return {
        type: LOADING,
    }
}
