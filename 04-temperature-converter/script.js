let dataText = document.querySelector(".btn-container")
let  buttons = document.querySelectorAll(".city-btn")
async function getCityWeather(lat, lon, cityName){
dataText.innerText = `${cityName} Ka Weather check ho rha hia...⏱️`;
let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`;
try {
    let response = await fetch(url);
    let weatherData = await response.json();

    console.log(weatherData);
    
    let currentTemp = weatherData.current.temperature_2m;
    let tempUnit = weatherData.current_units.temperature_2m;

    dataText.innerHTML = `
    <h2>${cityName} Live Weather 🌡️</h2>
            <p style="font-size: 28px; font-weight: bold; color: #ff5722; margin: 10px 0;">
                ${currentTemp}${tempUnit}
            </p>
    `
} catch (error){
    dataText.innerText = "❌ Data load karne mein masla aaya."

}
}
buttons.forEach(function(button) {
button.addEventListener("click", function(){
    let lat = this.getAttribute("data-lat")
    let lan = this.getAttribute("data-lon")
    let cityName = this.getAttribute("data-name");

    getCityWeather(lat, lan, cityName);
})
})