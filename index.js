const api = {
    key: 'b0c0046dc2418118db8f58fda92f94b1',
    url: 'https://api.openweathermap.org/data/2.5/'
}
const s1 = document.querySelector('.s1')
s1.addEventListener('keypress', func1)

function func1(e) {
    if (e.keyCode == 13) {
        console.log(s1.value);
        result(s1.value)

    }
}

function result(e1) {
    fetch(`${api.url}weather?q=${e1}&units=metric&APPID=${api.key}`)
        .then(function (weather) {
            return weather.json();
        }).then(display);
}

function display(weather) {
    console.log(weather);
    let city = document.querySelector('.location .city')
    city.innerHTML = `${weather.name}, ${weather.sys.country}`



    let now = new Date()
    let date = document.querySelector('.location .date')
    date.innerText = dcreate(now)

    let temp = document.querySelector('.t1 .temp')
    temp.innerHTML = `${Math.round(weather.main.temp)} &#8451`;

    let weath = document.querySelector('.t1 .weather')
    weath.innerHTML = weather.weather[0].main;

    let hl = document.querySelector('.t1 .hi-low')
    hl.innerHTML = `${Math.round(weather.main.temp_min)} &#8451 / ${Math.round(weather.main.temp_max)} &#8451`

}

function dcreate(y) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let date = y.getDate()
    let year = y.getFullYear()
    let day = days[y.getDay()]
    let month = months[y.getMonth()]

    return `${day} ${date} ${month} ${year}`
}