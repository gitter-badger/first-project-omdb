import {Movies} from './model/Movies';
import {Movie} from './model/Movie';
import {MovieView} from './views/MovieView.js';
import {SearchFormView} from './views/SearchFormView.js';
import {SearchResultView} from './views/SearchResultView.js';

global.app = function () {
    let movie = new Movie(),
        movies = new Movies(),
        searchFormView = new SearchFormView(),
        movieView = new MovieView(),
        searchResultView = new SearchResultView();

    //ToDo: реалізація - пізніше
};