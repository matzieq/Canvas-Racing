var TRACTION_DRAG = 0.94;
var DRIVE_POWER = 0.5;
var BRAKES = 0.2;
var TURN_RATE = 0.06;
var MIN_SPEED_TO_TURN = 0.5;

function Car () {
    this.x = 75;
    this.y = 75;
    this.angle = 0;
    this.speed = 0;


    this.reset = function () {
        for (var row = 0; row < TRACK_ROWS; row++) {        
            for (var col = 0; col < TRACK_COLS; col++) {
                var arrayIndex = rowColToArrayIndex(col, row);
                if (trackGrid[arrayIndex] === TRACK_PLAYERSTART) {
                    trackGrid[arrayIndex] = TRACK_ROAD;
                    this.x = col * TRACK_W + TRACK_W / 2;
                    this.y = row * TRACK_H + TRACK_H / 2;
                    return;
                }
            }
        }
    }

    this.move = function() {
        this.speed *= TRACTION_DRAG;
        if (keyHeld_Gas) {
            this.speed += DRIVE_POWER;
        }
        if (keyHeld_Reverse) {
            this.speed -= BRAKES;
        }

        if (Math.abs(this.speed) > MIN_SPEED_TO_TURN) {
            if (keyHeld_TurnLeft) {
                this.angle -= TURN_RATE;
            }
            if (keyHeld_TurnRight) {
                this.angle += TURN_RATE;
            }
        }
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        handleCarAndTrack(this);
        // console.log(this.angle, this.speed);
        // carAngle += 0.02;
    }

    this.draw = function() {
        drawBitmapCenteredWithRotation(carPic, this.x , this.y, this.angle);
    }

}