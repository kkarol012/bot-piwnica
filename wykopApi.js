const axios = require('axios')
require('dotenv').config();

function fetchMemes(channel) {
    const page = Math.floor(Math.random() * 10)
    console.log('b4 fetch')
    axios.post('https://a2.wykop.pl/Search/Entries/page/' + page + '/appkey/' + process.env.wykop_key + '?q=meme&data=compacted&return=embed', {
    })
    .then((res) => {
        console.log('response:')
        console.log(res)
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
    console.log('handleWykop: func')

    var str = message.content.toLowerCase();

    if (!str.startsWith(process.env.prefix) || message.author.bot) return false;
    console.log('handleWykop: after logic')

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