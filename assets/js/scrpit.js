
var queryURL = http:"api.openweathermap.org/data/2.5/forecast?id=524901&APPID={90a083dba21f51fa89fd107b2a602ddf}"

// Begin creating basic click events. Register the submit button
//Make the AJAX request to the API - GETs the JSON data at the queryURL
$.ajax({
    url: queryURL,
    method: "GET"
}).then(updatePage);
console.log(queryURL);
