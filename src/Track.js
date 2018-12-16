

var TRACK_W = 40;
var TRACK_H = 40;

var TRACK_COLS = 20;
var TRACK_ROWS = 15;

var TRACK_ROAD = 0;
var TRACK_WALL = 1;
var TRACK_PLAYERSTART = 2;
var TRACK_GOAL = 3;
var TRACK_TREES = 4;
var TRACK_FLAG = 5;

var TRACK_GAP = 2;

var trackGrid = [4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
                 4, 1, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 1, 4,
                 1, 1, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0, 0, 1,
                 1, 0, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 0, 0, 1,
                 1, 0, 0, 1, 4, 1, 1, 0, 0, 0, 0, 1, 1, 4, 4, 4, 1, 0, 0, 1,
                 1, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 1, 0, 0, 1,
                 1, 0, 0, 1, 4, 1, 0, 0, 5, 0, 0, 0, 1, 4, 4, 4, 1, 0, 0, 1,
                 1, 0, 0, 1, 4, 1, 0, 0, 1, 1, 0, 0, 1, 4, 4, 1, 1, 0, 0, 1,
                 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 4, 1, 0, 0, 0, 1,
                 1, 0, 0, 0, 5, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 4,
                 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4];
                 

              
                 
function isObstacleAtColRow(col, row) {
    if (col >= 0 && col < TRACK_COLS &&
        row >= 0 && row < TRACK_ROWS) {        
        var trackIndexUnderCoord = rowColToArrayIndex(col, row);
        return (trackGrid[trackIndexUnderCoord] !== TRACK_ROAD);
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
            
        if (isObstacleAtColRow(carTrackCol, carTrackRow)) {
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
    var arrayIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;
    for (var row = 0; row < TRACK_ROWS; row++) {        
        for (var col = 0; col < TRACK_COLS; col++) {
            var typeOfTileHere = trackGrid[arrayIndex];
            var imageToUse = trackPics[typeOfTileHere];
            canvasContext.drawImage(imageToUse, drawTileX, drawTileY);
            drawTileX += TRACK_W;
            arrayIndex++;
        }
        drawTileX = 0;
        drawTileY += TRACK_H;
    }
}