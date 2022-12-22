const axios = require("axios");
require("dotenv").config();

function fetchMemes(query, channel) {
  const page = Math.floor(Math.random() * 10);
  axios
    .post(
      "https://a2.wykop.pl/Search/Entries/page/" +
        page +
        "/appkey/" +
        process.env.WYKOP_KEY +
        "?q=%23" +
        query +
        "&data=compacted&return=embed",
      {}
    )
    .then((res) => {
      const url = getMemeFromResponse(res.data.data, 0);
      channel.send({ files: [url] });
    })
    .catch((error) => {
      console.log(error);
      channel.send("Coś się... coś się popsuło");
    });
}

function getMemeFromResponse(data, infLoopPrevention) {
  let item = Math.floor(Math.random() * data.length);
  if (
    (data[item].embed === undefined && infLoopPrevention <= 25) ||
    data[item].embed.type !== "image"
  ) {
    return getMemeFromResponse(data, ++infLoopPrevention);
  }
  return data[item].embed.url;
}

function handleWykop(command, channel) {
  if (command === "trollmeme") {
    fetchMemes("hanuszki", channel);
  } else if (command === "meme") {
    fetchMemes("humorobrazkowy", channel);
  } else {
    return false;
  }
  return true;
}

module.exports = {
  handleWykop: handleWykop,
};
