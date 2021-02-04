//*
import {getUsers} from './js/data';
import {buildContactList} from './js/dom';
import {filterByNameOrPhone} from './js/filters';

const data = getUsers();

const contactListEl = document.querySelector('[data-section=contact-list]');
const contactTag = 'li';
buildContactList(data, contactListEl, contactTag);

const filterWidgetEl = document.querySelector('[data-widget=filter-widget]');
const filterBtnEl = filterWidgetEl.querySelector('[data-action=filter]');
const filterTextEl = filterWidgetEl.querySelector('[data-id=filter-text]');


/****************/

const filterList = (event) => {
    event.preventDefault();
    buildContactList(
        filterByNameOrPhone(data, filterTextEl.value), 
        contactListEl, 
        contactTag
    );
};

filterBtnEl.addEventListener('click', filterList);
filterTextEl.addEventListener('input', filterList);

/****************/
/**
 * Звонок
 * @param {*} event 
 */
function call(event) {
    event.preventDefault();
    alert('Звонок');
    // TODO: make call
    return;
}

/**
 * Отрытие информации о пользователях
 * @param {*} event 
 */
function details(event) {
    const contactEl = event.target.closest('[data-contact]');
    const contactDetailsEl = contactEl.querySelector('[data-section=details]');
    contactDetailsEl.classList.toggle('hidden');
}

const clickList = (event) => {
    if (event.target.dataset.action === 'call') {
        call(event);
    } else {
        details(event);
    }
};

contactListEl.addEventListener('click', clickList);