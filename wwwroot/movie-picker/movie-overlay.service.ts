export class MovieOverlayService {

    constructor(
        private $compile: angular.ICompileService,
        private $q: angular.IQService,
        private $rootScope: angular.IRootScopeService,
        private $templateCache: angular.ITemplateCacheService,
        private store: any) {
        this.store.subscribe(state => this.storeOnChanges(state));
    }

    storeOnChanges = (state: any) => {
        this.movies = state.movies;
        this.currentMovieId = state.movie.id;
        if (state.movie.id) {
            this.openAsync();
        } else {
            this.closeAsync();
        }
    }

    initializeAsync = () => {
        var deferred = this.$q.defer();
        var self = this;
        this.$scope = this.$rootScope.$new();
        this.$scope.vm = { movie: this.movie };
        this.compileAsync()
            .then(() => self.extendCssAsync())
            .then(() => self.appendToBodyAsync())
            .then(() => {
                self.isOpen = true;
            });

    }

    openAsync = () => {
        if (!this.isOpen)
            this.initializeAsync();
    }

    closeAsync = () => {
        if (this.augmentedJQuery)
            this.augmentedJQuery.remove();

        this.isOpen = false;
    }

    compileAsync = () => {
        var deferred = this.$q.defer();
        this.augmentedJQuery = this.$compile(angular.element(this.htmlTemplate))(this.$scope);
        var scope = this.$scope;
        setTimeout(() => {
            scope.$digest();
            deferred.resolve();
        }, 100);
        return deferred.promise;
    }

    appendToBodyAsync = () => {
        var deferred = this.$q.defer();
        var providerPickerElement = document.querySelectorAll(".movie-picker")[0];
        providerPickerElement.appendChild(this.augmentedJQuery[0]);
        setTimeout(() => { deferred.resolve(); }, 100);
        return deferred.promise;
    }

    extendCssAsync = (options:any = null) => {
        return this.$q.when(angular.extend(this.augmentedJQuery[0].style, {
            "display": "block",
            "position": "absolute",
            "z-index": "999",
            "width": "100%",
            "padding": "0",
            "height": "100%",
            "background-color": "#FFF"
        }));
    }

    removeElement = options => {
        if (options.nativeHTMLElement) {
            var $target = angular.element(options.nativeHTMLElement);
            options.nativeHTMLElement.parentNode.removeChild(options.nativeHTMLElement);
            $target.remove();
            delete options.nativeHTMLElement;
        }
    }

    showAsync = () => this.extendCssAsync({
        nativeHTMLElement: this.nativeElement,
        cssObject: {
            "opacity": "100",
            "margin-top": "0px"
        }
    });

    $scope;
    isOpen;
    augmentedJQuery;
    nativeElement;
    movies;
    currentMovieId;


    get htmlTemplate() {
        return "<movie-overlay movie='vm.movie'></movie-overlay>";
    }

    get movie() {
        var movie = null;
        for (var i = 0; i < this.movies.length; i++) {
            if (this.movies[i].id === this.currentMovieId) {
                movie = this.movies[i];
            }
        }
        return movie;
    }
}