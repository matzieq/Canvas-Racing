var mouseX;
var mouseY;

var KEY_LEFT_ARROW = 37;
var KEY_RIGHT_ARROW = 39;
var KEY_UP_ARROW = 38;
var KEY_DOWN_ARROW = 40;

var KEY_W = 87;
var KEY_A = 65;
var KEY_S = 83;
var KEY_D = 68;


function setupInput() {
    canvas.addEventListener('mousemove', handleMouse);
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
    blueCar.setupInput(KEY_UP_ARROW, KEY_DOWN_ARROW, KEY_RIGHT_ARROW, KEY_LEFT_ARROW);
    greenCar.setupInput(KEY_W, KEY_S, KEY_D, KEY_A);
}

function keySet(event, car, setTo) {
    if (event.keyCode === car.controlKeyLeft) {
        car.keyHeld_TurnLeft = setTo;
    } 
    
    if (event.keyCode === car.controlKeyRight) {
        car.keyHeld_TurnRight = setTo;
    } 
    
    if (event.keyCode === car.controlKeyUp) {
        car.keyHeld_Gas = setTo;
    } 
    
    if (event.keyCode === car.controlKeyDown) {
        car.keyHeld_Reverse = setTo;
    }
}

function keyPressed(event) {
    // console.log("Keypressed:" + event.keyCode);
    keySet(event, blueCar, true);
    keySet(event, greenCar, true);
    event.preventDefault();
}

function keyReleased(event) {
    keySet(event, blueCar, false);
    keySet(event, greenCar, false);
    
    event.preventDefault();
}

function handleMouse(event) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    mouseX = event.clientX - rect.left - root.scrollLeft;
    mouseY = event.clientY - rect.top - root.scrollTop;
    
   
    // carX = mouseX;
    // carY = mouseY;
    // carSpeedX = 3;
    // carSpeedY = -4;
}