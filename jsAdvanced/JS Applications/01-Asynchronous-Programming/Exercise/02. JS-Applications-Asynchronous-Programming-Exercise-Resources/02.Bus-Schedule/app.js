function solve() {

    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    const infoBox = document.getElementById('info');
    let stopId = 'depot';
    let stopName;

    async function depart() {

        try {
            let response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopId}`);

            if (!response.ok) {
                const error = new Error();
                error.status = response.status;
                error.statusText = response.statusText;
                throw error;
            }

            const data = await response.json();
            stopName = data.name;
            stopId = data.next;
            infoBox.textContent = `Next stop ${stopName}`;

            departBtn.disabled = true;
            arriveBtn.disabled = false;
        }
        catch (error) {
            infoBox.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    function arrive() {
        infoBox.textContent = `Arriving at ${stopName}`;
        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();