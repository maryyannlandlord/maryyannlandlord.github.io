$(function() {

      // https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
      var browser_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// Project page other projects
   $('.other_proj_photo').each(function() {
      $(this).wrap('<div class="DarkTint DarkTintBig"></div>');
    });

   if ($('#reelWrapper').height() > browser_height) {
       $('#reelWrapper').css('height', browser_height);
   }

   $('.other_proj a').hover(function(){


   	$('.text_wrapper', this).css("opacity","1");
   },function(){
   	$('.text_wrapper', this).css("opacity","0");
   });

// Index page projects

    $('.proj_photo').each(function() {
      $(this).wrap('<div class="DarkTint"></div>');
    });

// Index page Wetware

    $('.proj_photo_full').each(function() {
      $(this).wrap('<div class="DarkTint DarkTintBigger"></div>');
    });

//Index page names

   $('.proj_column').mouseover(function(){
    $('.proj_title', this).css("opacity","1");
    $('.proj_photo', this).css("opacity",".3");
    $('.proj_photo_full', this).css("opacity",".3");
   });

   $('.proj_column').mouseout(function(){
    $('.proj_title', this).css("opacity","0");
    $('.proj_photo', this).css("opacity","1");
    $('.proj_photo_full', this).css("opacity","1");
   });

// Reel

   $('.projVideo').wrap('<div id = "darkVideo"></div>');

   $('#reelWrapper').mouseover(function(){

    $('.playButton').css("opacity","1");
    $('#reelCover').css("opacity", ".3");
   });

    $('#reelWrapper').mouseout(function(){

    $('.playButton').css("opacity","0");
    $('#reelCover').css("opacity", "1");
   });

    $('.videoWrapper').mouseover(function(){

    $('.playButton').css("opacity","1");
    $('.projVideo', this).css("opacity", ".3");
   });

    $('.videoWrapper').mouseout(function(){

    $('.playButton').css("opacity","0");
    $('.projVideo', this).css("opacity", "1");
   });

    $('.videoWrapper_2').mouseover(function(){

    $('.playButton').css("opacity","1");
    $('.projVideo', this).css("opacity", ".3");
   });

    $('.videoWrapper_2').mouseout(function(){

    $('.playButton').css("opacity","0");
    $('.projVideo', this).css("opacity", "1");
   });

    var videoOpen = false;
    var video2Open = false;

    $('#reelWrapper').click(function(){
      if (videoOpen == false) {
        $("#reelWrapper").html("<div class='embed-container'><iframe src='https://player.vimeo.com/video/326499961?autoplay=1&autopause=0' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen allow=autoplay style='max-height:" + browser_height + "px'></iframe></div>");
        videoOpen = true;
        };
      });

    $('.videoWrapper').click(function(){
      if (videoOpen == false) {
        $("#yokai").html("<div class='embed-container'><iframe src='https://player.vimeo.com/video/252673806?autoplay=1&autopause=0' width='1500' height='844' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen allow=autoplay></iframe></div>");
        $("#maad").html("<div class='embed-container'><iframe src='https://player.vimeo.com/video/326502284?autoplay=1&autopause=0' width='1500' height='844' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen allow=autoplay></iframe></div>");
        $("#momento1").html("<div class='embed-container'><iframe src='https://player.vimeo.com/video/326499057?autoplay=1&autopause=0' width='1500' height='844' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen allow=autoplay></iframe></div>");
        $("#steelcase").html("<div class='embed-container'><iframe src='https://player.vimeo.com/video/258761583?autoplay=1&autopause=0' width='1500' height='844' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen allow=autoplay></iframe></div>");


        videoOpen = true;
        };
      });


      $('.videoWrapper_2').click(function(){
      if (video2Open == false) {
         //$("#momento2").html("<video autoplay controls style = 'width: 1500px; height: 844px' > <source src = 'Portfolio/Momento/Video2.mp4' type = 'video/mp4'></video>");
          $("#momento2").html("<div class='embed-container'><iframe src='https://player.vimeo.com/video/326499370?autoplay=1&autopause=0' width='1500' height='844' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen allow=autoplay></iframe></div>");

        video2Open = true;
        };
      });


});

function showCredits(id){
	var credits = document.getElementById(id);

	if (window.getComputedStyle(credits,null).display == "none") {
    	credits.style.display = "block";
  	} else {
    	credits.style.display = "none";
  	};

};

function onVideoEnd(data) {
var id = data[0];
html5GalleryObjects.objects[0].isPaused = true;
html5GalleryObjects.objects[0].slideRun(id, false, true);
};
