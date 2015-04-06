/**
 * Created by Valentyn on 4/5/15.
 */

/**
 * Так як кожен робитиме своє, то жоден компонент у компонентів не буде спільних суперкласів
 * Все треба реалізувати самому - і fetch() в тому числі.
 * Тим більше що че не запит до АРІ, а отримання даних з LocalStorage
 */
class LastMoviesView {
    constructor(options) {
        //в конструкторі ініціалізуємо всі початкові параметри
        super(options);

        //тепер pubsub доступний як локальна змінна через this.pubsub
        this.pubsub = options.pubsub;

        //зніходимо і запам’ятовуємо елемент віджета
        this.el = document.getElementById("last-movies");

        //ініціалізуємо локальні змінні - мисиви та ін.
        this.lastMovies = [];
        this.lastMovie = null;

        //тут краще підписатися на подію перегляду фільму
        this.pubsub.subscribe('user.details.show', this.onMovieDetailsShow);

        //зчитуємо збережені фільми з localstorage
        this.fetch();

        //показуємо список
        this.render();
    }

    /**
     * Виконується коли юзер хоче переглянути деталі фільму.
     * Тут треба додати цей фільм в останні переглянути і, якщо треба обрізати масив до 5-ти елементів.
     * Потім останні фільми треба зберегти функцією this.save
     * @param context
     * @param data
     */
    onMovieDetailsShow(context, data) {
        //ToDo: реалізація за вами
    }

    /**
     * Функція зчитує останні фільми з LocalStorage в this.lastMovies
     */
    fetch() {
        //ToDo: реалізація за вами
    }

    /**
     * Записує останні фільми this.lastMovies в LocalStorage
     */
    save() {
        //ToDo: реалізація за вами
    }

    /**
     * Виводить список фільмів в this.el
     */
    render() {
        //ToDo: реалізація за вами
    }


    //код, що нижче треба розподілити по функціям вище і видалити
    /*lastMovie = super.fetch();

    static lastFetchedMovies() {

        if (lastMovie != super.fetch()) { // super.fetch() -- просмотренные фильмы
            lastMovies = lastMovies.unshift(super.options.movieName);

            pubsub.subscribe('fetched.movie', function (context, options) {
                if (window.localStorage) {
                    window.localStorage.setItem('receivedData', JSON.stringify(options.movieName));
                }
                document.getElementById('lastFetchedMoviesContainer').innerHTML = options.movieName + '</br>';
            });

            if (lastMovies.length > 5) {
                lastMovies.pop()
            }
        }

    }*/
}
export {LastMoviesView}