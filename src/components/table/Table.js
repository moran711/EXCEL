import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
    static className = 'excel__table'
    constructor($root) {
        super($root, {
            listeners: ['click', 'mousedown']
        })
    }
    toHTML() {
        return createTable();
    }
    onClick() {
        console.log('click');
    }
    onMousedown() {
        console.log('mousedown');
    }
}
