require("./more-movies.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { MoviePickerActionCreator } from "./movie-picker.actions";

@Component({
    templateUrl: "wwwroot/more-movies/more-movies.component.html",
    styleUrls: ["wwwroot/more-movies/more-movies.component.css"],
    selector: "movie-picker",
    providers: ["moviePickerActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoreMoviesComponent {
    constructor(private moviePickerActionCreator: MoviePickerActionCreator) { }

}