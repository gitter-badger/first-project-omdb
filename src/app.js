import {MovieDetailsView} from './views/MovieDetailsView.js';
import {SearchFormView} from './views/SearchFormView.js';
import {SearchResultView} from './views/SearchResultView.js';
import {LastMoviesView} from './views/LastMoviesView.js';
import {SidebarSearchFormView} from './views/SidebarSearchFormView.js';
import {LastSearchesView} from './views/LastSearchesView.js';
import {TrailerView} from './views/TrailerView.js';

var pubsub = Pubsub.create();

(function () {
    let lastMoviesView = new LastMoviesView({
            pubsub: pubsub
        }),
        sidebarSearchFormView = new SidebarSearchFormView({
            pubsub: pubsub
        });

    //ToDo: реалізація - пізніше
}());

