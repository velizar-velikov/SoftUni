function lockedProfile() {
    const profiles = document.querySelectorAll('.profile');

    for (let profile of profiles) {

        const unlockRadio = profile.querySelector('input[value="unlock"]');
        const btn = profile.querySelector('button');
        btn.addEventListener('click', showMore);

        function showMore() {
            const hiddenInfo = profile.querySelector('div');

            if (unlockRadio.checked == true) {
                if (btn.textContent == 'Show more') {
                    hiddenInfo.style.display = 'block';
                    btn.textContent = 'Hide it';
                } else {
                    hiddenInfo.style.display = 'none';
                    btn.textContent = 'Show more';
                }
            }
        }
    }
}