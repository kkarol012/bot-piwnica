const wykopApi = require('./wykopApi.js')
const cleverChat = require('./cleverChat.js')

function wykonajKomende(commandArray, channel, author) {
	if (wykopApi.handleWykop(commandArray, channel)) {
	} else if (commandArray[1] === "licz" && commandArray[2] === "do") {
		licz(commandArray[3], channel)
	} else if (commandArray[1] === "rozmowa") {
		cleverChat.startKonwersacji(channel, author)
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