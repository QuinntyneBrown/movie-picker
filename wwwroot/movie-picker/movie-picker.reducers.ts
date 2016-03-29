import * as actions from "./movie-picker.actions";
import { addOrUpdate, pluckOut } from "../core";

export const allMoviePickersReducer = (state, action) => {
    if (action instanceof actions.AllMoviesAction) {        
        state.movies = action.entities;
    }
    return state;
}

