require("./selecting-a-movie.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { MoviePickerActionCreator } from "./movie-picker.actions";

@Component({
    templateUrl: "wwwroot/movie-picker/selecting-a-movie.component.html",
    styleUrls: ["wwwroot/movie-picker/selecting-a-movie.component.css"],
    selector: "selecting-a-movie",
    providers: ["moviePickerActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectingAMovieComponent {
    constructor(private moviePickerActionCreator: MoviePickerActionCreator) { }

}