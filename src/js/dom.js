
/**
 * @param {json} contacts 
 * @param {HTMLElement} contactListElement 
 * @param {string} elementTag 
 */
export function buildContactList(contacts, contactListElement, elementTag) {
    contactListElement.innerHTML = '';
    contacts.forEach((user) => {
        const elem = document.createElement(elementTag);
        elem.dataset.contact = '';
        elem.dataset.contactId = user.id;
        elem.innerHTML = `
            <div data-section="main">
                <img src="${user.avatar}">
                <span class="contact-name">${user.name}</span>
                <span class="contact-phone">${user.phone}</span>
                <a href="tel:+${user.phone}" data-phone="${user.phone}" 
                    data-action="call">Звонок</a>
            </div>
            <div data-section="details" class="hidden">
                ${user.details}
            </div>
        `;
        contactListElement.appendChild(elem);
    });
}