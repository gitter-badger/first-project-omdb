/**
 * Created by Valentyn on 4/5/15.
 */
import {Movies, pubsub} from '../app.js'; // метод import в es6 позволяет импортировать объекты из других скриптов (как и скрипты целиком)


class ViewedMoviesHistory extend Movies { // ViewedMoviesHistory наследуется от Movies
    constructor(options) {
        super(options);
    }

    let lastMovies = [], lastMovie;

    lastMovie = super.fetch();
    static lastFetchedMovies() {

        if(lastMovie != super.fetch()) { // super.fetch() -- просмотренные фильмы
            lastMovies = lastMovies.unshift(super.options.movieName);

            pubsub.subscribe('fetched.movie', function(context, options) {
                if(window.localStorage) {
                    window.localStorage.setItem('receivedData', JSON.stringify(options.movieName));
                }
                document.getElementById('lastFetchedMoviesContainer').innerHTML = options.movieName + '</br>';
            });

            if(lastMovies.length > 5) {
                lastMovies.pop()
            }
        }

    }
}
export {ViewedMoviesHistory}