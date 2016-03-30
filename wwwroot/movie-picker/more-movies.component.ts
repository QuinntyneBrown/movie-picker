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

        if (state.movie) {
            this.currentId = state.movie.id;
            
        } else {

        }
        
        this.movies = [this.empty];

        state.movies
            .filter((movie: Movie) => !movie.priority)
            .sort((a: Movie, b: Movie) => {
                return a.name.localeCompare(b.name);
            })
            .forEach(movie => this.movies.push(movie));

        if (!state.movie || state.movie.id || state.movie.id == 0)
            this.selected = this.empty;

        if (this.selected && (state.movie && this.selected.id != state.movie.id))
            this.selected = this.empty;
    }

    onSelectionChange = (movie: Movie) => {
        this.moviePickerActionCreator.select({ entity: movie });
        this.selected = movie;
    };

    selected: Movie;
    empty: Movie;
    currentId: number;
    movies: Array<Movie> = [];
}