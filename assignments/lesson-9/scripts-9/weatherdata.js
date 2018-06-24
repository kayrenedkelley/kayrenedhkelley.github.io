var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','http://api.openweathermap.org/data/2.5/weather?zip=84653,us&appid=7cec70771bb416e2ba95cdd1b2a79fd8&units=imperial',true);

weatherObject.send();

weatherObject.onload = function(){
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('currentDisc').innerHTML = weatherInfo.weather[0];
    document.getElementById('highTemp').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('lowTemp').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;
    
}