
var amountTrueAnswer = 0;
var namesGrow = ['0', '1', '2', '3', '4', '5'];
var defaulInputClass = document.getElementById('firstFlexAttribute').className;
var question = [];
var defaultFlexElements = 'flexElement flexFlexGrow1';
var namesContainers = ['firstTask', 'secondTask'];


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

function colorElements(elements, color, classElement, block) {
	for (var i = 0; i < elements.length; i++) {
		elements[i].className = defaultFlexElements + color;
	}
	if (block != null) classElement.className = block + color;
}

function arr(amountQuestion) {
	for (var i = 0; i < amountQuestion; i++) {
		question[i] = 0;
	}
}

function gameRange(id, idContainer, idBlock, type, names, name, number, amountQuestion, idTask) {
	id.oninput = function() {
		var inputElement = document.getElementById(this.id);

		var elementsColor = idContainer.getElementsByClassName('flexElement');
		var classElement = document.getElementById(idBlock);
		question[number] = 0;
		inputElement.className = defaulInputClass;
		colorElements(elementsColor, ' flexElementFalse', classElement);
		for (var i = 0; i < names.length; i++) { 
			if (inputElement.value === names[i]) {
				classElement.className = 'flexElement' + type + names[i] + ' flexElementFalse';
				inputElement.className = defaulInputClass + ' falseAnswer';
			}
		}
		if (inputElement.value === name) {
			inputElement.className = defaulInputClass + ' trueAnswer';
			var block = 'flexElement' + type + names[inputElement.value];
			colorElements(elementsColor, ' flexElementTrue', classElement, block);
			question[number] = 1;
		}
		sumAnswer(amountQuestion);
		idTask.innerHTML = inputElement.value;
		result.innerHTML = 'Ваш результат: ' + amountTrueAnswer + ' из ' + amountQuestion +'.';
	} 
}

arr(2);

gameRange(firstFlexAttribute, firstFlexContainer, 'firstTask', ' flexFlexGrow', namesGrow, '2', 0, 2, answer1);
gameRange(secondFlexAttribute, secondFlexContainer, 'secondTask', ' flexFlexGrow', namesGrow, '4', 1, 2, answer2);