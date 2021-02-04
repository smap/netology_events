filterBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    const text = filterTextEl.value;
    console.log(text);
});


/*
const listener = (event) => {
    event.preventDefault();
    console.log(filterTextEl.value);
};

filterBtnEl.addEventListener('click', listener);
filterTextEl.addEventListener('input', listener);
*/