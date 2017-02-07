$(document).ready(function() {

	


});


	function onVideoEnd(data) {
	var id = data[0];
	html5GalleryObjects.objects[0].isPaused = true;
	html5GalleryObjects.objects[0].slideRun(id, false, true);
}