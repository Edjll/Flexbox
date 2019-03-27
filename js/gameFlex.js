
var amountTrueAnswer = 0;
var names = ['0', '1', '2', '3', '4', '5'];
var question = [];
var types = [' flexFlexGrow', ' flexFlexShrink', ' flexFlexBasis'];


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
		elements[i].className = 'flexElement' + color;
	}
	if (block != null) classElement.className = block + color;
}

function arr(amountQuestion) {
	for (var i = 0; i < amountQuestion; i++) {
		question[i] = 0;
	}
}

function gameRange(idContainer, idBlock, number, amountQuestion, inputs, trueAnswer1, trueAnswer2, trueAnswer3) {
	inputs.oninput = function() {
		var trueAnswer = [trueAnswer1, trueAnswer2, trueAnswer3];
		var inputElement = this.getElementsByClassName('gameInput');
		var elementsColor = idContainer.getElementsByClassName('flexElement');
		var classElement = document.getElementById(idBlock);
		var type;
		var answer = this.getElementsByClassName('answer');
		question[number] = 0;
		colorElements(elementsColor, ' flexElementFalse', classElement);
		var newNames = [];
		var block =  'flexElement' + ' flexElementFalse';
		for (var i = 0; i < names.length; i++) { 	
			if (inputElement[0].value === names[i]) {
				type = types[0];
				block += type + names[i];
			}
			if (inputElement[1].value === names[i]) {
				type = types[1];
				block += type + names[i];
			}
			if (inputElement[2].value === names[i]) {
				type = types[2];
				block += type + names[i];
			}
		}
		classElement.className = block;
		if (inputElement[0].value === trueAnswer[0] && inputElement[1].value === trueAnswer[1] && inputElement[2].value === trueAnswer[2]) {
			block = 'flexElement';
			for (var i = 0; i < 3; i++) {
				if (inputElement[i].value === trueAnswer[i]) {
					type = types[i];
					block += type + trueAnswer[i];
				}
				console.log(block);
			}
			colorElements(elementsColor, ' flexElementTrue', classElement, block);
			question[number] = 1;
		}
		sumAnswer(amountQuestion);
		for (var i = 0; i < 3; i++) {
			if (types[i] ===' flexFlexBasis') {
				var x = (inputElement[i].value !== '0')?'%':'';
				answer[i].innerHTML = inputElement[i].value*20 + x;
			} else answer[i].innerHTML = inputElement[i].value;
		}
		result.innerHTML = 'Ваш результат: ' + amountTrueAnswer + ' из ' + amountQuestion +'.';
	} 
}
