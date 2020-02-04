const axios = require('axios')
require('dotenv').config();

function getRandomQuote(channel) {
    url = "https://labs.bible.org/api/"
    axios.get(url, {
        params: {
            passage: 'random',
            type: 'json'
        }
    })
    .then((res) => {
        channel.send(`${res.data[0].bookname} ${res.data[0].chapter},${res.data[0].verse}:  ${res.data[0].text}`)
    })
    .catch((error) => {
        console.log(error)
        channel.send('Coś się... coś się popsuło')
    })
}

module.exports = {
    getRandomQuote: getRandomQuote
};