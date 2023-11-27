function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', addRemoveStyle);
    function addRemoveStyle() {
        let pattern = /[a-z]+@[a-z]+\.[a-z]+/;
        let inputEmail = input.value;
        if (inputEmail.match(pattern)) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    };
}