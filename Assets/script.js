const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const API_KEY = "7887d4d0397e31e7e0cd31ec2d59841c";

const getCityCoordinates = () => {
    const cityName = cityInput.value.trim();
    if(!cityName) return;
    const GEOCODING_API_URL = 'http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid={API_KEY}'

    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        console.log(data)
    }).catch(() => {
        alert("An error occured while fetching the coordinates!");
    });
    
}

searchButton.addEventListener("click", getCityCoordinates);