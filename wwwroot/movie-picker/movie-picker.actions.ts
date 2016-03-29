import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class MoviePickerActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, moviePickerService, guid) {
        super($location,moviePickerService,dispatcher,guid,AddOrUpdateMoviePickerAction,AllMoviePickersAction,RemoveMoviePickerAction,SetCurrentMoviePickerAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateMoviePickerSuccessAction(options.entity));

	currentMoviePickerRemoved = () => this.dispatcher.dispatch(new CurrentMoviePickerRemovedAction());
}


export class AddOrUpdateMoviePickerAction { constructor(public id, public entity) { } }

export class AllMoviePickersAction { constructor(public id, public entities) { } }

export class RemoveMoviePickerAction { constructor(public id, public entity) { } }

export class MoviePickersFilterAction { constructor(public id, public term) { } }

export class SetCurrentMoviePickerAction { constructor(public entity) { } }

export class AddOrUpdateMoviePickerSuccessAction { constructor(public entity) { } }

export class CurrentMoviePickerRemovedAction { constructor() { } }
