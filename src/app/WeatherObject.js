/* eslint-disable linebreak-style */
/**
 * Created by Ryan Thomas on 03-May-17.
 */

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

