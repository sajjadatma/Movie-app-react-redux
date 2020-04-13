import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import FavoriteReducer from './FavoriteReducer'

export default combineReducers({
  movies: searchReducer,
  favorites:FavoriteReducer
});
