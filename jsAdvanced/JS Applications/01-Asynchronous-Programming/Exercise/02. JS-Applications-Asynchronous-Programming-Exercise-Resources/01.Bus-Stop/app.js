async function getInfo() {

    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const busesList = document.getElementById('buses');
    busesList.innerHTML = '';

    try {

        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
        if (!response.ok) {
            const error = new Error();
            error.status = response.status;
            error.statusText = response.statusText;
            throw error;
        }

        const data = await response.json();

        stopName.textContent = data.name;

        for (let [busId, time] of Object.entries(data.buses)) {
            const li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busesList.appendChild(li);
        }
    }
    catch (error) {
        stopName.textContent = 'Error';
    }
}