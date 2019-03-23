var amountTrueAnswer = 0;
var question = [];
var flexContainer = [];
var defaulFlexGame = 'flexBlock';
var defaulInputClass = document.getElementById('firstFlexAttribute').className;
var defaultFlexElements = 'flexElement';
var namesContainers = ['firstFlexContainer', 'secondFlexContainer', 'thirdFlexContainer', 'fourthFlexContainer'];
var namesFlexDirection = ['Row', 'Column', 'Reverse'];
var namesFlexWrap = ['Nowrap', 'Wrap', 'Reverse'];
var lengtFlexDirection = [3, 6, 11, 14];
var lengtFlexWrap = [6, 4, 12];

function scanContainer(amountQuestion) {
	for (var i = 0; i < amountQuestion; i++) {
		flexContainer[i] = document.getElementById(namesContainers[i]).className;
	}
}

function arr(amountQuestion) {
	for (var i = 0; i < amountQuestion; i++) {
		question[i] = 0;
	}
}

function sumAnswer(amountQuestion) {
	amountTrueAnswer = 0;
	for (var i = 0; i < amountQuestion; i++) {
		amountTrueAnswer += question[i];
	}
}

function colorElements(elements, color) {
	for (var i = 0; i < elements.length; i++) {
		elements[i].className = defaultFlexElements + color;
	}
}

function game(id, type, idBlock, name, number, amountQuestion, names, limit, length) {
	id.oninput = function() {
		var inputElement = document.getElementById(this.id);
		var classElement = document.getElementById(idBlock);
		var elementsColor = classElement.getElementsByTagName('*');
		var att;
		question[number] = 0;
		inputElement.className = defaulInputClass;
		classElement.className = flexContainer[number];
		colorElements(elementsColor, '');
		for (var i = 0; i < limit; i++) { 
			if (inputElement.value === names[i].toLowerCase()) {
				classElement.className = defaulFlexGame + type + names[i];
				inputElement.className = defaulInputClass + ' falseAnswer';
			}
			if (inputElement.value === (names[i].toLowerCase() + '-' + names[limit].toLowerCase())) {
				classElement.className = defaulFlexGame + type + names[i] + names[limit];
				inputElement.className = defaulInputClass + ' falseAnswer';
			}
		}
		if (inputElement.value === name) {
			for (var i = 0; i < amountQuestion; i++) {
				if (name.length === length[i]) att = names[i];
				if (name.length === length[i] && name.length > 6) att = names[i-limit] + names[limit];
			}
			classElement.className = defaulFlexGame + type + att;
			inputElement.className = defaulInputClass + ' trueAnswer';
			colorElements(elementsColor, ' flexElementTrue');
			question[number] = 1;
		}
		sumAnswer(amountQuestion);
		document.getElementById('result').innerHTML = 'Ваш результат: ' + amountTrueAnswer + ' из ' + amountQuestion +'.';
	} 
}
