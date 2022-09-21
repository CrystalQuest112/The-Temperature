callTime ();

function callTime() {
let currentTime = new Date(); {

console.log(currentTime.getDate());
let days = [ "Sunday" , "Monday", "Tuesday","Wednesday", "Thursday" , "Friday" , "Saturday"]

let date = days[currentTime.getDay()];
let hours =currentTime.getHours();
let minutes = currentTime.getMinutes();

let h3 = document.querySelector("h3");
h3.innerHTML = `${date}  ${hours}:${minutes}`;
}}


function showWeather(response){
console.log(response.data); 
document.querySelector("h4").innerHTML = response.data.name;
document.querySelector("#temp").innerHTML = Math.round(response.data.main.temp);
}

function citySearch(event) {
event.preventDefault();
let apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=de561b681be5798e182b6fa0a38a5264`; 
let apikey="de561b681be5798e182b6fa0a38a5264";
let city  = document.querySelector("#city-input").value; 
console.log(apiWeather); 

axios.get(apiWeather).then(showWeather);
}
