// serach parameters
var APIKey = 'c5ddeb8a63142d853cedb5adfd31187a';
var cityInfo = "";
var button = document.getElementById("run-search");
// .on("click") function associated with the Search Button
$("#run-search").on("click", function (event) {
    //get info for the city and trim it
    searchInfo = $("#city-search").val().trim();
    //create URL with APIKey
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
    $('#date').text(moment().format('M/D/YYYY'));
    // Key.value
    $("#city-name").text(cityInfo.name);
    // console.log(cityInfo);
    $("#temperature").text("Temperature: " + parseInt((cityInfo.main.temp - 273.15) * 1.8 + 32));

    $("#humidity").text("Humidity: " + parseInt((cityInfo.main.humidity)));

    $("#wind-speed").text("Wind Speed: " + cityInfo.wind.speed);

    $("#uv-index").text("UV Index: " + cityInfo.name);
    storeCities()
}
$('.search-input').val(localStorage.getItem('#city-search'))
function storeCities() {
    var storageStuff = localStorage.setItem('currentCity', searchInfo);
    clearInterval()
    // localStorage.setItem("currentCity", searchInfo); 
    console.log(localStorage);
}
localStorage.getItem('currentCity')

button.addEventListener("click", function () {
    howYouFeel.textContent = button.p - 3;
    localStorage.setItem('currentCity', button.p - 3);
    console.log(localStorage);
    howYouFeelSaved.textContent = localStorage.getItem('currentCity');
})

// weather data, 3 api calls each function its own ajax call and jquery ,weather data for city, 5 day forecast, last api call the uv index append text add event listener elements to the page.
// if statements or loop, clear 

// function fiveForecast(cityInfo) {
//     var fiveDay = `http://api.openweathermap.org/data/2.5/forecast?q=${cityInfo}&appid=${APIKey}`
//     $.ajax({
//         url: fiveDay,
//         method: "GET"
//     })
//     event.preventDefault();
//     $("#fiveForecast").text(cityInfo)
// }