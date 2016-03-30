require("./more-movies.component.css");

import { Movie } from "./movie.model";
import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { MoviePickerActionCreator } from "./movie-picker.actions";

@Component({
    templateUrl: "wwwroot/movie-picker/more-movies.component.html",
    styleUrls: ["wwwroot/provider-picker/more-movies.component.css"],
    selector: "more-movies",
    providers: ["moviePickerActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoreMoviesComponent {
    constructor(private moviePickerActionCreator: MoviePickerActionCreator) {
        this.empty = new Movie();
        this.empty.name = "Choose a Movie";
        this.empty.id = 999;
    }

    storeOnChange = state => {
        this.currentId = state.currentId;
        this.movies = state.movies
            .filter((movie: Movie) => !movie.priority)
            .sort((a: Movie, b: Movie) => {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        if (!state.currentProviderId || state.currentProviderId == 0)
            this.selected = this.empty;

        if (this.selected && this.selected.id != state.currentProviderId)
            this.selected = this.empty;
    }

    onSelectionChange = (id: number) => this.moviePickerActionCreator.select(id);
    selected: Movie;
    empty: Movie;
    currentId: number;
    movies: Array<Movie> = [];
}