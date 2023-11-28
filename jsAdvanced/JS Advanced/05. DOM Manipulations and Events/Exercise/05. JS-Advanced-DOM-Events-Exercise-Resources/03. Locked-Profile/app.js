function lockedProfile() {
    let profiles = document.querySelectorAll('.profile');

    for (let profile of profiles) {

        let unlockRadio = profile.querySelector('input[value="unlock"]');

        let btn = profile.querySelector('button');

        btn.addEventListener('click', showMore);

        function showMore() {
            let hiddenInfo = profile.querySelector('div');

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