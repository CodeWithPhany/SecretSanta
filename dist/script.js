window.onload = () => drawList();

// Change this list to your friends!
const give = [
  'Fanny',
  'Matilda',
  'Mamma',
  'Pappa',
  'Theresa',
  'Magnus',
  'Linda',
  'Lars-Åke'
];

var receive = give.concat();
var peopleWrap = document.getElementById('peopleWrap');
var people = document.getElementById('people');
var choose = document.getElementById('choose');
var result = document.getElementById('result');
var close = document.getElementById('close');

const drawList = () => {
	people.innerHTML = '<option value="">Who are you?</option>';
	give.forEach((person, i) => {
		let option = document.createElement('option');
		option.value = i;
		option.innerHTML = person;
		people.appendChild(option);
	} )
}

const selectPerson = person => {
	let name = give[person];
	let nameIndex = receive.indexOf(name);

	if (nameIndex >= 0) {
		receive.splice(nameIndex, 1);
	}

	let recipient = Math.floor((Math.random() * receive.length));
	let recipientName = receive[recipient];

	receive.splice(recipient, 1);
	give.splice(person, 1);

	if (nameIndex >= 0) {
		receive.push(name);
	}

	result.innerHTML = "<h2>" + name + ", you&rsquo;ve got " + recipientName + "!</h2>";
	close.innerHTML = "Okay. Destroy this message.";

  if (give.length > 0) {
		drawList();
	}
}

choose.onclick = () => {
	if (people.value) {
		selectPerson(people.value);
	}
};

close.onclick = () => {
	result.innerHTML = "";
	close.innerHTML = "";
  if (give.length == 0) {
    peopleWrap.parentNode.removeChild(peopleWrap);
		choose.parentNode.removeChild(choose);
		result.innerHTML = "<h2>All done!</h2>";
		close.innerHTML = "";
	}
}
