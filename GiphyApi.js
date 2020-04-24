const axios = require('axios')
require('dotenv').config();

function getRandomRicardoGif(channel) {
    getGif("ricardo milos", channel);
}
function getRandomCatGif(channel) {
    getGif("cute+cat", channel);
}

function getGif(query, channel) {
    url = "https://api.giphy.com/v1/gifs/search";
    const number = Math.floor(Math.random() * 999);
    axios.get(url, {
        params: {
            api_key: process.env.giphy_api_key,
            offset: number,
            q: query,
            limit: '1'
        }
    })
        .then((res) => {
            url = res.data.data[0].images.original.url;
            channel.send({ files: [url] });
        })
        .catch((error) => {
            console.log(error);
            channel.send('Coś się... coś się popsuło');
        });
}
module.exports = {
    getRandomRicardoGif: getRandomRicardoGif,
    getRandomCatGif: getRandomCatGif
};