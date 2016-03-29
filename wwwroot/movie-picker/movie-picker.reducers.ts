import * as actions from "./movie-picker.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeMoviePickerReducer = (state, action) => {
    if (action instanceof actions.RemoveMoviePickerAction)
        pluckOut({ items: state.moviePickers, value: action.entity.id });
    return state;
}

export const addMoviePickerReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateMoviePickerAction) {
        addOrUpdate({ items: state.moviePickers, item: action.entity });
    }
    return state;
}

export const allMoviePickersReducer = (state, action) => {
    if (action instanceof actions.AllMoviePickersAction) {
        state.moviePickers = action.entities;
    }
    return state;
}

export const setCurrentMoviePickerReducer = (state, action) => {
    if (action instanceof actions.SetCurrentMoviePickerAction) {
        state.currentMoviePickerId = action.id;
    }
    return state;
}
