var mouseX;
var mouseY;

var KEY_LEFT_ARROW = 37;
var KEY_RIGHT_ARROW = 39;
var KEY_UP_ARROW = 38;
var KEY_DOWN_ARROW = 40;

var keyHeld_Gas = false;
var keyHeld_Reverse = false;
var keyHeld_TurnRight = false;
var keyHeld_TurnLeft = false;

function setupInput() {
    canvas.addEventListener('mousemove', handleMouse);
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
}

function keyPressed(event) {
    // console.log("Keypressed:" + event.keyCode);
    if (event.keyCode === KEY_LEFT_ARROW) {
        keyHeld_TurnLeft = true;
    } 
    
    if (event.keyCode === KEY_RIGHT_ARROW) {
        keyHeld_TurnRight = true;
    } 
    
    if (event.keyCode === KEY_UP_ARROW) {
        keyHeld_Gas = true;
    } 
    
    if (event.keyCode === KEY_DOWN_ARROW) {
        keyHeld_Reverse = true;
    }
    
    event.preventDefault();
}

function keyReleased(event) {
    if (event.keyCode === KEY_LEFT_ARROW) {
        keyHeld_TurnLeft = false;
    } 
    
    if (event.keyCode === KEY_RIGHT_ARROW) {
        keyHeld_TurnRight = false;
    } 
    
    if (event.keyCode === KEY_UP_ARROW) {
        keyHeld_Gas = false;
    } 
    
    if (event.keyCode === KEY_DOWN_ARROW) {
        keyHeld_Reverse = false;
    }
    
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