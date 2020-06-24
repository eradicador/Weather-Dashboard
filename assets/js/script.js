// serach parameters
var queryURL = "http:api.openweathermap.org/data/2.5/forecast?id=524901&APPID=c5ddeb8a63142d853cedb5adfd31187a"

var cityInfo = ""
var temp = ""
var humid = ""
var wind = ""
var uv = ""

// Begin creating basic click events. Register the submit button
//Make the AJAX request to the API - GETs the JSON data at the queryURL
$.ajax({
    url: queryURL,
    method: "GET"
}).then((data) => {
    console.log('query url in api request', queryURL);
    console.log(data);
} );


// .on("click") function associated with the Search Button
$("#run-search").on("click", function (event) {

    searchInfo = $("#city-search").val().trim();
    console.log(searchInfo);
    
    // This line allows us to take advantage of the HTML "submit" property
    runQuery(5, "http:api.openweathermap.org/data/2.5/forecast?id=524901&APPID=c5ddeb8a63142d853cedb5adfd31187a");
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();
})

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
// THEN I am presented with the last searched city forecast