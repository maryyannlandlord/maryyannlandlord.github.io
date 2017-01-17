$(document).ready(function() {

	

	$("#reelHover").click(function(){	

			$("#reelVideo").show().find("iframe").attr("src", "https://www.youtube.com/embed/ciyACHJiFng?vq=hd1080&autoplay=1&rel=0&amp;&showinfo=0");
			$("#reelCover").hide();
			$("#reelHover").hide();
		});




});


	function onVideoEnd(data) {
	var id = data[0];
	html5GalleryObjects.objects[0].isPaused = true;
	html5GalleryObjects.objects[0].slideRun(id, false, true);
}