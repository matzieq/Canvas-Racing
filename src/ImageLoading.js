var carPic = document.createElement('img');
var roadPic = document.createElement('img');
var wallPic = document.createElement('img');

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
		{imgVar: roadPic, fileName: './img/track_road.png'}
	];

	picsToLoad = imageList.length;

	for (var i = 0; i < imageList.length; i++) {
	    beginLoadingImage(imageList[i].imgVar, imageList[i].fileName);
	}
}