import {View} from './View.js';
// import {Pubsub} from '././app.js';
/**
 * Пошукова форма
 */
// var searchOptions;
// 
// sumbit.addEventListener('keyup', function(){
//     searchOptions = this.value;
//     window.location = "http://www.omdbapi.com/"
//     window.location.search = searchOptions;
//     var searhSite = window.location.search; 
// });
// создаем обект для поиска
// function searhObj()
// { this.Title = Title, это мы ищем
//  this.Year = Year, берем из дропдауна
//  this.Type = Type берем из дропдауна
//  };
//
//$('form').on('submit', function(e){
// e.preventDefault();
// var $this = $(this);
// var findOption = $this.find("option:selected");
// console.log(findOption);
//});
//    
class SearchFormView extends View {

  submit.addEventLisener('keyup', 
  	function()
  	{
  		this.title = title;

  	},
  	function()
 {
  pubsub.publish('user.search.start', title, year, type);
});
//var pubsub = Pubsub.create();
// var hendler = sumbit.addEventLisener('keyup', function(contex, searchObj){
//     searchOptions = this.value;
//     window.location = "http://www.omdbapi.com/"
//     window.location.search = searchOptions;
//     var searhSite = window.location.search; 
// });
// 
// 
// 
// 
//pubsub.publish('user.search.start', null, hendler);
//pubsub.subscribe('user.search.start', null, hendler)
    constructor(options) {
        super(options);
        //ToDo: ініціалізувати елементи DOM та event listeners
    }
}
export {SearchFormView}
