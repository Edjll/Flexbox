var amountTrueAnswer = 0;
var question = [];
var flexContainer = [];

var defaulInputClass = document.getElementById('firstFlexAttribute').className;
var defaultFlexElements = 'flexElement';

var namesContainers = ['firstFlexContainer', 'secondFlexContainer', 'thirdFlexContainer', 'fourthFlexContainer', 'fivethFlexContainer', 'sixthFlexContainer', 'seventhFlexContainer'];
var namesFlexDirection = ['Row', 'Column', 'RowReverse', 'ColumnReverse'];
var namesFlexWrap = ['Wrap', 'Nowrap', 'WrapReverse'];
var namesFlexFlow = ['ColumnWrap', 'RowWrapReverse', 'RowReverseNowrap', 'ColumnWrapReverse', 'ColumnNowrap', 'RowWrap', 'RowNowrap', 'RowReverseWrap', 'RowReverseWrapReverse', 'ColumnReverseWrap', 'ColumnReverseWrapReverse', 'ColumnReverseNowrap'];
var namesFlexJustifyContent = ['SpaceBetween', 'FlexEnd', 'Center', 'FlexStart', 'SpaceEvenly', 'SpaceAround'];
var namesFlexAlignItems = ['Center', 'FlexStart', 'FlexEnd', 'Baseline', 'Stretch'];
var namesFlexAlignContent = ['FlexEnd', 'FlexStart', 'SpaceAround', 'Center', 'Stretch', 'SpaceBetween', 'SpaceEvenly'];


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

function newName(name) {
	name = name.replace(' ', '');
	name = name.replace('-', '');
	return name;
}

function game(id, type, idBlock, name, number, amountQuestion, names, defaulFlexGame) {
	id.oninput = function() {
		var inputElement = document.getElementById(this.id);
		var classElement = document.getElementById(idBlock);
		var elementsColor = classElement.getElementsByTagName('*');
		var att;
		question[number] = 0;
		inputElement.className = defaulInputClass;
		classElement.className = flexContainer[number];
		colorElements(elementsColor, ' flexElementFalse');
		for (var i = 0; i < names.length; i++) { 
			var inputNewName = newName(inputElement.value);
			if (inputNewName === names[i].toLowerCase()) {
				classElement.className = defaulFlexGame + type + names[i];
				inputElement.className = defaulInputClass + ' falseAnswer';
			}
		}
		if (inputElement.value === name) {
			inputElement.className = defaulInputClass + ' trueAnswer';
			colorElements(elementsColor, ' flexElementTrue');
			question[number] = 1;
		}
		sumAnswer(amountQuestion);
		document.getElementById('result').innerHTML = 'Ваш результат: ' + amountTrueAnswer + ' из ' + amountQuestion +'.';
	} 
}
