export function filterBy(contacts, filterCallback) {
    /* Метод filter() создаёт новый массив со всеми элементами, 
    прошедшими проверку, задаваемую в передаваемой функции.*/
    return contacts.filter(filterCallback);
}
export function containsPhone(phone, search) {
    search = search.replace(/[+ ()]/g, ''); // Удаляем +, ' ' и т.д.
    /* Метод startsWith() определяет, начинается ли строка с символов 
    другой строки, возвращая, соответсвенно, true или false. */
    return phone.startsWith(search);
}
export function containsText(data, search) {
    search = search.trim().toLowerCase();
    /* Метод includes() проверяет, содержит ли строка 
    заданную подстроку, и возвращает, соответственно true или false. */
    return data.toLowerCase().includes(search);
}

export function filterByNameOrPhone(contacts, text) {
    return filterBy(contacts, o => (
                       /* true|false || true|false */
        containsPhone(o.phone, text) || containsText(o.name, text)
    ));
}