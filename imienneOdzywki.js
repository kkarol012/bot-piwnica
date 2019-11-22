const checkSexualContent = (s) => {
	let matches = [];
	const regs = [/.jeba./, /.gwalci./, /sex/, /seks.*/, /sex.*/];
	regs.forEach(reg => matches.push(s.match(reg)));
	return matches.filter(v => v != null).length > 0 ? true : false;
}

function imienneOdzywki(message) {
	var str = message.content.toLowerCase();
	if (checkSexualContent(message.content)) {
		message.channel.send(`Wie pan co panie ${message.author}, bardzo brzydko!`);
	} else if (str.match(/chuj i pizda/)) {
		message.channel.send("w nocy gwizda!");
	} else if (str.match(/a srasz?/)) {
		message.channel.send("sram");
	} else {
		return false
	}
	return true;
}

module.exports = {
	imienneOdzywki: imienneOdzywki
};