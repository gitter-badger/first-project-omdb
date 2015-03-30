import {Movies} from './model/Movies';
import {Movie} from './model/Movie';
import {MovieView} from './views/MovieView.js';
import {SearchFormView} from './views/SearchFormView.js';

global.app = function () {
    let movie = new Movie(),
        movies = new Movies(),
        searchFormView = new SearchFormView(),
        movieView = new MovieView();

    //ToDo: реалізація - пізніше
};