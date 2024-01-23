function attachEventsListeners() {

    const btns = [
        document.getElementById('daysBtn'),
        document.getElementById('hoursBtn'),
        document.getElementById('minutesBtn'),
        document.getElementById('secondsBtn')
    ]

    btns.forEach(btn => btn.addEventListener('click', calcValues));

    const dayInput = document.getElementById('days');
    const hourInput = document.getElementById('hours');
    const minInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    function calcValues(e) {
        const element = e.target;
        const enteredInput = element.parentElement.querySelector('input[type="text"]');

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