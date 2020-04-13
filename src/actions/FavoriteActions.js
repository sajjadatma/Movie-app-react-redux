import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, } from "./types";

export const addToFavorite = (id) => (dispatch) => {
  dispatch({
    type: ADD_TO_FAVORITES,
    payload: id
  });
};

export const removeFromFavorite = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  });
};
