function attachEventsListeners() {
    let dayBtn = document.getElementById('daysBtn');
    let hourBtn = document.getElementById('hoursBtn');
    let minBtn = document.getElementById('minutesBtn');
    let secBtn = document.getElementById('secondsBtn');

    dayBtn.addEventListener('click', calcValues);
    hourBtn.addEventListener('click', calcValues);
    minBtn.addEventListener('click', calcValues);
    secBtn.addEventListener('click', calcValues);

    function calcValues(e) {
        let element = e.target;
        let dayInput = document.getElementById('days');
        let hourInput = document.getElementById('hours');
        let minInput = document.getElementById('minutes');
        let secondsInput = document.getElementById('seconds');
        let enteredInput = element.parentElement.querySelector('input[type="text"]');
        if (enteredInput == dayInput) {
            hourInput.value = dayInput.value * 24;
            minInput.value = hourInput.value * 60;
            secondsInput.value = minInput.value * 60;
        } else if (enteredInput == hourInput) {
            dayInput.value = hourInput.value / 24;
            minInput.value = hourInput.value * 60;
            secondsInput.value = minInput.value * 60;
        } else if (enteredInput == minInput) {
            hourInput.value = minInput.value / 60;
            dayInput.value = hourInput.value / 24;
            secondsInput.value = minInput.value * 60;
        } else {
            minInput.value = secondsInput.value / 60;
            hourInput.value = minInput.value / 60;
            dayInput.value = hourInput.value / 24;
        }
    }
}