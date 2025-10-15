const axios = require('axios');
//Don't need dotenv. Since deployed (or netlify dev simulated) function already receives populated process.env.
exports.handler = async function (event, context) {
  const data = await getWeather(event.queryStringParameters);
  // your server-side functionality
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

async function getWeather({ lat, lon }) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
    console.log('get weather', process.env.WEATHER_API_KEY);
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}
