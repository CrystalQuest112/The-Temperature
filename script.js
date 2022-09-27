 callTime();
      function callTime() {
        let currentTime = new Date();
        console.log(currentTime.getDate());
        let day = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];

        let date = day[currentTime.getDay()];
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();

        let clock = document.querySelector("#time");
        clock.innerHTML = `${date}  ${hours}:${minutes}`;
      }

      function pullWeather(response) {
        console.log(response.data);
        console.log(response.data.main.temp);

        let degrees = document.querySelector("#temperature");
        degrees.innerHTML = Math.round(response.data.main.temp);

        let place = document.querySelector("#place");
        place.innerHTML = response.data.name;

        let des = document.querySelector("#description");
        des.innerHTML = response.data.weather[0].main;

        let hum = document.querySelector("#humidity");
        hum.innerHTML = "Humidity: " + response.data.main.humidity + "%";

        let wind = document.querySelector("#windspeed");
        wind.innerHTML =
          "Wind: " + Math.round(response.data.wind.speed) + "Km/H";

        let icon = document.querySelector("#icon");
        icon.setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        );
      }

      function search(city) {
        let apiKey = "de561b681be5798e182b6fa0a38a5264";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        axios.get(apiUrl).then(pullWeather);
      }

      function getCity(event) {
        event.preventDefault();
        let cityType = document.querySelector("#find");
        search(cityType.value);
      }

      let form = document.querySelector("#search-form");
      form.addEventListener("submit", getCity);

      search("Nairobi");

      function showPosition(position) {
        let h1 = document.querySelector("h1");
        h1.innerHTML = `Your location is " + ${position.coords.latitude}+ "&" + ${position.coords.latitude}.`;
        console.log(position.coords.latitude);
        console.log(position.coords.latitude);
      }

      function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
      let geoButton = document.querySelector("#coord");
      geoButton.addEventListener("click", getCurrentPosition);
