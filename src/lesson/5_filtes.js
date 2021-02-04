filterBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    buildContactList(filterByNameOrPhone(data, filterTextEl.value), contactListEl, contactTag);
});

filterTextEl.addEventListener('input', (event) => {
    buildContactList(filterByNameOrPhone(data, filterTextEl.value), contactListEl, contactTag);
});


/*
const filterList = (event) => {
    event.preventDefault();
    buildContactList(filterByNameOrPhone(data, filterTextEl.value), contactListEl, contactTag);
};

filterBtnEl.addEventListener('click', filterList);
filterTextEl.addEventListener('input', filterList);
*/