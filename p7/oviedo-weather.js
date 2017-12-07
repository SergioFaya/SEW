$( document ).ready(function() {
    
     var darkSkyKey = "c565381ee9bf05151d254ffa7ca96313"; 
     var regionLink = "http://freegeoip.net/json/";
     
 $.getJSON(regionLink, function(data) {
     var country_code = data.country_code;
     var country = data.country_name;
     var ip = data.ip;
     var time_zone = data.time_zone;
     var latitude = data.latitude;
     var longitude = data.longitude;
     });
 
 $.get(regionLink, function (response) {
     $("#location").html("Location: " + response.city + ", " + response.region_name+". Latitude: "+response.latitude+", Longtitude: "+response.longitude);
     }, "jsonp");
   
     var weatherLink = "https://api.darksky.net/forecast/c565381ee9bf05151d254ffa7ca96313/"+latitude+","+longitude+".json";
     
 $.getJSON(weatherLink, function(data2) {
     var timezone = data2.timezone;
     var temperature = currently.temperature;
     var status = data2.summary;
     });
     
 $.get(weatherLink, function (response2) {
     $("#temp").html("Temprature now is: "+ response2.temperature);
     $("#weather").html("Weather Status: "+ response2.status);
 }, "jsonp");
     
      
 });