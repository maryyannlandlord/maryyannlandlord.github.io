$(document).ready(function() {

	$('#proj1_bee_slide').cycle({
		timeout: 2000
	});

	$('#proj1_bucket_slide').cycle({
		timeout: 3000
	});

	$('#proj2_save_me_slide').cycle({
		timeout: 3000
	})

	$('#dragon_slide').cycle({
		timeout: 3000
	})

	$('#pig_slide').cycle({
		timeout: 3000
	})

	$('#lagooned_slide').cycle({
		timeout: 3000
	})

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


