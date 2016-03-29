require("./movie.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { MoviePickerActionCreator } from "./movie-picker.actions";

@Component({
    templateUrl: "wwwroot/movie-picker/movie.component.html",
    styleUrls: ["wwwroot/movie-picker/movie.component.css"],
    selector: "movie",
    providers: ["movieActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent {
    constructor(private moviePickerActionCreator: MoviePickerActionCreator) { }

}