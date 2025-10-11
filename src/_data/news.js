//server side JS will run on Build Time
const axios = require('axios');
const countries = require('./countries.json');

require('dotenv').config();

async function getNews(country) {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`
    );
    return {
      country,
      articles: response.data.articles,
    };
  } catch (error) {
    console.error(error);
  }
}

module.exports = async function () {
  const newPromises = countries.map(getNews);
  return Promise.all(newPromises).then((newsByCountries) => {
    console.log('newsByCountries:', newsByCountries);
    return Array.prototype.concat.apply([], newsByCountries);
  });
};
