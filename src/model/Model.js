class Model {   
    constructor(options) {
        this.options = options;
    }
    
    /**
     * Метод надсилає запит до зовнішнього АРІ з указаними параметрами.
     * Відповідь можна реалізувати через callback, але краще викуористати Promise.
     */
    static sync(params) {}
}
export {Model}
