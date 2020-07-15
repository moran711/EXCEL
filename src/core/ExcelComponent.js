import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name;
        this.emitter = options.emitter;
        this.unsubscribers = [];
        this.prepare();
    }

    // Налаштовуємо компонент до init
    prepare() {}

    // Повертає шаблон компонента
    toHTML() {
        return '';
    }

    // Повідомляємо listeners про подію event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args);
    }

    // Підписуємся на подію event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn);
        this.unsubscribers.push(unsub);
    }

    // ініціалізовуємо компонент
    // Додаємо DOM Listeners
    init() {
        this.initDOMListeners();
    }

    // Видаляємо компонент
    // Чистимо listeners
    destroy() {
        this.removeDOMListeners();
        this.unsubscribers.forEach(unsub => unsub());
    }
}
