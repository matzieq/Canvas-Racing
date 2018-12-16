var carPic = document.createElement('img');
var roadPic = document.createElement('img');
var wallPic = document.createElement('img');
var goalPic = document.createElement('img');
var treesPic = document.createElement('img');
var flagPic = document.createElement('img');

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

function loadImages() {

	var imageList = [
		{imgVar: carPic, fileName: './img/Car.png'},
		{imgVar: wallPic, fileName: './img/track_wall.png'},
		{imgVar: roadPic, fileName: './img/track_road.png'},
		{imgVar: goalPic, fileName: './img/track_goal.png'},
		{imgVar: treesPic, fileName: './img/track_trees.png'},
		{imgVar: flagPic, fileName: './img/track_flag.png'}
	];

	picsToLoad = imageList.length;

	for (var i = 0; i < imageList.length; i++) {
	    beginLoadingImage(imageList[i].imgVar, imageList[i].fileName);
	}
}