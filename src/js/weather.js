function success(pos) {
  const crd = pos.coords;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      document.querySelector('#city').textContent = data.name;
      document.querySelector('#temp').textContent = data.main.temp + ' °C';
      document.querySelector('#main').textContent = data.weather[0].main;
      document.querySelector('#description').textContent =
        data.weather[0].description;
      document.querySelector('#weather').classList.remove('hidden');
    });
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

if ('geolocation' in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  /* geolocation IS NOT available */
}
