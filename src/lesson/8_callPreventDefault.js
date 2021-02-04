contactListEl.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'call') {
        event.preventDefault();
        // TODO: make call
        return;
    }
    const contactEl = event.target.closest('[data-contact]');
    const contactDetailsEl = contactEl.querySelector('[data-section=details]');
    contactDetailsEl.classList.toggle('hidden');
});


function call() {
    alert('call');
    // TODO: make call
    return;
}

function detailsShow(el) {
    const contactEl = el.closest('[data-contact]');
    const contactDetailsEl = contactEl.querySelector('[data-section=details]');
    contactDetailsEl.classList.toggle('hidden');
}

const ifElement = (event) => {
    if (event.target.dataset.action === 'call') {
        event.preventDefault();
        call();
    } else {
        detailsShow(event.target);
    }
};

filterBtnEl.addEventListener('click', filterList);
filterTextEl.addEventListener('input', filterList);
contactListEl.addEventListener('click', ifElement);