# Weather Dashboard

## Description
This application is designed for a traveler that want to see weather outlook for multiple cities so he/she can plan trips accordingly. 
when the user search for a city then the user is presented with current and future conditions for that city and the city is added to the search history box below. when the user selects a city he/she is presented with city name, the date, an icon, below that the user will see the temperature, the humidity, the wind speed, and the UV index. when the user views the uv index he/she will be presented with a color that indicates whether the conditions are favorable, moderate, or severe.
also the website will show a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity for those days.
also if the user clicks on any city from the search history he/she will be presented with current and future conditions for that city.

# screenshot
<img src ="/assets/images/2020-06-24.png" width="500">

# link to deployed app
https://github.com/eradicador/Weather-Dashboard

# css
linked navbar-brand class and changed font size and color
linked city-name class and changed font size 20px

# html
line 8 added bootstrap link 

line 11 added cdn javascript css link

line 15 added a title
added a navbar changed the background color
added a table for `cities` four rows
lines 98,99 added JQuery links
line 101 linked script file

# js
lines 2,4 added search parameters

line 6 added on(click) function associated with the search button

line 10 added variable with api link and apikey

line 12 added AJAX call with method GET for the API

line 23 added a function to update the page with all the weather information from the api

line 39 get and set information to local storage

line 48 added and event listener to get information from local storage to the page

# license

MIT License

Copyright (c) [2020] [Michael Amaya]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.