// serach parameters
// var queryURL = "http:api.openweathermap.org/data/2.5/forecast?id=524901&APPID=c5ddeb8a63142d853cedb5adfd31187a"
var APIKey = 'c5ddeb8a63142d853cedb5adfd31187a';
var cityInfo = ""
// var temp = document.querySelector("#temperature")
var humid = ""
var wind = ""
var uv = ""
var cities = []
// .on("click") function associated with the Search Button
$("#run-search").on("click", function (event) {
    //get info for the city and trim it
    searchInfo = $("#city-search").val().trim();

    //create URL 
    var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${searchInfo}&appid=${APIKey}`

    //Make the AJAX request to the API - GETs the JSON data at the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then((data) => {
        updatePage(data);
    });


    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();
})
//Get from the form the number of results to display
function updatePage(cityInfo) {
    console.log(cityInfo);

    // Key.value
    $("#city-name").text(cityInfo.name);
    // console.log(cityInfo);
    $("#temperature").text("Temperature: " + parseInt((cityInfo.main.temp - 273.15) * 1.8 + 32));

    $("#humidity").text("Humidity: " + parseInt((cityInfo.name.humidity)));

    $("#wind-speed").text("Wind Speed: " + cityInfo.wind.speed);

    $("#uv-index").text("UV Index: " + cityInfo.name);

}
// weather data, 3 api calls each function its own ajax call and jquery ,weather data for city, 5 day forecast, last api call the uv index append text add event listener elements to the page.
// $('.search-input').val(localStorage.getItem('#run-search'))
// function storeCities(){
//     localStorage.setItem("cities", JSON.stringify(cities)); 
// }

// function fiveForecast(cityInfo) {
//     var fiveDay = `http://api.openweathermap.org/data/2.5/forecast?q=${cityInfo}&appid=${APIKey}`
//     $.ajax({
//         url: fiveDay,
//         method: "GET"
//     })
//     event.preventDefault();

//     $("#fiveForecast").text(cityInfo)
// }


// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard