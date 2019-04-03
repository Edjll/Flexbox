imgScale.onclick = function() {
	var tagMain = document.getElementsByTagName('main');
	var div = document.createElement('div');
	div.className = 'imgFull';

	var img = imgScale.cloneNode(false);
	img.className += ' cloneImg';

	var button = document.createElement('button');
	button.className = 'imgButton';
	button.setAttribute('id', 'imgClose');

	div.insertBefore(img, div.children[0]);
	div.insertBefore(button, div.children[1]);
	tagMain[0].insertBefore(div, tagMain[0].children[0]);

	imgClose.onclick = function() {
		div.className += ' imgFullClose';
		setTimeout(function view() {
			tagMain[0].removeChild(tagMain[0].children[0]);
		}, 400);
	}
}
