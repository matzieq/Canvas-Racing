var carPic = document.createElement('img');


var trackPics = [];

var picsToLoad;

function countLoadedImagesAndLaunch() {
	picsToLoad--;
	console.log(picsToLoad);
	if (picsToLoad === 0) {
		startGameAfterLoadingImages();
	}
}

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImagesAndLaunch;
    imgVar.src = fileName;
}

function loadTrackImage(trackCode, fileName) {
	trackPics[trackCode] = document.createElement('img');
	beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages() {

	var imageList = [
		{imgVar: carPic, fileName: './img/Car.png'},
		{trackType: TRACK_WALL, fileName: './img/track_wall.png'},
		{trackType: TRACK_ROAD, fileName: './img/track_road.png'},
		{trackType: TRACK_GOAL, fileName: './img/track_goal.png'},
		{trackType: TRACK_TREES, fileName: './img/track_trees.png'},
		{trackType: TRACK_FLAG, fileName: './img/track_flag.png'}
	];

	picsToLoad = imageList.length;

	for (var i = 0; i < imageList.length; i++) {
		if (imageList[i].imgVar) {
		    beginLoadingImage(imageList[i].imgVar, imageList[i].fileName);
		} else {
			loadTrackImage(imageList[i].trackType, imageList[i].fileName);
		}
	}
}

