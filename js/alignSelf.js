var amountTrueAnswer = 0;
var question = [];

var defaulInputClass = document.getElementById('firstFlexAttribute').className;
var defaultFlexElements = 'flexElement';

var names = ['Center', 'Flex-Start', 'Flex-End', 'Baseline', 'Stretch'];

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
	console.log(elements);
	for (var i = 0; i < elements.length; i++) {
		elements[i].className = defaultFlexElements + color;
	}
	if (block != null) classElement.className = block + color;
}

function newName(name) {
 	name = name.replace(' ', '');
 	name = name.replace(/-/g, '');
	return name;
}

arr(5);


function game(id, idContainer, idBlock, type, name, number, amountQuestion, defaultClassBlock) {
	id.oninput = function() {
		var inputElement = document.getElementById(this.id);
		inputElement.value = inputElement.value.toLowerCase();
	 	defaultFlexElements = 'flexElement' + defaultClassBlock;
		var elementsColor = idContainer.getElementsByClassName('flexElement');
		var classElement = document.getElementById(idBlock);
		var block;
		question[number] = 0;
		classElement.className = defaultFlexElements;
		colorElements(elementsColor, ' falseAnswer');
		inputElement.className = defaulInputClass;
		var newNames = [];
		for (var i = 0; i < names.length; i++) { 
			if (inputElement.value === names[i].toLowerCase()) {
				newNames[i] = newName(names[i]);
				block = 'flexElement' + type + newNames[i];
				colorElements(elementsColor, ' falseAnswer', classElement, block);
				inputElement.className = defaulInputClass + ' falseAnswer';
			}
		}
		if (inputElement.value === name.toLowerCase()) {
			inputElement.className = defaulInputClass + ' trueAnswer';
			block = 'flexElement' + type + newName(name);
			colorElements(elementsColor, ' trueAnswer', classElement, block);
			question[number] = 1;
		}
		sumAnswer(amountQuestion);
		result.innerHTML = 'Ваш результат: <b>' + amountTrueAnswer + '</b> из <b>' + amountQuestion +'</b>.';
	} 
}

game(firstFlexAttribute, firstFlexContainer, 'task1', ' flexAlignSelf', 'Flex-Start', 0, 5, '');
game(secondFlexAttribute, secondFlexContainer, 'task2', ' flexAlignSelf', 'Stretch', 1, 5, '');
game(thirdFlexAttribute, thirdFlexContainer, 'task3', ' flexAlignSelf', 'Flex-End', 2, 5, '');
game(fourthFlexAttribute, fourthFlexContainer, 'task4', ' flexAlignSelf', 'Baseline', 3, 5, '');
game(fivethFlexAttribute, fivethFlexContainer, 'task5', ' flexAlignSelf', 'Center', 4, 5, '');