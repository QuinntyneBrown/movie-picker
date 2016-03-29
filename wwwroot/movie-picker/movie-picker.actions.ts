import { IDispatcher } from "../core/store";

export class MoviePickerActionCreator {
    constructor(private dispatcher: IDispatcher, private moviePickerService, private guid) { }    
    
    all = () => {
        var newId = this.guid();
        this.moviePickerService.get().then(results => {
            var action = new AllMoviesAction(newId, results);
            this.dispatcher.dispatch(action);
        });
        return newId;
    }
}



export class AllMoviesAction { constructor(public id, public entities) { } }

