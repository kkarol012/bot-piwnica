const axios = require('axios')
require('dotenv').config();

function getRandomRicardoGif(channel) {
    url = "https://api.giphy.com/v1/gifs/search"
    const number = Math.floor(Math.random() * 9)

    axios.get(url, {
        params: {
            api_key: process.env.giphy_api_key,
            offset: number,
            q: "ricardo milos",
            limit: '1'
        }
    })
    .then((res) => {
        console.log(res)

        url = res.data.data[0].images.original.url
        channel.send({files: [url]})
    })
    .catch((error) => {
        console.log(error)
        channel.send('Coś się... coś się popsuło')
    })
}

module.exports = {
    getRandomRicardoGif: getRandomRicardoGif
};