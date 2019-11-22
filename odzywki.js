function shortResponses (message) {
    var str = message.content.toLowerCase();
	if (str.match(/\bliga/)) {
		message.channel.send(">gierki");
	} else if (str.match(/\blige/)) {
		message.channel.send(">gierki");
	} else if (str.match(/league of legends/)) {
		message.channel.send(">gierki");
	} else if (str.match(/\bhots/)) {
		message.channel.send(">gierki");
	} else if (str.match(/heroes/)) {
		message.channel.send(">gierki");
	} else if (str.match(/fallout/)) {
		message.channel.send(">gierki");
	} else if (str.match(/falout/)) {
		message.channel.send(">gierki");
	} else if (str.match(/falołt/)) {
		message.channel.send(">gierki");
	} else if (str.match(/lola/)) {
		message.channel.send(">gierki");
	} else if (str.match(/wiedzmin/)) {
		message.channel.send(">gierki");
	} else if (str.match(/wiedźmin/)) {
		message.channel.send(">gierki");
	} else if (str.match(/wowik/)) {
		message.channel.send(">gierki");
	} else if (str.match(/workd of warcraft/)) {
		message.channel.send(">gierki");
    } else {
        return false;
    }
    return true;
}

module.exports = {
    shortResponses: shortResponses
};