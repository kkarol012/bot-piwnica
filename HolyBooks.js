const axios = require('axios')
require('dotenv').config();

function getRandomBibleQuote(channel) {
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

function getRandomQranQuote(channel) {
    var ayah = Math.floor(Math.random() * 6236) + 1 
    var url = "https://api.alquran.cloud/ayah/"+ayah+"/en.asad"
    axios.get(url)
    .then((res) => {
        channel.send(`[${res.data.data.surah.englishName}:${res.data.data.surah.numberOfAyahs}] ${res.data.data.text}`)
    })
    .catch((error) => {
        console.log(error)
        channel.send('Coś się... coś się popsuło')
    })
}

module.exports = {
    getRandomBibleQuote: getRandomBibleQuote,
    getRandomQranQuote: getRandomQranQuote,
};