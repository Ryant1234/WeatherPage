/* eslint-disable */

var React = require('react');
var Header = require('./header');
var Title = require('./title');
var Techs = require('./techs/techs');
var Footer = require('./footer');

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

module.exports = React.createClass({
  render: function () {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          <Title/>
          <Techs/>
        </main>
        <Footer/>
      </div>
    );
  }
});


var searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', searchWeather);
var data = data;
var divCity =  document.getElementById('weatherCity');
var searchCity = document.getElementById('city');
var loadingText = document.getElementById('load');
var weatherBox = document.getElementById('weather');
var divDescription = document.getElementById('weatherDescription');
var divWindDirection = document.getElementById('windDirection');
var divMinTemp = document.getElementById('minTemperature');
var divMaxTemp = document.getElementById('maxTemperature');
var divTemp = document.getElementById('weatherTemperature')

function searchWeather() {
  var cityName = searchCity.value;

  if (cityName.trim().length === 0) {
  return  console.log('Please enter a city Name!');
  }

 
  var apiKey = 'ff44342b8aee174ea33f2c9344a61bff';



 $.ajax({
   url: 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName +'&units=metric&appid=' + apiKey,
   type:'GET',
   data:data
     // Request Headers
 })
 .done(function (data) {
   if (data.length != 0)
   {
      console.log('data recieved!')
   }
 

      var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase(),);
     weatherData.maxTemp = data.main.temp_max;
      weatherData.minTemp = data.main.temp_min; 
       weatherData.temperature = data.main.temp; 
        weatherData.windSpeed = data.wind.speed; 
         weatherData.windDirection = data.wind.deg; 
         updateWeather(weatherData)
      
      console.log(weatherData);
      });

} 



function updateWeather (weatherData) {
  divCity.textContent = weatherData.CityName;
   divDescription.textContent = weatherData.description;
   divWindDirection.textContent = weatherData.windDirection;
   divMaxTemp.textContent = weatherData.maxTemp;
   divMinTemp.textContent = weatherData.minTemp;
   divTemp.textContent = weatherData.temperature;
}


function Weather(cityName, description) {
  this.CityName = cityName;
  this.description = description;
  this._maxTemp = '';
  this._minTemp = '';
  this._temperature = '';
  this._windSpeed = '';
  this._windDirection = '';
}

Object.defineProperty(Weather.prototype, 'maxTemp', {
  get: function() {
    return this._maxTemp;
  },
  set: function(value){
    return  this._maxTemp = (value)+ 'C.';
  }
});

Object.defineProperty(Weather.prototype, 'minTemp', {
  get: function() {
    return this._minTemp;
  },
  set: function(value){
  return   this._minTemp = (value) + 'C.';
  }
});

Object.defineProperty(Weather.prototype, 'windSpeed', {
  get: function() {
    return this._windSpeed;
  },
  set: function(value){


    
   return   this._windSpeed;
  }
});

Object.defineProperty(Weather.prototype, 'windDirection', {
  get: function() {
    
    return this._windDirection;
  },
  set: function(value){

    
    
    return  this._windDirection = getWindDirection(value);
  }
});

Object.defineProperty(Weather.prototype, 'temperature', {
  get: function() {
    return this._temperature;
  },
  set: function(value){
    this._temperature =  (value) + 'C.';
  }
});

function getWindDirection(windAngle)
{
if (windAngle >= 348.75 || windAngle  < 33.75 )
{
  return "N"
}



if (windAngle >= 33.75 &&  windAngle  < 78.75 )
{
  return "NE"
}

if (windAngle >= 78.75 &&  windAngle  < 123.75 )
{
  return "E"
}

if (windAngle >= 123.75 &&  windAngle  < 168.75 )
{
  return "SE"
}

if (windAngle >= 168.75 &&  windAngle  < 213.75 )
{
  return "S"
}

if (windAngle >= 213.75 &&  windAngle  < 258.75 )
{
  return "SW"
}

if (windAngle >= 258.75 &&  windAngle  < 303.75 )
{
  return "W"
}

if (windAngle >= 303.75 &&  windAngle  < 348.75 )
{
  return "NW"
}

 
}