function focused() {
    let inputs = document.getElementsByTagName('input');
    Array.from(inputs).forEach(input => {
        let div = input.parentElement;
        input.addEventListener('focus', addClass);
        input.addEventListener('blur', removeClass);
        function addClass() {
            div.classList.add('focused');
        };
        function removeClass() {
            div.classList.remove('focused');
        };
    })
}