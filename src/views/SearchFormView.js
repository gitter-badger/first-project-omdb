
/**
 * Пошукова форма
 */
class SearchFormView {
    constructor(options) {
        super(options);
 this.pubsub = options.pubsub
 this.el = document.getElementById("search-form");
 this.el.addEventListener('submit', event => this.onFormSubmit(event)); 
        //ToDo: ініціалізувати елементи DOM та event listeners
 this.pubsub.subscribe('user.search.start', function(context, data){
 	console.log(`Start search film with title '${data.Title}', year ${data.Year}, type ${data.Type}`);
 });    
    }
    onFormSubmit(event){
    	let title = document.getElementById('top-search-title').value,
    	year = document.getElementById("top-search-from-year").value,
    	type = document.getElementById("top-search-from-type").value,
    	eventData = {
    		Title: title,
    		Year: year,
    		Type: type
    	};
    	event.preventDefault();
    	this.pubsub.publish('user.search.start', null, eventData);
    }
}
export {SearchFormView}
