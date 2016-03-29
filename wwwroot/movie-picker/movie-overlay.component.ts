require("./movie-overlay.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { MoviePickerActionCreator } from "./movie-picker.actions";

@Component({
    templateUrl: "wwwroot/movie-overlay/movie-overlay.component.html",
    styleUrls: ["wwwroot/movie-overlay/movie-overlay.component.css"],
    selector: "movie-overlay",
    providers: ["moviePickerActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieOverlayComponent {
    constructor(private moviePickerActionCreator: MoviePickerActionCreator) { }

}