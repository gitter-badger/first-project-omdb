import {LastMoviesView} from './views/LastMoviesView.js';
import {SidebarSearchFormView} from './views/SidebarSearchFormView.js';
import {MovieDetailsView} from './views/MovieDetailsView.js';
import {SearchFormView} from './views/SearchFormView.js';
import {SearchResultView} from './views/SearchResultView.js';
import {LastSearchesView} from './views/LastSearchesView.js';
import {TrailerView} from './views/TrailerView.js';

var pubsub = Pubsub.create();

(function () {
    //додайте тут ініціалізацію свого модуля для початку розробки
    let lastMoviesView = new LastMoviesView({
            pubsub: pubsub
        }),
        sidebarSearchFormView = new SidebarSearchFormView({
            pubsub: pubsub
        }),
        movieDetailsView = new MovieDetailsView({
            pubsub: pubsub
        }),
        searchFormView = new SearchFormView({
            pubsub: pubsub
        }),
        searchResultView = new SearchResultView({
            pubsub: pubsub
        }),
        lastSearchesView = new LastSearchesView({
            pubsub: pubsub
        }),
        trailerView = new TrailerView({
            pubsub: pubsub
        });
}());

