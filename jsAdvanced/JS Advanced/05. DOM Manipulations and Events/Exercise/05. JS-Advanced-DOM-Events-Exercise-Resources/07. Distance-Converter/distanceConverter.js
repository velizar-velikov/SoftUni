function attachEventsListeners() {

    function convertDistance() {
        let unitsToMeter = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254
        }
        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;

        let inputDistanceEl = document.getElementById('inputDistance');
        let outputDistanceEl = document.getElementById('outputDistance');

        outputDistanceEl.value = Number(inputDistanceEl.value) * unitsToMeter[inputUnits] / unitsToMeter[outputUnits];
    }

    let convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', convertDistance);
}