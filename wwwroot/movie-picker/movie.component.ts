require("./movie.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { MoviePickerActionCreator } from "./movie-picker.actions";

@Component({
    templateUrl: "wwwroot/movie/movie.component.html",
    styleUrls: ["wwwroot/movie/movie.component.css"],
    selector: "movie-picker",
    providers: ["movieActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent {
    constructor(private moviePickerActionCreator: MoviePickerActionCreator) { }

}