$(document).ready(function() {

	lightbox.option({fadeDuration: 0, resizeDuration: 0})

	$("#proj_Orlas_Hive_slide").cycle(
		);


	$("#gif_1").hover(
		function()
	{
		$(this).attr("src", "Portfolio/Mojo/GIFS/block1.gif");
	},
		function()
	{
		$(this).attr("src", "Portfolio/Mojo/gif_cover/block1.png");
	}
	);

	$("#gif_2").hover(
		function()
	{
		$(this).attr("src", "Portfolio/Mojo/GIFS/block2.gif");
	},
		function()
	{
		$(this).attr("src", "Portfolio/Mojo/gif_cover/block2.png");
	}
	);

	$("#gif_3").hover(
		function()
	{
		$(this).attr("src", "Portfolio/Mojo/GIFS/block3.gif");
	},
		function()
	{
		$(this).attr("src", "Portfolio/Mojo/gif_cover/block3.png");
	}
	);

	$("#gif_4").hover(
		function()
	{
		$(this).attr("src", "Portfolio/Mojo/GIFS/wake_up.gif");
	},
		function()
	{
		$(this).attr("src", "Portfolio/Mojo/gif_cover/wake_up.png");
	}
	);




});


	function onVideoEnd(data) {
	var id = data[0];
	html5GalleryObjects.objects[0].isPaused = true;
	html5GalleryObjects.objects[0].slideRun(id, false, true);
}