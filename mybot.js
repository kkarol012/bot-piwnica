require("dotenv").config();
const komendy = require("./komendy.js");
const cleverChat = require("./cleverChat.js");

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("started!");
  client.guilds.forEach((guild) => {
    console.log(" - " + guild.name);
  });
});

global.inConversation = new Map();
const talkedRecently = new Set();
const dontUndarstand =
  "Nie rozumiem sempai ;_; Jeśli chcesz mema napisz `meme` lub `trollmeme`";
const TROLL_IDS = process.env.TROLL_IDS.split(";");
const FORBIDDEN = [
  "https://tenor.com/view/shit-ton-poop-rhino-gif-15151913",
  "biodr",
  "bioder",
];

client.on("message", (message) => {
  if (message.author.bot) return;
  if (TROLL_IDS.includes(message.author.id)) {
    FORBIDDEN.forEach((el) => {
      if (message.content.includes(el)) {
        message.delete().catch(console.error);
        return;
      }
    });
    const random = Math.random() * 100 + 1;
    if (random < Number(process.env.TROLL_CHANCE)) {
      message.delete().catch(console.error);
      return;
    }
  }
  if (talkedRecently.has(message.author.id)) return;
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 3000);

  var messageArray = message.content.toLowerCase().split(" ");
  var jestImienna = messageArray[0] === process.env.PREFIX;
  if (cleverChat.czyTrwaRozmowaZCleverBotem(message.author, message.channel)) {
    if (jestImienna && messageArray[1] === "staph") {
      global.inConversation.delete(message.author.id);
      message.channel.send("Dziękuję za miłą rozmowę");
      return;
    } else {
      cleverChat.rozmawiaj(message);
    }
  }

  if (!jestImienna) {
    return;
  }

  if (
    komendy.wykonajKomende(
      messageArray,
      message.channel,
      message.author,
      message
    )
  )
    return;
  nieRozumie(message);
});

function nieRozumie(message) {
  var str = message.content.toLowerCase();
  if (str.startsWith(process.env.PREFIX)) message.channel.send(dontUndarstand);
}

client.login(process.env.TOKEN);
