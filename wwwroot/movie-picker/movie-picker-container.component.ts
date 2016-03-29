require("./movie-picker-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { MoviePickerActionCreator } from "./movie-picker.actions";

@Component({
    templateUrl: "wwwroot/movie-picker/movie-picker-container.component.html",
    styleUrls: ["wwwroot/movie-picker/movie-picker-container.component.css"],
    selector: "movie-picker-container",
    providers: ["moviePickerActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviePickerContainerComponent {
    constructor(private moviePickerActionCreator: MoviePickerActionCreator) { }

}
