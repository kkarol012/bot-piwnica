require('dotenv').config();
const odzywki = require('./odzywki.js')
const imienneOdzywki = require('./imienneOdzywki.js')

const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
	console.log("started!")
});

const talkedRecently = new Set()

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
	if (imienneOdzywki.imienneOdzywki(message))
		return

})

client.login(process.env.token)
