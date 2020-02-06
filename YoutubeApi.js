const axios = require('axios')

function searchForMovie(searchArray, channel) {
    searchArray.splice(0, 2)
    let query = searchArray.join(' ')
    url = "https://www.googleapis.com/youtube/v3/search?"
    axios.get(url, {
        params: {
            key: process.env.google_api_key,
            part: 'snippet',
            q: query,
            maxResults: '1'
        }
    })
    .then((res) => {
        if (res.data.items.length === 0) {
            return channel.send('nie ma takich filmów')
        }
        const videoId = res.data.items[0].id.videoId
        channel.send(`https://www.youtube.com/watch?v=${videoId}`)
    })
    .catch((error) => {
        console.log(error)
        channel.send('Coś się... coś się popsuło')
    })
}

module.exports = {
    searchForMovie: searchForMovie
};