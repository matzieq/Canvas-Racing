var canvas, canvasContext;
var blueCar = new Car();
var greenCar = new Car();

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
	loadLevel(levelOne);
}

function loadLevel(level) {
	trackGrid = level.slice();
	blueCar.reset(carPic, "Blue Storm");
	greenCar.reset(secondCarPic, "Green Machine");
}


// END MAIN LOGIC

function update() {
	moveStuff();
	drawStuff();
}

function moveStuff() {
    blueCar.move();
    greenCar.move();
}
   
   
function drawStuff() {
    drawTracks();
    blueCar.draw();
    greenCar.draw();
}
