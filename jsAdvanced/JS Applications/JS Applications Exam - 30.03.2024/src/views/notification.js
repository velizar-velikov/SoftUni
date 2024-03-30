function createNotification(errorMessage) {
    const section = document.createElement('section');
    section.id = 'notifications';
    section.innerHTML = `
    <div id="errorBox" class="notification">
    <span class="msg">${errorMessage}</span>
</div>
    `;

    return section;
}

export function notify(errorMessage) {
    debugger;
    const errorSection = createNotification(errorMessage);
    errorSection.querySelector('#errorBox').style.display = 'block';
    console.log(errorSection);

    document.body.prepend(errorSection);
    setTimeout(() => {
        document.getElementById('notifications').remove();
    }, 3000);
}
