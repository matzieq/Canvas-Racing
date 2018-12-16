var canvas, canvasContext;

window.onload = function() {
	canvas = document.querySelector("#gameCanvas");
	canvasContext = canvas.getContext('2d');

	colorRect(0, 0, canvas.width, canvas.height, '#000');
	colorText("LOADING", canvas.width / 2, canvas.height / 2, '#fff');
	loadImages();
}


function startGameAfterLoadingImages() {
	var framesPerSecond = 30;
	setInterval(update, 1000 / framesPerSecond);
	setupInput();
	resetCar();
}


// END MAIN LOGIC

function update() {
	moveStuff();
	drawStuff();
}

function moveStuff() {
    moveCar();
    handleCarAndTrack();
}
   
   
function drawStuff() {
    drawTracks();
    drawCar();
}
