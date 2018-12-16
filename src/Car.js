var carX = 75;
var carY = 75;
var carAngle = 0;
var carSpeed = 0;

var TRACTION_DRAG = 0.94;
var DRIVE_POWER = 0.5;
var BRAKES = 0.2;
var TURN_RATE = 0.06;


function resetCar() {
    for (var row = 0; row < TRACK_ROWS; row++) {        
        for (var col = 0; col < TRACK_COLS; col++) {
            var arrayIndex = rowColToArrayIndex(col, row);
            if (trackGrid[arrayIndex] === TRACK_PLAYERSTART) {
                trackGrid[arrayIndex] = TRACK_ROAD;
                carX = col * TRACK_W + TRACK_W / 2;
                carY = row * TRACK_H + TRACK_H / 2;
            }
        }
    }
}

function moveCar() {
    carSpeed *= TRACTION_DRAG;
    if (keyHeld_Gas) {
        carSpeed += DRIVE_POWER;
    }
    if (keyHeld_Reverse) {
        carSpeed -= BRAKES;
    }
    if (keyHeld_TurnLeft) {
        carAngle -= TURN_RATE;
    }
    if (keyHeld_TurnRight) {
        carAngle += TURN_RATE;
    }
    carX += Math.cos(carAngle) * carSpeed;
    carY += Math.sin(carAngle) * carSpeed;
    // carAngle += 0.02;
}

function drawCar() {
    drawBitmapCenteredWithRotation(carPic, carX , carY, carAngle);
}
