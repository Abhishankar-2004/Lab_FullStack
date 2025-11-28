// IMPORTANT: Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key.
// You can get a free API key from: https://openweathermap.org/api
const API_KEY = '2b10dc257ead7be2bc519cddf36cad3a';
const weatherInfoDiv = document.getElementById('weatherInfo');
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
 
        /** 
         * Fetches weather data from the OpenWeatherMap API for a given city. 
         * Uses Fetch API and Promises for asynchronous operations. 
         * @param {string} city - The name of the city to fetch weather for. 
         */ 
        async function getWeatherData(city) { 
    // Clear previous info and show loading message
    weatherInfoDiv.innerHTML = '<p>Loading weather data... ⏳</p>';
 
    // Construct the API URL
    // Using 'metric' for Celsius units. Use 'imperial' for Fahrenheit.
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
 
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        if (!response.ok) {
            if (response.status === 404) {
                weatherInfoDiv.innerHTML = '<p class="error-message">City not found. Please check the spelling and try again. 😔</p>';
            } else if (response.status === 401) {
                weatherInfoDiv.innerHTML = '<p class="error-message">API Key is invalid or missing. Please ensure your API_KEY is correct. 😔</p>';
            } else {
                weatherInfoDiv.innerHTML = `<p class="error-message">HTTP error! status: ${response.status} - ${response.statusText} 😔</p>`;
            }
            return;
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfoDiv.innerHTML = '<p class="error-message">Failed to fetch weather data. Please check your internet connection or try again later. 😔</p>';
    }
        } 
 
        /** 
         * Displays the fetched weather data in the weatherInfoDiv. 
         * @param {object} data - The weather data object received from the 
API. 
         */ 
        function displayWeather(data) { 
    // Extract relevant information from the data object
    if (!data || !data.name || !data.sys || !data.main || !data.weather || !data.weather[0]) {
        weatherInfoDiv.innerHTML = '<p class="error-message">Unexpected response from weather API. Please try another city.</p>';
        return;
    }
    const cityName = data.name;
    const country = data.sys.country;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed; // Wind speed in meters/second for metric units

    // Capitalize the first letter of the description for better presentation
    const formattedDescription = description.charAt(0).toUpperCase() + description.slice(1);

    // Update the innerHTML of the weatherInfoDiv
    weatherInfoDiv.innerHTML = `
        <h2>${cityName}, ${country}</h2>
        <p class="temp">${temperature}°C</p>
        <p>${formattedDescription}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;
        } 
 
// Add event listener to the button
getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim(); // Get city input and remove leading/trailing whitespace
    if (city) {
        getWeatherData(city); // Call the function to fetch weather data
    } else {
        weatherInfoDiv.innerHTML = '<p class="error-message">Please enter a city name! 💡</p>';
    }
});

// Optional: Allow pressing Enter key to trigger search
cityInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        getWeatherBtn.click(); // Simulate a click on the button
    }
});

// Initial message on load
window.onload = () => {
    weatherInfoDiv.innerHTML = '<p>Enter a city name and click "Get Weather" to see the current conditions.</p>';
};