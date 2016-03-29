require("./watch-movie.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { MoviePickerActionCreator } from "./movie-picker.actions";

@Component({
    templateUrl: "wwwroot/watch-movie/watch-movie.component.html",
    styleUrls: ["wwwroot/watch-movie/watch-movie.component.css"],
    selector: "movie-picker",
    providers: ["moviePickerActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchMovieComponent {
    constructor(private moviePickerActionCreator: MoviePickerActionCreator) { }

}