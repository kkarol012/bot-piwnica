const seconds = 1000
const minutes = seconds * 60
const hours = minutes * 60

const checkSexualContent = (s) => {
	let matches = [];
	const regs = [/.jeba./, /.gwalci./, /sex/, /seks.*/, /sex.*/];
	regs.forEach(reg => matches.push(s.match(reg)));
	return matches.filter(v => v != null).length > 0 ? true : false;
}
function licz(message) {
    var num = parseInt(message.content.replace(/^\D+/g, ''))
    if (num < 1) {
        message.channel.send('Nie ma takiej liczby');
        return
    }
    for (var i = 1; (i <= num && i <= 3); i++) {
        message.channel.send(i);
    }
    if (num > i) {
        message.channel.send('dalej mi się nie chce');
    }
    message.channel.send('Proszę bardzo sempai :3');
}

function przypominaj(str, channel, author) {
	var reminderPos = str.indexOf(':');
	if (reminderPos === -1) {
		channel.send('Napisz po dwukropku o czym mam przypomnieć ;)');
		return;
    }
    var reminderTime = str.indexOf('za');
	if (reminderTime === -1) {
		channel.send('Nie powiedziałeś kiedy mam przypomnieć głuptasie. Użyj magicznego słówka "za".');
		return;
    }
	var reminder = str.substring(++reminderPos, reminderTime);
	var time = 0;
	var match = str.match(/\d+/);
	var num = 1;
	if (match != null) {
		num = match[0];
	}
	if (str.match(/minut.*/)) {
		time = num * minutes;
	}
	if (str.match(/godzin.*/)) {
		time = num * hours;
	}
	if (str.match(/sekund.*/)) {
		time = num * seconds;
	}
	if (time === 0) {
		channel.send('Nie poprawne jednostki czasu. Użyj tych: godziny, minuty, sekundy');
		return;
	}
	channel.send('Dobrze przystojniaku. Przypomnę Panu :3');
	setTimeout(function () {
		channel.send(`${author} nieśmiało przypominam o: ` + reminder);
	}, time);
	return;
}


function imienneOdzywki(message) {
    var str = message.content.toLowerCase();
    if (!str.startsWith(process.env.prefix) || message.author.bot) return false;
    
	if (checkSexualContent(message.content)) {
		message.channel.send(`Wie pan co panie ${message.author}, bardzo brzydko!`);
	} else if (str.match(/licz do/)) {
        licz(message)
	} else if (str.match(/chuj i pizda/)) {
		message.channel.send("w nocy gwizda!");
	} else if (str.match(/a srasz?/)) {
		message.channel.send("sram");
	} else if (str.match(/przypomnij/)) {
		przypominaj(str, message.channel, message.author);
	} else {
		return false
	}
    return true;
}

module.exports = {
    imienneOdzywki: imienneOdzywki
};