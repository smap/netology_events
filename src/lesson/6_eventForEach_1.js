Array.from(containerEl.children).forEach(o => containerEl.removeChild(o));
contacts.forEach((o) => {
    const el = document.createElement(elementTag);
    el.addEventListener('click', (event) => {
        // а здесь ещё closure, в котором closure, в котором closure
        console.log(event.currentTarget);
    });
    containerEl.appendChild(el);
});