import config from "../configs/config.json";

const ImageUrl = `${config.apiImages}{{path}}`;

async function getImagesUrl(background, poster) {
  await fetch(`${ImageUrl}${poster}`);
  await fetch(`${ImageUrl}${background}`)
    .then(async (response) => await response.json())
    .then((data) => {
      return data.images;
    });
}

module.exports.getImagesUrl = getImagesUrl;
