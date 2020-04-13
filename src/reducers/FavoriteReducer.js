import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, } from "../actions/types";

const initialState = {
  favorites: [],
}

export default (state = initialState,action) => { 
  switch (action.type) {
      case ADD_TO_FAVORITES:
          return {
              ...state,
            favorites: state.favorites.concat(action.payload),
      }  
      case REMOVE_FROM_FAVORITES:
        return {
            ...state,
          favorites: state.favorites.filter(result => result.id !== action.payload),
    }  
      default:
          return state;
  }
}