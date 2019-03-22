var amountTrueAnswer = 0;
var question = [];
var flexContainerDefault = document.getElementById('firstFlexContainer').className;
var defaulInputClass = document.getElementById('firstFlexAttribute').className;
var names = ['Row', 'Column', 'Reverse'];
var lengtFlexDirection = [3, 6, 11, 14];


function arr(amountQuestion) {
	for (var i = 0; i < amountQuestion; i++) {
		question[i] = 0;
	}
}

arr(4);

function sumAnswer(amountQuestion) {
	amountTrueAnswer = 0;
	for (var i = 0; i < amountQuestion; i++) {
		amountTrueAnswer += question[i];
	}
}

function game(id, type, idBlock, name, number, amountQuestion) {
	id.oninput = function() {
		var inputElement = document.getElementById(this.id);
		var classElement = document.getElementById(idBlock);
		var att;
		question[number] = 0;
		inputElement.className = defaulInputClass;
		for (var i = 0; i < 2; i++) { 
			if (inputElement.value === names[i].toLowerCase()) {
				classElement.className = flexContainerDefault + type + names[i];
				inputElement.className = defaulInputClass + ' falseAnswer';
			}
			if (inputElement.value === (names[i].toLowerCase() + '-' + names[2].toLowerCase())) {
				classElement.className = flexContainerDefault + type + names[i] + names[4];
				inputElement.className = defaulInputClass + ' falseAnswer';
			}
		}
		if (inputElement.value === name) {
			for (var i = 0; i < amountQuestion; i++) {
				if (name.length === lengtFlexDirection[i]) att = names[i];
				if (name.length === lengtFlexDirection[i] && name.length > 6) att = names[i-2] + names[2];
			}
			classElement.className = flexContainerDefault + type + att;
			inputElement.className = defaulInputClass + ' trueAnswer';
			question[number] = 1;
		}
		sumAnswer(amountQuestion);
		document.getElementById('result').innerHTML = 'Ваш результат: ' + amountTrueAnswer + ' из ' + amountQuestion +'.';
	} 
}

game (firstFlexAttribute, ' flexDirection', 'firstFlexContainer', 'column', 0, 4);
game (secondFlexAttribute, ' flexDirection', 'secondFlexContainer', 'row-reverse', 1, 4);
game (thirdFlexAttribute, ' flexDirection', 'thirdFlexContainer', 'column-reverse', 2, 4);
game (fourthFlexAttribute, ' flexDirection', 'fourthFlexContainer', 'row', 3, 4);