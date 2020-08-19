import {storage} from '@core/utils';

export function toHtml(key) {
    const model = storage(key);
    const id = key.split(':')[1];
    return `
        <li class="db__record">
            <a href="#excel/${id}">${model.title}</a>
            <strong>
                ${new Date(model.openedDate).toLocaleDateString()}
                ${new Date(model.openedDate).toLocaleTimeString()}
            </strong>
        </li>
    `;
}

function getAllKeys() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key.includes('excel')) {
            continue;
        }
        keys.push(key);
    }

    return keys;
}

export function createRecordsTable() {
    const keys = getAllKeys();
    console.log(keys);
    if (!keys.length) {
        return `Ви поки не створили жодної таблиці.`;
    }
    return `
    <div class="db__list-header">
        <span>Назва</span>
        <span>Дата відкриття</span>
    </div>
    <ul class="db__list">
        ${keys.map(toHtml).join('')}
    </ul>
    `;
}
