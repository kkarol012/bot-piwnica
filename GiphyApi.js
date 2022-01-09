const axios = require("axios");
require("dotenv").config();

function getRandomRicardoGif(channel) {
  getGif("ricardo%20milos", channel);
}
function getRandomCatGif(channel) {
  getGif("cute%20cat", channel);
}

function getWaifuGif(channel) {
  getGif("arcane%20vi", channel);
}

function getGif(query, channel) {
  url = "https://api.giphy.com/v1/gifs/random";
  axios
    .get(url, {
      params: {
        api_key: process.env.giphy_api_key,
        tag: query,
        limit: "1",
      },
    })
    .then((res) => {
      url = res.data.data.embed_url;
      channel.send(url);
    })
    .catch((error) => {
      console.log(error);
      channel.send("Coś się... coś się popsuło");
    });
}
module.exports = {
  getRandomRicardoGif: getRandomRicardoGif,
  getRandomCatGif: getRandomCatGif,
  getWaifuGif: getWaifuGif,
};
