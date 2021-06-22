function setClock(secondsDiv, minutesDiv, hoursDiv, yearDiv01, yearDiv02, yearDiv03, yearDiv04, monthDiv01, monthDiv02, monthDiv03, dayLettersDiv01, dayLettersDiv02, dayLettersDiv03, dayNumDiv01, dayNumDiv02 ) {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = seconds * 360 / 60 + 90;
	secondsDiv.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDegrees = minutes * 360 / 60 + 90;
	minutesDiv.style.transform = `rotate(${minutesDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = hours * 360 / 12 + 90;
	hoursDiv.style.transform = `rotate(${hoursDegrees}deg)`;

	const year = now.getFullYear();
	yearDiv01.innerText = (year + '')[0];
	yearDiv02.innerText = (year + '')[1];
	yearDiv03.innerText = (year + '')[2];
	yearDiv04.innerText = (year + '')[3];

	const month = new Intl.DateTimeFormat('fr-FR', { month: 'short' }).format(now).split('.')[0].toUpperCase();
	monthDiv01.innerText = month[0];
	monthDiv02.innerText = month[1];
	monthDiv03.innerText = month[2];

	const dayLetters = new Intl.DateTimeFormat('fr-FR', { weekday: 'short' }).format(now).split('.')[0].toUpperCase();
	dayLettersDiv01.innerText = dayLetters[0];
	dayLettersDiv02.innerText = dayLetters[1];
	dayLettersDiv03.innerText = dayLetters[2];


	const dayNum = now.getUTCDate();
	if (dayNum.toString().length == 1) {
		dayNumDiv01.innerText = '0';
		dayNumDiv02.innerText = (dayNum + '');
	} else {
		dayNumDiv01.innerText = (dayNum + '')[0];
		dayNumDiv02.innerText = (dayNum + '')[1];
	}
}
function myFunction(p1, p2) {
	return p1 * p2;
}
