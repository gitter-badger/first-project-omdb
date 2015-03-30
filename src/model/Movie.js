import {Model} from './Model';

/**
 * Один конкретний фільм з детальною інформацією.
 */
class Movie extends Model {
    constructor(options) {
        super(options);
    }

    /**
     * Оновлює Movie з АРІ.
     * Для реалізації доцільно використати метод суперкласу super.sync()
     */
    static fetch() {
    }
}
export {Movie}