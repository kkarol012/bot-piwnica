const axios = require("axios");
require("dotenv").config();

function rozmawiaj(message) {
  url = "https://www.cleverbot.com/getreply";
  input = encodeURIComponent(message.content);
  kluczKonversacji = global.inConversation.get(message.author.id)[1];

  axios
    .get(url, {
      params: {
        key: process.env.CLEVER_BOT_KEY,
        input: input,
        cs: kluczKonversacji,
      },
    })
    .then((res) => {
      clearTimeout(global.inConversation.get(message.author.id)[2]);
      timer = setTimerTodelete;
      global.inConversation.set(message.author.id, [
        message.channel.id,
        res.data.cs,
        timer,
      ]);
      text = res.data.output;
      message.channel.send(decodeURIComponent(escape(text)));
      message.channel.send(res.data);
    })
    .catch((error) => {
      console.log(error);
      message.channel.send("Coś się... coś się popsuło");
    });
}

function czyTrwaRozmowaZCleverBotem(author, channel) {
  return (
    global.inConversation.has(author.id) &&
    global.inConversation.get(author.id)[0] === channel.id
  );
}

function startKonwersacji(channel, author) {
  if (czyTrwaRozmowaZCleverBotem(author, channel)) {
    channel.send("aktualnie trwa nasza rozmowa");
    return;
  }
  channel.send(`Cześć, właśnie rozpoczeliśmy rozmowę. 
    Od teraz będę się uważać jako adrest twoich wiadomości.
    Nie musisz poprzedzać wiadomości moim imieniem.
    Jeśli chcesz zakończyć napisz \`${process.env.PREFIX} staph\`. Po 5 minutach nieaktywności uznaję rozmowę za skończoną.`);
  timer = setTimerTodelete();
  global.inConversation.set(author.id, [channel.id, "", timer]);
}

function setTimerTodelete() {
  return setTimeout(() => {
    global.inConversation.delete(message.author.id);
  }, 300000);
}

module.exports = {
  czyTrwaRozmowaZCleverBotem: czyTrwaRozmowaZCleverBotem,
  startKonwersacji: startKonwersacji,
  rozmawiaj: rozmawiaj,
};
