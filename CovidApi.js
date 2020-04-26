const axios = require('axios')
require('dotenv').config();

function getStats(channel, params) {
    let country
    if (params.length === 2) {
        country = 'poland'
    } else {
        country = params[2]
    }
    url = `https://coronavirus-19-api.herokuapp.com/countries/${country}/`
    axios.get(url)
    .then((res) => {
        console.log(res.data)
        try {
            channel.send(`Obecne statystyki dla ${country}: zachorowało: ${res.data.cases}, zmarło: ${res.data.deaths}, wyzdrowiało: ${res.data.recovered}, wciąż choruje: ${res.data.active}`)
            const deathRate = parseFloat(res.data.deaths / res.data.cases).toFixed(2)
            const recoveryRate = parseFloat(res.data.recovered / res.data.cases).toFixed(2)
            channel.send(`Śmiertelność: ${deathRate}%, wyzdrowiało: ${recoveryRate}%`)
        } catch(Exception){
            channel.send('Coś się... coś się popsuło')
        }
    })
    .catch((error) => {
        console.log(error)
        channel.send('Coś się... coś się popsuło')
    })
}

module.exports = {
    getStats: getStats
};