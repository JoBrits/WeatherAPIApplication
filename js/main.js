/* Task 1
Create a website that will: 
- display the current weather for Paris
- or a location of your choosing. 
- Use the Open-Meteo API.
*/

// Locations Array for UI
let locations = [];

// Selectors for UI
let displayCity = document.getElementById('city');
let displayDate = document.getElementById('current-date');
let displayTemp = document.getElementById('current-temp');
let displayTempMin = document.getElementById('current_min');
let displayTempMax = document.getElementById('current_max');
let displayWindDirection = document.getElementById('wind_direction');
let displayWindSpeed = document.getElementById('wind_speed');

// CONSTRUCTOR CLASSES
// location constructor 
function Location(name, latitude, longitude) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
}

// TASK OBJECTS
let location1 = new Location("Paris", 48.8534, 2.3488);
let location2 = new Location("Johannesburg", -26.2023, 28.0436);
// Pushes objects to incomeList array
locations.push(location1);
locations.push(location2);
// HARD Set Location for API set to 0 for Paris
let apiLocation = 1;

// API PROPERTIES
let apiLatitude = locations[apiLocation].latitude;
let apiLongitude = locations[apiLocation].longitude;
// Set API URL 
const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${apiLatitude}&longitude=${apiLongitude}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`;

// FUNCTIONS
// Async function to call API and builds readout
async function logWeatherAsync() {
    // fetch weather API
    const response = await fetch(weatherApiUrl);
    // convert to object
    const result = await response.json();
    // create new weather object
    returnedCity = result.timezone;
    returnedTime = result.current_weather.time;
    returnedTemperature = result.current_weather.temperature;
    returnedTemperature_max = result.daily.temperature_2m_max;
    returnedTemperature_min = result.daily.temperature_2m_min;
    returnedWind_direction = result.current_weather.winddirection;
    returnedWind_speed = result.current_weather.windspeed;
    // populate html
    displayCity.innerText = returnedCity;
    displayDate.innerText = returnedTime;
    displayTemp.innerText = returnedTemperature;
    displayTempMin.innerText = returnedTemperature_min;
    displayTempMax.innerText = returnedTemperature_max;
    displayWindDirection.innerHTML = returnedWind_direction;
    displayWindSpeed.innerText = returnedWind_speed;
}
// Function that runs as body loads
function init() {
    logWeatherAsync();
}

