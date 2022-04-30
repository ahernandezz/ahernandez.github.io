const main = document.getElementById('main');
const clock = document.getElementById('clock');


let weather = {
    apiKey: "319dce1a5b76ad63afa3c44e56ce4c85",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=imperial&appid="+
          this.apiKey
      )
      
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
          
        })
        .then((data) => this.displayWeather(data));
        
    
        
    },
    
    displayWeather: function (data) {
      const { name} = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity,feels_like,temp_max,temp_min } = data.main;
      const { speed } = data.wind;
  
      
      weather_html = `<div class="weather_div">
      <h2 class="city" >Weather in ${name}<br></h2>
      <h1 class="temp">${Math.trunc(temp)}°F  <span class="secondTemp">   FEELS LIKE: ${Math.trunc(feels_like)}°<br>
      High: ${Math.trunc(temp_max)} Low:${Math.trunc(temp_min)} </span> 
      </h1>
      <div class="flex">
        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="" class="icon" />
        <div class="description">${description}</div>
      </div>
      <div class="humidity">Humidity: ${humidity}</div>
      <div class="wind">Wind speed: ${speed} km/h</div>
    </div>
      `;
      document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
      main.innerHTML = weather_html;
      console.log(data)
    },
    
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("chicago");


