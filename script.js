const timeEl = document.getElementById('time');
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timeZone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecast = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

const days = ['Sunday',  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept','Oct', 'Nov', 'Dec'];

const API_KEY = 'e58a91b5528ac74b5640933904b043fa';
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minute = time.getMinutes();
    const ampm = hour >=12 ? 'PM' :'AM'

    timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes + ' ' + '<span id="am-pm">${ampm}</span>'
    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]
},1000);


getWeatherData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        //console.log(success);

        let {lat, lon } = sucess.coords;
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}')
        .then(res => res.json()).then(data => {
            console.log(data)
        })
    })
}