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
var searchCity = document.getElementById('city');

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
 

  
   
      
      var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
    //  weatherData.temperature = data.main.temp; 
      
      console.log(weatherData);
      });

}

function Weather(cityName, description) {
  this.CityName = cityName;
  this.description = description;
  this._temperature = '';
}

Object.defineProperty(Weather.prototype, 'temperature', {
  get: function() {
    return this._temperature;
  },
  set: function(value){
    this._temperature = (value - 273 ).toFixed(2) + 'c.';
  }
});
