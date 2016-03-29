require("./more-movies.component.css");

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
    constructor(private moviePickerActionCreator: MoviePickerActionCreator) { }

    stateOnChange = state => {

    }

}