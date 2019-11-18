const responseObject = {
	"ping pong": "cing ciang ciong",
	"ping": "pong",
	"pong": "ping",
};
function shortResponses (message) {
    var str = message.content.toLowerCase();
    if (responseObject[str]) {
		message.channel.send(responseObject[str]);
	} else if (str.match(/hau/)) {
		message.channel.send(`${message.author} mówiłam żebyś nie udawał psa.`);
	} else if (str.match(/jestem psem/)) {
		message.channel.send(`${message.author} psem nie, ale kretynem na pewno.`);
	} else if (str.match(/chuj i pizda/)) {
		message.channel.send("w nocy gwizda!");
	} else if (str.match(/a srasz?/)) {
		message.channel.send("sram");
	} else if (str.match(/sranie/)) {
		message.channel.send(`${message.author} Sranie po ścianie...`);
	} else if (str.match(/huj i pizda/)) {
		message.channel.send("w nocy gwizda!");
	} else if (str.match(/liga/)) {
		message.channel.send(">gierki");
	} else if (str.match(/lige/)) {
		message.channel.send(">gierki");
	} else if (str.match(/league of legends/)) {
		message.channel.send(">gierki");
	} else if (str.match(/hots/)) {
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
	} else if (str.match(/twoja locha/)) {
		message.channel.send("już zamknijcie pizdę, poważnie");
	} else if (str.match(/wiedzmin/)) {
		message.channel.send(">gierki");
	} else if (str.match(/wiedźmin/)) {
		message.channel.send(">gierki");
	} else if (str.match(/zajeb mnie/)) {
		message.channel.send(`${message.author} nie mów tak :(`)
	} else if (str.match(/zajebcie mnie/)) {
		message.channel.send(`${message.author} nie mów tak :(`)
	} else if (str.match(/zapierdolcie mnie/)) {
		message.channel.send(`${message.author} nie mów tak :(`)
	} else if (str.match(/jestem gównem/)) {
		message.channel.send(`${message.author} nie mów tak :(`)
	} else if (str.match(/jestem guwnem/)) {
		message.channel.send(`${message.author} nie mów tak :(`)
	} else if (str.match(/jestem gownem/)) {
		message.channel.send(`${message.author} nie mów tak :(`)
	} else if (str.match(/na chuj ja żyje/)) {
		message.channel.send(`${message.author} nie smuć sie :(`)
	} else if (str.match(/na huj ja żyje/)) {
		message.channel.send(`${message.author} nie smuć sie :(`)
	} else if (str.match(/na chuj ja zyje/)) {
		message.channel.send(`${message.author} nie smuć sie :(`)
	} else if (str.match(/na huj ja zyje/)) {
		message.channel.send(`${message.author} nie smuć sie :(`)
	} else if (str.match(/po chuj ja żyje/)) {
		message.channel.send(`${message.author} nie smuć sie :(`)
	} else if (str.match(/po huj ja żyje/)) {
		message.channel.send(`${message.author} nie smuć sie :(`)
	} else if (str.match(/po chuj ja zyje/)) {
		message.channel.send(`${message.author} nie smuć sie :(`)
	} else if (str.match(/po huj ja zyje/)) {
		message.channel.send(`${message.author} nie smuć sie :(`)
    } else {
        return false;
    }
    return true;
}

module.exports = {
    shortResponses: shortResponses
};