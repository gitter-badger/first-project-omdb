import {Model} from './Model';

/**
 * Фільми, що відповідають пошуковому запиту.
 */
class Movies extends Model {
    constructor(options) {
        super(options);
    }

    /**
     * Оновлює Movies з АРІ.
     * Для реалізації доцільно використати метод суперкласу super.sync()
     */
    static fetch() {
    }
}
export {Movies}
