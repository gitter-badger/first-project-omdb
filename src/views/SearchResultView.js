
/**
 * Пошукова форма
 */
class SearchResultView{
    constructor(options) {
        super(options);

        //ToDo: ініціалізувати елементи DOM та event listeners
        
//ориентируясь на пример сайдбара
//сначала получаем данные из формы поиска
//данные в eventData
//делаем публикацию на поиск из полученных данных
//подписываемся на него и отправляем запрос на сервер
        
        /*udate April 8, 
        по сути сам поиск особо не будет отличаться от сайдбара
        ведь так?
        */
        this.pubsub = options.pubsub;
        this.el = document.getElementById("top-search");
        this.el.addEventListener("submit", event => this.onFormSubmit(event));
        this.pubsub.subscribe('user.search.start',function(context, data){
           /*udate April 8, 
                тут мы должна отправить данные из полученной eventData на сервер
                как это сделать?
                я пока не очень понимаю
                так как ниже это ок?
           */ 
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "http://www.omdbapi.com/?", false);
            xhr.send();
            /*udate April 8, 
                выше отправляется запрос
                вопрос как получить ответ
                и как и куда его сохранить?
            */
        });
    }
    onFormSubmit(event) {
        var title = document.getElementById("top-search-title").value,
            year = document.getElementById("top-search-year").value,
            type = document.getElementById("top-search-type").value,
            eventData = {
                Title: title,
                Year: year,
                Type: type 
            };
        event.preventDefault();
        this.pubsub.publish('user.search.start', null, eventData);
    }
    /**
     * Оновлює DOM відповідно до моделі Movies
     */
    render(){
        //ToDo: реалізація
        
//из полученных данных отрисовываем карточки с 
//совпавшими данными
//например при вбиваении в поиск Star
//должно быть как минимум 2 результата поиска
//Star Wars, Star Trek
//и так далее
        
        /*update April 8, 
            реализацию отрисовывания карточек фильмов
            думаю можно начать когда будет готова моделька фильма Movie.js
        */
        
    }
}
export {SearchResultView}
