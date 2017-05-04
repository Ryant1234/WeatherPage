/* eslint-disable */

//TODO - make temp divs smaller. 
// 

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
var divWindSpeed = document.getElementById('windSpeed')
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
 

      var weatherData = new Weather(cityName, data.weather[0].description,);
     weatherData.maxTemp =   + data.main.temp_max;
      weatherData.minTemp =  + data.main.temp_min; 
       weatherData.temperature = data.main.temp; 
        weatherData.windSpeed =  +  data.wind.speed + "km/h";
         weatherData.windDirection = data.wind.deg; 
         updateWeather(weatherData)
      
      console.log(weatherData);
      });

} 



function updateWeather (weatherData) {
  divCity.textContent = weatherData.CityName;
   divDescription.textContent = "Conditions: " + weatherData.description;
   divWindDirection.textContent = "Wind Direction: " + weatherData.windDirection;
   divMaxTemp.textContent = "Maximum Temperature: " + weatherData.maxTemp;
   divMinTemp.textContent = "Minimum Temperature: " + weatherData.minTemp;
   divTemp.textContent =  "Current Temperature: " +  weatherData.temperature;
   divWindSpeed.textContent = "Wind Speed: " + weatherData.windSpeed;

       changeTemperatureBackgroundColor(weatherData.minTemp, weatherData.maxTemp, weatherData.temperature);
      
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
    return  this._maxTemp = (value);//+ 'C.';
  }
});

Object.defineProperty(Weather.prototype, 'minTemp', {
  get: function() {
    return this._minTemp;
  },
  set: function(value){
  return   this._minTemp = (value);// + 'C.';
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
    this._temperature =  (value);// + 'C.';
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


// I honestly couldn't think of a better name for this.. for now. Maybe I'm over thinking.
function weatherConditionAdvice(){
switch (conditions)
{
case  'Clear':
     return 'Clear skies today!';
     break;

     case  'Rain':
     return 'Better put on a jacket or take your umbrella with you!';
     break;

     case 'storm':
     {
       return 'Stormy day today!';
     };

}
}


function setTemperatureBackGroundColor(temp)
{

 if (temp <= 4.9  )
  {
    return "#bceefb";
  } 

  if (temp >= 5 && temp <= 9.9 )
  {
    return "#b9ecd8";
  } 

    if (temp >= 10 && temp <= 14.9 )
  {
    console.log ("more then 10");
    return "#cadb92";
  } 

    if (temp >= 15 && temp <= 19.9 )
  {
    return "#ffeb88";
  } 

  if (temp >= 20 && temp <= 27 )
  {
    return "#FBC25E";
  } 

   if (temp >= 25 && temp <= 34 )
  {
    return "#FF9933";
  } 

     if (temp >= 35 && temp <= 39 )
  {
    return "#cd5b12";
  } 

}


function changeTemperatureBackgroundColor(min, max, temp)
{
      
  console.log('Inside ChangeTemp');
     divMinTemp.style.backgroundColor =  setTemperatureBackGroundColor(min);
     divMaxTemp.style.backgroundColor = setTemperatureBackGroundColor(max);
     divTemp.style.backgroundColor =  setTemperatureBackGroundColor(temp);

}







