var btn = document.getElementById("getWeather");
var placeTextbox = document.getElementById("placeTextbox");

btn.onclick = function () {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=";
  url += placeTextbox.value;
  url += "&appid=&units=metric";
  
  fetch(url).then(function(response) {
    return response.json();
  }).then(function (actualResponse) {

    var locationSpan = document.getElementById("locationSpan");
    var tempretureSpan = document.getElementById("tempretureSpan");

    locationSpan.innerHTML = actualResponse.name;
    tempretureSpan.innerHTML = actualResponse.main.temp;
  });
};
