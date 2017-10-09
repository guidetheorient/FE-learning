#!/usr/bin/env node

var axios = require('axios')

var cityname = ''

if (process.argv[2]) {
  cityname = process.argv[2]
  axios.get('https://weixin.jirengu.com/weather/cityid?location=' + cityname)
    .then((response) => {
      var cityid = response.data.results[0].id
      axios.get('https://weixin.jirengu.com/weather/now?cityid=' + cityid)
        .then((response) => {
          var weather = response.data.weather[0]
          logWeather(weather)
        })
        .catch((error) => {
          console.log('出错了')
        })
    })


} else {
  axios.get("https://weixin.jirengu.com/weather/")
    .then((response) => {
      var weather = response.data.weather[0]
      logWeather(weather, cityname)
    })
    .catch((error) => {
      console.log('出错了')
    })
}

function logWeather(weather, cityname) {
  if (!!cityname) {
    console.log(cityname + ' ' + weather.now.text + ' ' + weather.now.temperature + '℃' + '  ' + weather.now.wind_direction + '风' + weather.now.wind_speed + '级')
  } else {
    console.log(weather.city_name + ' ' + weather.now.text + ' ' + weather.now.temperature + '℃' + '  ' + weather.now.wind_direction + '风' + weather.now.wind_speed + '级')
  }
}