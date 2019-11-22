require('dotenv').config();
const odzywki = require('./odzywki.js')
const imienneOdzywki = require('./imienneOdzywki.js')
const komendy = require('./komendy.js')

const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
	console.log("started!")
});

const talkedRecently = new Set()
const dontUndarstand = 'Nie rozumiem sempai ;_; Jeśli chcesz mema napisz `meme` lub `trollmeme`'

client.on("message", (message) => {
	if (message.author.bot)
		return
	if (talkedRecently.has(message.author.id))
		return

	talkedRecently.add(message.author.id);
	setTimeout(() => {
		talkedRecently.delete(message.author.id);
	}, 3000)

	if (odzywki.shortResponses(message))
		return

	var messageArray = message.content.toLowerCase().split(" ");
	var jestImienna = messageArray[0] === process.env.prefix
	if (!jestImienna) {
		return
	}

	if (imienneOdzywki.imienneOdzywki(message))
		return

	if (komendy.wykonajKomende(messageArray, message.channel, message.author))
		return
	nieRozumie(message)
})

function nieRozumie(message) {
	var str = message.content.toLowerCase();
	if (str.startsWith(process.env.prefix))
		message.channel.send(dontUndarstand);
}

client.login(process.env.token)
