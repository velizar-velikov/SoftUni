function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let resultDiv = document.getElementById('result');
    gradient.addEventListener('mousemove', calcPercentage);
    gradient.addEventListener('mouseout', clearPercentage);

    function calcPercentage(e) {
        let offsetX = e.offsetX;
        let element = e.target;
        let elementX = element.clientWidth;
        let percent = Math.trunc(offsetX / elementX * 100);
        resultDiv.textContent = `${percent}%`;
    }

    function clearPercentage() {
        resultDiv.textContent = '';
    }
}