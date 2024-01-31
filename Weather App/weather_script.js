let key = "0d65b0171f27f36642e55dfedbb16789";
let request = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
/*"https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric" */

let search_box = document.querySelector(".search input");
let search_button = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather_icon")

async function checkWeather (city) {

try {
    let response = await fetch(request + city + `&appid=${key}`);
    let data = await response.json();
    
    if (data.name==undefined) {
        alert("Invalid City Name"); }
    else {
    console.log(data); /*lets us use it below */
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="clouds.gif";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.gif";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.gif";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist.gif";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.gif";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="snow.png";
    }

    }
} catch (error) {
    console.error('Error:', error);
    }

}

search_button.addEventListener("click", ()=>{
    if (search_box.value.trim() !== "") {
        checkWeather(search_box.value);
    } else {
        alert("Please enter a city");
    }
} );
