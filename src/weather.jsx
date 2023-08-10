import React, { useState } from "react";
import axios from 'axios';

function Weather() {
  const [weatherData, setWeatherData] = useState({
    temperature: 10,
    cityName: ' ' ,
    image:''
    
  });

  const handleSearch = () => {
    if (cityName.trim() !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=863242cfb2b1d357e6093d9a4df19a4b`;
      axios.get(apiUrl)
        .then(res => {
          let imagePath = '';
          const weatherMain = res.data.weather[0].main;

          if (weatherMain === "Clouds") {
            imagePath = "../img/clouds.png";
          } else if (weatherMain === "Clear") {
            imagePath = "../img/clear.png";
          } else if (weatherMain === "Rain") {
            imagePath = "../img/rain.png";
          } else if (weatherMain === "Drizzle") {
            imagePath = "../img/drizzle.png";
          } else if (weatherMain === "Mist") {
            imagePath = "../img/mist.png";
          } else if (weatherMain === "Haze") {
            imagePath = "../img/haze.png";
          }else {
            imagePath = "../img/snow.png";
          }

          setWeatherData({
            temperature: res.data.main.temp,
            cityName: res.data.name,
            image: imagePath
          });
          document.querySelector('.data_hide').classList.remove('data_hide');
        })
        .catch(err => console.log(err));
    }

  };

  const [cityName, setCityName] = useState('');

  return (
    <>
      <div class="container-fluid main_menu">
    <div class="row">
        <div class="col-md-10 col-12 mx-auto">


            <nav class="navbar navbar-expand-lg ">

                <a class="navbar-brand" href="/"><i class="far fa-snowflake"></i> WeatherApp <i
                        class="far fa-snowflake"></i></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/weather">Weather</a>
                        </li>
                        

                    </ul>

                </div>
            </nav>
        </div>
    </div>
</div>

    
    <div className="main_header">
      <div className="row">
        <div className="col-md-10 col-12 mx-auto">
          <div className="container-fluid main_content">
            <form className="temp_form" onSubmit={e => {
              e.preventDefault(); // Prevent form submission
              handleSearch();
            }}>
            
              <div>
                <input
                  type="text"
                  id="cityName"
                  placeholder="Enter your city name.."
                  autoComplete="off"
                  value={cityName}
                  onChange={(event) => {
                    setCityName(event.target.value);
                  }}
                />
                <br />
              </div>
              {/* <button type="submit" id="submitBtn">
                Search
              </button> */}
              <input type="submit" value="search" id="submitBtn" 
              
                
              />
              <p id="temp_err"></p>
            </form>

            <div className="tempInformation">
              <div className="top_layer">
                <p id="day">Tuesday</p>
                <p id="today_date">13 Oct</p>
              </div>
              <div className="main_layer">
                <p id="city_name">{weatherData.cityName}</p>
                <div className="middle_layer data_hide">
                  <p id="temp">
                    <span id="temp_real_val">{Math.round(weatherData.temperature)}<sup>o</sup>C</span>
                  </p>
                  <p id="temp_status">
                    <img src={weatherData.image} alt="Weather Icon" className="img1"  />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Weather;
