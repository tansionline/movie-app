import config from "../configs/config.json";

const ApiUrl = `${config.apiUrl}{{endpoint}}?api_key=${config.apiKey}&language=${config.apiLanguageKey}`;

async function getCredits(movie_id) {
  return await fetch(
    `${ApiUrl.replace("{{endpoint}}", `/movie/${movie_id}/credits`)}`
  )
    .then(async (response) => await response.json())
    .then((data) => {
      return data.cast;
    });
}

module.exports.getCredits = getCredits;
