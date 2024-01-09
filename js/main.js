
async function getWeather(term) {
    if (term === '') {
        term = 'cairo';
    }

    try {
        let apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f9340398abe34388874172325240201&q=${term}&days=3`);
        let finalResult = await apiResponse.json();
        display(finalResult);
        display2(finalResult);
        display3(finalResult);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function getWeekdayFromDate(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

function display(data) {
    let cartoona = `
        <div class="d-flex justify-content-around w-100 headerr">
            <div>
                <h2 id="wideworld">${getWeekdayFromDate(data.forecast.forecastday[0].date)}</h2>
            </div>
            <div>
                <h2>${data.forecast.forecastday[0].date}</h2>
            </div>
        </div>

        <div class="info d-flex justify-content-around ">
            <p>${data.location.country}</p>
            <p>${data.location.region}</p>
        </div>
        <div class="degree">
            <sub class="cell"><b>O</b></sub>
            <p class="degfs">${data.current.temp_c} C</p>
            
            ${data.current.condition.text}
        </div>
    `;

    document.getElementById('rowdata').innerHTML = cartoona;
}

function display2(data) {
    let cartoonaa = `
        <div class="d-flex justify-content-around p-0 headerrr">
            <div>
                <h2 id="wideworld">${getWeekdayFromDate(data.forecast.forecastday[1].date)}</h2>
            </div>
            <div>
                <h2>${data.forecast.forecastday[1].date}</h2>
            </div>
        </div>

        <div class="info d-flex justify-content-around">
            <p>${data.location.country}</p>
            <p>${data.location.region}</p>
        </div>
        <div class="degree">
            <sub class="cell"><b>O</b></sub>
            <p class="degfs">${data.forecast.forecastday[1].day.avgtemp_c} C</p>
            ${data.forecast.forecastday[1].day.condition.text}
        </div>
    `;

    document.getElementById('rowdata2').innerHTML = cartoonaa;
}

function display3(data) {
    let cartoonaaa = `
        <div class="d-flex justify-content-around headerrrrr">
            <div>
                <h2 id="wideworld">${getWeekdayFromDate(data.forecast.forecastday[2].date)}</h2>
            </div>
            <div>
                <h2>${data.forecast.forecastday[2].date}</h2>
            </div>
        </div>

        <div class="info d-flex justify-content-around">
            <p>${data.location.country}</p>
            <p>${data.location.region}</p>
        </div>
        <div class="degree">
            <sub class="cell"><b>O</b></sub>
            <p class="degfs">${data.forecast.forecastday[2].day.avgtemp_c} C</p>
            ${data.forecast.forecastday[2].day.condition.text}
        </div>
    `;

    document.getElementById('rowdata3').innerHTML = cartoonaaa;
}

let searchInput = document.getElementById('searchweather');
searchInput.addEventListener('keyup', function (e) {
    let inputValue = e.target.value;
    getWeather(inputValue);
});
getWeather('cairo')