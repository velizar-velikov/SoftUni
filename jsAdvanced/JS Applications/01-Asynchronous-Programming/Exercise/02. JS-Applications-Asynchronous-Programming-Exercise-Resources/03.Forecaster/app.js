function attachEvents() {

    const conditions = {
        Sunny: '&#x2600', // ☀
        'Partly sunny': '&#x26C5', // ⛅
        Overcast: '&#x2601', // ☁
        Rain: '&#x2614', // ☂
        Degrees: '&#176' // °
    }

    const forecastEl = document.getElementById('forecast');
    const currentEl = document.getElementById('current');
    const upcomingEl = document.getElementById('upcoming');

    const loc = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', getWeather);


    function getWeather() {

        if (loc.value.length == 0) return;

        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            .then(response => {
                if (!response.ok) {
                    let error = new Error();
                    error.status = response.status;
                    error.statusText = response.statusText;
                    throw error;
                }
                return response.json();
            })
            .then(data => {
                const code = data.find(obj => obj.name == loc.value).code;

                //current forecast
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
                    .then(response => {
                        if (!response.ok) {
                            let error = new Error();
                            error.status = response.status;
                            error.statusText = response.statusText;
                            throw error;
                        }
                        return response.json();
                    })
                    .then(data => {
                        const condition = data.forecast.condition;
                        currentEl.innerHTML = '<div class="label">Current conditions</div>';
                        currentEl.innerHTML += `
                        <div class="forecasts">
                            <span class="condition symbol">${conditions[condition]}</span>
                            <span class="condition">
                                <span class="forecast-data">${data.name}</span>
                                <span class="forecast-data">${data.forecast.low}${conditions.Degrees}/${data.forecast.high}${conditions.Degrees}</span>
                                <span class="forecast-data">${condition}</span>
                                </span>
                        </div>
                        `;
                    })
                    .catch(error => {
                        forecastEl.style.display = 'block';
                        forecastEl.innerHTML = 'Error';
                        loc.value = '';
                    })

                //three-day forcast
                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
                    .then(response => {
                        if (!response.ok) {
                            let error = new Error();
                            error.status = response.status;
                            error.statusText = response.statusText;
                            throw error;
                        }
                        return response.json();
                    })
                    .then(data => {

                        const condition1 = data.forecast[0].condition;
                        const condition2 = data.forecast[1].condition;
                        const condition3 = data.forecast[2].condition;
                        upcomingEl.innerHTML = '<div class="label">Three-day forecast</div>';
                        upcomingEl.innerHTML += `
                        <div class="forecast-info">
                    
                            <span class="upcoming">
                                <span class="symbol">${conditions[condition1]}</span>
                                <span class="forecast-data">${data.forecast[0].low}${conditions.Degrees}/${data.forecast[0].high}${conditions.Degrees}</span>
                                <span class="forecast-data">${condition1}</span>
                            </span>

                            <span class="upcoming">
                                <span class="symbol">${conditions[condition2]}</span>
                                <span class="forecast-data">${data.forecast[1].low}${conditions.Degrees}/${data.forecast[1].high}${conditions.Degrees}</span>
                                <span class="forecast-data">${condition2}</span>
                            </span>

                            <span class="upcoming">
                                <span class="symbol">${conditions[condition3]}</span>
                                <span class="forecast-data">${data.forecast[2].low}${conditions.Degrees}/${data.forecast[2].high}${conditions.Degrees}</span>
                                <span class="forecast-data">${condition3}</span>
                            </span>

                        </div>
                        `;
                    })
                    .catch(error => {
                        forecastEl.style.display = 'block';
                        forecastEl.innerHTML = 'Error';
                        loc.value = '';
                    })

                forecastEl.style.display = 'block';
                loc.value = '';
            })
            .catch(error => {
                forecastEl.style.display = 'block';
                forecastEl.innerHTML = 'Error';
                loc.value = '';
            })

    }

}

attachEvents();