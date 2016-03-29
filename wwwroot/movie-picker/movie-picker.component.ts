require("./movie-picker.component.css");

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

    stateOnChange = state => this.movies = state.movies;
    
    ngOnInit = () => this.moviePickerActionCreator.all();

    selectMovie = () => { }
  
    movies: Array<any> = [];
}
