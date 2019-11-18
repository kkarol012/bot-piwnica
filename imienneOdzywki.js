const seconds = 1000
const minutes = seconds * 60
const hours = minutes * 60

const checkMessage = (s) => {
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
    
	if (checkMessage(message.content)) {
		message.channel.send(`Wie pan co panie ${message.author}, bardzo brzydko!`);
	} else if (str.match(/ping/)) {
		message.channel.send("pong!");
	} else if (str.match(/spierdalaj/)) {
		message.channel.send('sam spierdalaj!');
	} else if (str.match(/szmato/)) {
		message.channel.send("szmatą ty jesteś, wsadź chuja do pieca.");
	} else if (str.match(/szmatą/)) {
		message.channel.send("szmatą ty jesteś, wsadź chuja do pieca.");
	} else if (str.match(/głupia/)) {
		message.channel.send(`${message.author} co głupia baranie?`);
	} else if (str.match(/glupia/)) {
		message.channel.send(`${message.author} co głupia baranie?`);
	} else if (str.match(/tępa/)) {
		message.channel.send(`${message.author} no i sie zesrał`);
	} else if (str.match(/tempa/)) {
		message.channel.send(`${message.author} no i sie zesrał`);
	} else if (str.match(/jestes glupia/)) {
		message.channel.send(`${message.author} i wciąż jestem mądrzejsza od ciebie`);
	} else if (str.match(/jesteś glupia/)) {
		message.channel.send(`${message.author} i wciąż jestem mądrzejsza od ciebie`);
	} else if (str.match(/jesteś głupia/)) {
		message.channel.send(`${message.author} i wciąż jestem mądrzejsza od ciebie`);
	} else if (str.match(/jestes głupia/)) {
		message.channel.send(`${message.author} i wciąż jestem mądrzejsza od ciebie`);
	} else if (str.match(/pierdol/)) {
		message.channel.send('pierdol się sam ze swoją kochanką renią!');
	} else if (str.match(/chuj/)) {
		message.channel.send('chuj to twoje żarcie, wiecznie doskwiera ci głod.');
	} else if (str.match(/huj/)) {
		message.channel.send('chuj to twoje żarcie, wiecznie doskwiera ci głod.');
	} else if (str.match(/kurwo/)) {
		message.channel.send('pomyliłeś mnie z matką chłopczyku');
	} else if (str.match(/kurwom/)) {
		message.channel.send('pomyliłeś mnie z matką chłopczyku');
	} else if (str.match(/kurwa/)) {
		message.channel.send('pomyliłeś mnie z matką chłopczyku');
	} else if (str.match(/czym jest smalec?/)) {
		message.channel.send("Smalec to przyjaciel.");
	} else if (str.match(/czym jest czapka?/)) {
		message.channel.send("Fajny gość, duży i przystojny.");
	} else if (str.match(/czym jest kazu?/)) {
		message.channel.send("Dobry chłopak.");
	} else if (str.match(/czym jest wiking?/)) {
		message.channel.send("Dobry chłopak, troche zagubiony, ale ma fajny styl.");
	} else if (str.match(/czym jest pasza?/)) {
		message.channel.send("Kretynem.");
	} else if (str.match(/czym jest ganq?/)) {
		message.channel.send("zamknij morde");
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