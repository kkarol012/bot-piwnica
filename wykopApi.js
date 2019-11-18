const axios = require('axios')
require('dotenv').config();

function fetchMemes(channel) {
    const page = Math.floor(Math.random() * 10)

    axios.post('https://a2.wykop.pl/Search/Entries/page/' + page + '/appkey/' + process.env.wykop_key + '?q=meme&data=compacted&return=embed', {
    })
    .then((res) => {
        const item = Math.floor(Math.random() * res.data.data.length)
        const url = res.data.data[item].embed.url
        channel.send({files: [url]})
    })
    .catch((error) => {
        console.log(error)
        channel.send('Coś się... coś się popsuło')
    })
}

function handleWykop(message) {
    var str = message.content.toLowerCase();

    if (!str.startsWith(process.env.prefix) || message.author.bot) return false;
    if (str.match(/meme/)) {
        fetchMemes(message.channel)
    } else {
        return false;
    }
    return true;
}

module.exports = {
    handleWykop: handleWykop
};