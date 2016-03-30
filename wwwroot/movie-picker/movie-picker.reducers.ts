import * as actions from "./movie-picker.actions";

export const allMoviesReducer = (state, action) => {
    if (action instanceof actions.AllMoviesAction) {        
        state.movies = action.entities;
    }
    return state;
}

export const selectMovieReducer = (state, action) => {
    if (action instanceof actions.SelectMovieAction) {
        state.movie = action.entity;
    }
    return state;
}
