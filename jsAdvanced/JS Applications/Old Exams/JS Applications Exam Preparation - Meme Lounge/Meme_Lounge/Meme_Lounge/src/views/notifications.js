function makeNotificationElement(message) {
    const section = document.createElement('section');
    section.id = 'notifications';
    section.innerHTML = `
    <div id="errorBox" class="notification">
        <span>${message}</span>
    </div>`;

    return section;
}

export function notify(message, element) {
    const notificationEl = makeNotificationElement(message);
    notificationEl.querySelector('.notification').style.display = 'block';
    document.getElementById('container').appendChild(notificationEl);

    setTimeout(() => notificationEl.remove(), 3000);
}

export function removeBorders(form) {
    [...form.querySelectorAll('textarea, input')].slice(0, -1).forEach((input) => (input.style.border = 'none'));
}
