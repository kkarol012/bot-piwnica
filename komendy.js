const wykopApi = require('./wykopApi.js')
const cleverChat = require('./cleverChat.js')
const GiphyApi = require('./GiphyApi.js')
const HolyBooks = require('./HolyBooks.js')
const YoutubeApi = require('./YoutubeApi.js')
const UserData = require('./UserData.js')
const CovidApi = require('./CovidApi.js')
const Pooling = require('./Pooling.js')

function wykonajKomende(commandArray, channel, author, message) {
	if (wykopApi.handleWykop(commandArray[1], channel)) {
		return true;
	} else if (commandArray[1] === "licz" && commandArray[2] === "do") {
		licz(commandArray[3], channel)
	} else if (commandArray[1] === "rozmowa") {
		cleverChat.startKonwersacji(channel, author)
	} else if (commandArray[1] === "ricardo") {
		GiphyApi.getRandomRicardoGif(channel)
	} else if (commandArray[1] === "kotek") {
		GiphyApi.getRandomCatGif(channel)
	} else if (commandArray[1] === "biblia") {
		HolyBooks.getRandomBibleQuote(channel)
	} else if (commandArray[1] === "koran") {
		HolyBooks.getRandomQranQuote(channel)
	} else if (commandArray[1] === "youtube") {
		YoutubeApi.searchForMovie(commandArray, channel)
	} else if (commandArray[1] === "get") {
		UserData.getAllValues(channel, author, message)
	} else if (commandArray[1] === "set") {
		UserData.setValue(commandArray, channel, author)
	} else if (commandArray[1] === "covid") {
		CovidApi.getStats(channel, commandArray)
	} else if (commandArray[1] === "ankieta") {
		Pooling.makePool(channel, commandArray)
	} else {
		return false
	}
	return true
}

function licz(number, channel) {
	var num = parseInt(number)
	if (num < 1) {
		channel.send('Nie ma takiej liczby');
		return
	}
	for (var i = 1; (i <= num && i <= 3); i++) {
		channel.send(i);
	}
	if (num > i) {
		channel.send('dalej mi się nie chce');
	}
	channel.send('Proszę bardzo sempai :3');
}

module.exports = {
	wykonajKomende: wykonajKomende
};