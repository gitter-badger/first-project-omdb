/**
 * Пошукова форма на боковій панелі
 */
class SidebarSearchFormView {

    /**
     * Всю ініціалізацію початкових значень змінних і підписку на події краще робити в конструкторі
     * @param options
     */
    constructor(options) {
        super(options);

        //тепер pubsub доступний як локальна змінна через this.pubsub
        this.pubsub = options.pubsub;

        //знаходимо і запам’ятовуємо елемент віджета
        this.el = document.getElementById("sidebar-search-form");
        //тут використовуються id елементів
        //перевірте чи є у вашого віджета id - поставте якщо немає
        //назву бажано вибирати відповідно до назви віджета

        //підписуємось на сабміт форми (this.el в даному випадку вказує саме на форму)
        //тут використовуэться скорочений формат анонімної функції ES6
        //це дуже зручно, бо контекст this залишається той самий
        //а не зміюється на window, як це завжди буває при обробці подій DOM;
        //якщо пояснення не зрозуміле - просто так і підписуйтесь на події DOM у своїх віджетах
        this.el.addEventListener("submit", event => this.onFormSubmit(event));

        //тестова підписка на початок пошуку - просто для перевірки роботи віджета
        this.pubsub.subscribe('user.search.start', function (context, data) {
            console.log(`Start search film with title '${data.Title}', year ${data.Year}, type ${data.Type}`);
        });
    }

    /**
     * Хендлер для сабміту форми - подія, при якій дані форми відправляються на сервер
     */
    onFormSubmit(event) {
        //отримуємо з інпутів всі параметри пошуку
        let title = document.getElementById("sidebar-search-form-title").value,
            year = document.getElementById("sidebar-search-form-year").value,
            type = document.getElementById("sidebar-search-form-type").value,
            eventData = {
                Title: title, // назва фільму
                Year: year, // рік випуску
                Type: type // movie, series або episode
            };

        //Необхідно викликати. якщо обробляємо відправку форми аяксом
        //інакше форма будевідправлена і сторінка перезавантажиться
        event.preventDefault();

        //генеруємо event і передаємо параметри пошуку
        this.pubsub.publish('user.search.start', null, eventData);
    }

}
export {SidebarSearchFormView}
