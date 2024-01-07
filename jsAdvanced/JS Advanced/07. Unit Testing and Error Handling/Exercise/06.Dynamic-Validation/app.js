function validate() {

    let pattern = /[a-z]+@[a-z]+\.[a-z]+/;

    let inputEl = document.getElementById('email');

    inputEl.addEventListener('change', (e) => {
        if (pattern.test(inputEl.value)) {
            e.target.classList.remove('error');
        } else {
            e.target.classList.add('error');
        }
    })
}