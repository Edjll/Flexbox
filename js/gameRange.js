
var amountTrueAnswer = 0;
var names = [ '0', '1', '2', '3', '4', '5', '-1', '-2', '-3', '-4', '-5'];
var defaulInputClass = document.getElementById('firstFlexAttribute').className;
var question = [];
var defaultFlexElements;

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

function newName(name) {
 	name = name.replace('-', '_');
	return name;
}

function gameRange(id, idContainer, idBlock, type, name, number, amountQuestion, idTask, defaultClassBlock) {
	id.oninput = function() {
		var inputElement = document.getElementById(this.id);
	 	defaultFlexElements = 'flexElement' + defaultClassBlock;
		var elementsColor = idContainer.getElementsByClassName('flexElement');
		var classElement = document.getElementById(idBlock);
		question[number] = 0;
		inputElement.className = defaulInputClass;
		colorElements(elementsColor, ' flexElementFalse', classElement);
		var newNames = [];
		for (var i = 0; i < names.length; i++) { 
			if (inputElement.value === names[i]) {
				newNames[i] = newName(names[i]);
				classElement.className = 'flexElement' + type + newNames[i] + ' flexElementFalse';
				inputElement.className = defaulInputClass + ' falseAnswer';
			}
		}
		if (inputElement.value === name) {
			inputElement.className = defaulInputClass + ' trueAnswer';
			var t;
			(inputElement.value < 0)?(t = Math.abs(inputElement.value) + 5):(t = inputElement.value);
			var block = 'flexElement' + type + newNames[t];
			colorElements(elementsColor, ' flexElementTrue', classElement, block);
			question[number] = 1;
		}
		sumAnswer(amountQuestion);
		if (type ===' flexFlexBasis') {
			var x = (inputElement.value*20 !== 0)?'%':'';
			idTask.innerHTML = inputElement.value*20 + x;
		} else idTask.innerHTML = inputElement.value;
		result.innerHTML = 'Ваш результат: ' + amountTrueAnswer + ' из ' + amountQuestion +'.';
	} 
}
