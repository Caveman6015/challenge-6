const searchButton = document.getElementById("search-btn");
let city = document.getElementById("city-name");
let currTemp= document.getElementById("curr-temp");
let currWin = document.getElementById("curr-wind");
let currHumidity = document.getElementById("curr-humidity");


searchButton.addEventListener('click', () => {
    console.log("search button working");
    localStorage.setItem("search-input", searchHistory);
  
})