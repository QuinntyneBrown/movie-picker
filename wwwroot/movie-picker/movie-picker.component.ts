require("./movie-picker.component.css");

import { Movie } from "./movie.model";
import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { MoviePickerActionCreator } from "./movie-picker.actions";

@Component({
    templateUrl: "wwwroot/movie-picker/movie-picker.component.html",
	styleUrls: ["wwwroot/movie-picker/movie-picker.component.css"],
    selector: "movie-picker",
    providers: ["moviePickerActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviePickerComponent {
    constructor(private moviePickerActionCreator: MoviePickerActionCreator) { }

    storeOnChange = state => this.movies = state.movies
        .filter((movie: Movie) => movie.priority)
        .sort((a: Movie, b: Movie) => a.priority - b.priority);
    
    ngOnInit = () => this.moviePickerActionCreator.all();

    selectMovie = () => { }
  
    movies: Array<Movie> = [];
}
