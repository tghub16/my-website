//the class to make questions and answers for a card
class Card {
	constructor(question, answer) {
		this._question = question;
		this._answer = answer;
	}

	get question() {
		return this._question;
	}

	get answer() {
		return this._answer;
	}
};



//creates deck array
let cards = [];



//sets first card
function firstCard() {
	document.getElementById('front').innerHTML = cards[0].question;
	document.getElementById('back').innerHTML = cards[0].answer;
	flipToQuestion();
};



//randomizes deck order
function randomizeDeck() {
	for (let i = cards.length - 1; i > 0; i--) {
	    let j = Math.floor(Math.random() * (i + 1));
	    [cards[i], cards[j]] = [cards[j], cards[i]];
	}
};



//flips card
function flipCard() {
	let cardIdVar = document.getElementById('cardId');

	if (cardIdVar.classList.contains('flip')) {
		cardIdVar.classList.remove('flip');
	} else {
		cardIdVar.classList.add('flip');
	}
};



//flips card back to question side
function returnTransitionLength() {
	let cardIdVar = document.getElementById('cardId');
	cardIdVar.style.transition = "1s";
};

function flipToQuestion() {
	let cardIdVar = document.getElementById('cardId');
	cardIdVar.style.transition = "0s";
	if (cardIdVar.classList.contains('flip')) {
		cardIdVar.classList.remove('flip');
		setTimeout(returnTransitionLength, 1); 
	} else {
		returnTransitionLength();
	}
};



//gets new card
let cardCounter = 0;

function nextCard() {
	if (cardCounter < cards.length - 1) {
		flipToQuestion();
		cardCounter++;
		document.getElementById('front').innerHTML = cards[cardCounter].question;
		document.getElementById('back').innerHTML = cards[cardCounter].answer;
	} else {
		flipToQuestion();
		cardCounter = 0;
		document.getElementById('front').innerHTML = cards[cardCounter].question;
		document.getElementById('back').innerHTML = cards[cardCounter].answer;
	}
};



//retrieves last card
function lastCard() {
	if (cardCounter > 0) {
		flipToQuestion();
		cardCounter--;
		document.getElementById('front').innerHTML = cards[cardCounter].question;
		document.getElementById('back').innerHTML = cards[cardCounter].answer;
	} else {
		flipToQuestion();
		cardCounter = cards.length - 1;
		document.getElementById('front').innerHTML = cards[cardCounter].question;
		document.getElementById('back').innerHTML = cards[cardCounter].answer;
	}
};



//resets deck
function reshuffle() {
	if (cards.length > 0) {
		let cardCounter = 0;
		randomizeDeck();
		firstCard();
	} else {}
};



//submits new note card
function submitCard() {
	let createdCard = new Card(
		document.getElementById('newQuestion').value,
		document.getElementById('newAnswer').value
	);

	document.getElementById('newQuestion').value = '';
	document.getElementById('newAnswer').value = '';

	let cardCounter = 0;
	cards.push(createdCard);
	firstCard();

	document.getElementById('deckPage').style.display = "flex";
	document.getElementById('createCardPage').style.display = "none";
};



//deletes a note card
function deleteCard() {
	if (cards.length > 1) {
		if (cardCounter + 1 < cards.length) {
			cards.splice(cardCounter, 1);
			document.getElementById('front').innerHTML = cards[cardCounter].question;
			document.getElementById('back').innerHTML = cards[cardCounter].answer;
			flipToQuestion();
		} else {
			cards.splice(cardCounter, 1);
			cardCounter = 0;
			document.getElementById('front').innerHTML = cards[cardCounter].question;
			document.getElementById('back').innerHTML = cards[cardCounter].answer;
			flipToQuestion();
		}
	} else if (cards.length = 1) {
			cards.splice(cardCounter, 1);
			document.getElementById('front').innerHTML = '';
			document.getElementById('back').innerHTML = '';
			flipToQuestion();
	} else {}
};



//displays save files
function load(x) {
	cards = [];

	identifiersLoad = [];
	cardsLoad = [];

	getSaveFiles();

	for (let i = 0; i < cardsLoad[x].length; i++) {
		let loadingCard = new Card(
			cardsLoad[x][i]._question,
			cardsLoad[x][i]._answer
		)

		cards.push(loadingCard);
	}
	
	let cardCounter = 0;
	firstCard();

	let list = document.getElementById("saveFiles");
	
    document.getElementById("saveFiles").innerHTML = "";

	document.getElementById('deckPage').style.display = "flex";
	document.getElementById('loadDeckPage').style.display = "none";
};

function deleteFile(x) {
	localStorage.removeItem(localStorage.key(x));

	let list = document.getElementById("saveFilesDel");
	
    document.getElementById("saveFilesDel").innerHTML = "";

	document.getElementById('deckPage').style.display = "flex";
	document.getElementById('deleteDeckPage').style.display = "none";
};

function displaySaveFiles(x, y) {
	identifiersLoad = [];
	cardsLoad = [];

	getSaveFiles();

	for (let i = 0; i < identifiersLoad.length; i++) {
		let div = document.getElementById(x);
		let button= document.createElement("button");
		button.setAttribute("id", "loadfile" + i);
		button.setAttribute("class", "loadfile");
		button.appendChild(document.createTextNode(identifiersLoad[i]));
		div.appendChild(button);
		document.getElementById("loadfile" + i).setAttribute("onclick", y + "(" + i + ")");
	}
}



//return to deck page
function returnToDeckPage(extFrom, dataClrd, dataClrd2) {
	document.getElementById('deckPage').style.display = "flex";
	document.getElementById(extFrom).style.display = "none";

	document.getElementById(dataClrd).innerHTML = "";
	document.getElementById(dataClrd).value = "";

	document.getElementById(dataClrd2).innerHTML = "";
	document.getElementById(dataClrd2).value = "";
};



//go to save deck page
let identifiersLoad = [];
let cardsLoad = [];

function getSaveFiles() {
	for (let i = 0; i < localStorage.length; i++) {
		const identifierLoad = localStorage.key(i);
		const cardLoad = JSON.parse(localStorage.getItem(identifierLoad));
		const identifierLoadParsed = JSON.parse(identifierLoad);

		identifiersLoad.push(identifierLoadParsed);
		cardsLoad.push(cardLoad);
	}
}



//saves deck
let savCounter = 0;
function submitSave() {
	let identifier = document.getElementById('saveInput').value;

	identifiersLoad = [];
	cardsLoad = [];

	getSaveFiles();

	if (identifiersLoad.includes(identifier) == false && identifier !== "") {
		class saveFile {
			constructor(identifier, cards) {
				this._identifier = identifier;
				this._cards = cards;
			}

			get identifier() {
				return this._identifier;
			}

			get cards() {
				return this._cards;
			}
		}

		let createdSaveFile = new saveFile(identifier, cards);

		let ident = JSON.stringify(createdSaveFile.identifier);
		let crds = JSON.stringify(createdSaveFile.cards);

		localStorage.setItem(ident, crds);
	} else if (identifiersLoad.includes(identifier)) {
		alert("Please Type a new name.")
		return;
	} else {
		alert('Please type a name');
		return;
	}

	document.getElementById("saveInput").value = "";

	document.getElementById('deckPage').style.display = "flex";
	document.getElementById('saveDeckPage').style.display = "none";
};



//goes to different pages when button clicked
function createCardPage() {
	document.getElementById('deckPage').style.display = "none";
	document.getElementById('createCardPage').style.display = "flex";
};

function deleteDeckPage() {
	let loadCounter = 0;

	displaySaveFiles("saveFilesDel", "deleteFile");

	document.getElementById('deleteDeckPage').style.display = "flex";
	document.getElementById('deckPage').style.display = "none";
}

function saveDeckPage() {
	if (cards.length == 0) {
		alert("Please make cards");
	} else {
		document.getElementById('deckPage').style.display = "none";
		document.getElementById('saveDeckPage').style.display = "flex";
	}
};

let loadCounter = 0;

function loadDeckPage() {
	displaySaveFiles("saveFiles", "load");

	document.getElementById('deckPage').style.display = "none";
	document.getElementById('loadDeckPage').style.display = "flex";
};