
document.getElementById('submit-btn').addEventListener('click', () => {
    console.log('clicked');
 const city = document.getElementById('examplecity').value;
 const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 let d = new Date();

 fetch(apiUrl)
 .then(response => response.json())
 .then( data => {
    if(data.cod == 200){
        document.getElementById('weather-info').innerHTML = 
        `
        <div class="d-flex justify-content-between">
        <h2 class="p-2">Weather in ${data.name}</h2>
        <h2 id="date" class="p-2 d-inline">${d.toLocaleDateString()}</h2>
        </div>
          <p id="temp" class="text-center fw-bold">${data.main.temp}°C</p>
          <p id="desc" class="text-center fw-bold">${data.weather[0].main}</p>
          <p id="humd" class="text-center"><i class="fa-solid fa-droplet" style="margin-right: 1rem;"></i> ${data.main.humidity}%</p>
          <p id="wind" class="text-center"><i class="fa-solid fa-wind" style="margin-right: 1rem;"></i> ${data.wind.speed} m/s</p>
          
        `;
    } else {
        document.getElementById('weather-info').innerHTML = `
        <h2>Weather info not found!</h2>`;
    }
 })
 .catch(error => console.error('Error:', error));
})