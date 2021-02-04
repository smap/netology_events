filterBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event);
});
filterBtnEl.removeEventListener('click', (event) => {
    event.preventDefault();
    console.log('111');
});

/*
const listener = (event) => {
    event.preventDefault();
    console.log(event);
};
filterBtnEl.addEventListener('click', listener);
filterBtnEl.removeEventListener('click', listener);
*/