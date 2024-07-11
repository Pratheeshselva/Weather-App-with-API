const API_Url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const API_Key = "5604cf30d778c5109dfc6c6201deeda4";

const weatherIcon = document.querySelector(".weather-icon img")

let button = document.getElementById('button-addon2')
button.addEventListener('click', ()=>{
    const searchresponse = document.getElementById('Search-response').value
    checkWeather(searchresponse);
})


async function checkWeather(city) {
    try {

        const req_url = API_Url + city + `&appid=${API_Key}`
        let res = await fetch(req_url,{
            method:"GET"
        })
        var data = await res.json();
        console.log(data)
    document.querySelector(".weather-city").innerHTML = `${data.name}`
      document.querySelector(".Temperature").innerHTML = `Temperature: ${data.main.temp}°C`
      document.querySelector(".Weather").innerHTML = `Weather: ${data.weather[0].main}`
      document.querySelector(".Humidity").innerHTML = `Humidity: ${data.main.humidity}%`
      document.querySelector(".Wind").innerHTML = `Wind Speed: ${data.wind.speed} m/s`
      document.querySelector(".Visibility").innerHTML = `Visibility: ${data.visibility} m`
console.log(data.weather[0].main)
      if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "./assets/img/cloudy.png"
      }
      else if(data.weather[0].main=="Clear"){
        weatherIcon.src = "./assets/img/clear.png"
      }
      else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "./assets/img/rainy.png"
      }

      else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "./assets/img/drrizle.png"
      }

      else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "./assets/img/mist.png"
      }
      else if(data.weather[0].main=="Snow"){
        weatherIcon.src = "./assets/img/snow.png"
      }
      else if(data.weather[0].main=="Wind"){
        weatherIcon.src = "./assets/img/wind.png"
      }
      else{
        weatherIcon.src = "./assets/img/else.png"
      }


    } catch (error) {
        console.log(error)
        alert(`${data.message}. Please make the entered city is correct` )
        
    }
}

