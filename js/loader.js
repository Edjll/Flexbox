document.body.onload = function() {

	setTimeout(function() {
		var preloader = document.getElementById('preloader');
		if (!preloader.classList.contains('loadEnd')) preloader.className += ' loadEnd';
	}, 1000);

}