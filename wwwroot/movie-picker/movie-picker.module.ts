require("../core/core.module");

import { MoviePickerComponent } from "./movie-picker.component";
import { MoviePickerContainerComponent } from "./movie-picker-container.component";
import { MoreMoviesComponent } from "./more-movies.component";
import { MovieOverlayComponent } from "./movie-overlay.component";
import { MovieComponent } from "./movie.component";
import { WatchMovieComponent } from "./watch-movie.component";
import { MovieOverlayService } from "./movie-overlay-service";


import { MoviePickerActionCreator } from "./movie-picker.actions";
import { MoviePickerService } from "./movie-picker.service";
import *  as reducers from "./movie-picker.reducers";

var app = (<any>angular.module("app.moviePicker", [
    "app.core"    
]));

app.service("moviePickerActionCreator",["$location","dispatcher","moviePickerService","guid",MoviePickerActionCreator]);
app.service("moviePickerService", ["$q", "apiEndpoint", "fetch", MoviePickerService]);
app.service("movieOverlayService", ["$compile", "$q", "$rootScope", "", MovieOverlayService]);

app.component(MoviePickerComponent);
app.component(MoviePickerContainerComponent);
app.component(MoreMoviesComponent);
app.component(MovieOverlayComponent);
app.component(MovieComponent);
app.component(WatchMovieComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
