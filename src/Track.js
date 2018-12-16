

var TRACK_W = 40;
var TRACK_H = 40;

var TRACK_COLS = 20;
var TRACK_ROWS = 15;

var TRACK_ROAD = 0;
var TRACK_WALL = 1;
var TRACK_PLAYERSTART = 2;

var TRACK_GAP = 2;

var trackGrid = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
                 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1,
                 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1,
                 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1,
                 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1,
                 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1,
                 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1,
                 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1,
                 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1,
                 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
                 

              
                 
function isWallAtColRow(col, row) {
    if (col >= 0 && col < TRACK_COLS &&
        row >= 0 && row < TRACK_ROWS) {        
        var trackIndexUnderCoord = rowColToArrayIndex(col, row);
        return (trackGrid[trackIndexUnderCoord] === TRACK_WALL);
    } else {
        return false;
    }

} 

function handleCarAndTrack() {  
    var carTrackCol = Math.floor(carX / TRACK_W);
    var carTrackRow = Math.floor(carY / TRACK_H);
    var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);
    
    if (carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
        carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {
            
        if (isWallAtColRow(carTrackCol, carTrackRow)) {
            carX -= Math.cos(carAngle) * carSpeed;
            carY -= Math.sin(carAngle) * carSpeed;
            carSpeed *= -0.5;
        }
    }
}

function rowColToArrayIndex(col, row) {
    return col + TRACK_COLS * row;
}


function drawTracks() {
    for (var row = 0; row < TRACK_ROWS; row++) {        
        for (var col = 0; col < TRACK_COLS; col++) {
            var arrayIndex = rowColToArrayIndex(col, row);
            if (trackGrid[arrayIndex] === TRACK_WALL) {
                canvasContext.drawImage(wallPic, TRACK_W * col, TRACK_H * row);           
            } else if (trackGrid[arrayIndex] === TRACK_ROAD) {
                canvasContext.drawImage(roadPic, TRACK_W * col, TRACK_H * row);                           
            }
        }
    }
}