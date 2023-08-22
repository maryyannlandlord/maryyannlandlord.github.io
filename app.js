$(function() {

      // https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
      var browser_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// Project page other projects
   $('.other_proj_photo').each(function() {
      $(this).wrap('<div class="DarkTint DarkTintBig"></div>');
    });

   if ($('#reelWrapper').height() > browser_height) {
       $('#reelWrapper').css('height',browser_height);
   }

   $('.other_proj').mouseover(function(){
   	$('.text_wrapper', this).css("opacity","1");
    $('.other_proj_photo', this).css("opacity",".3");
   });

    $('.other_proj').mouseout(function(){
   	$('.text_wrapper', this).css("opacity","0");
    $('.other_proj_photo', this).css("opacity","1");
   });

// Index page projects

    $('.proj_photo').each(function() {
      $(this).wrap('<div class="DarkTint"></div>');
    });

// Index page wide

    $('.proj_photo_full').each(function() {
      $(this).wrap('<div class="DarkTint"></div>');
    });

//Index page names

   $('.projCover').mouseover(function(){
    $('.proj_title', this).css("opacity","1");
    $('.proj_photo', this).css("opacity",".3");
    $('.proj_photo_full', this).css("opacity",".3");
   });

   $('.projCover').mouseout(function(){
    $('.proj_title', this).css("opacity","0");
    $('.proj_photo', this).css("opacity","1");
    $('.proj_photo_full', this).css("opacity","1");
   });

// Reel 

   $('.VideoCover').wrap('<div id = "darkVideo"></div>');

   $('#reelWrapper').mouseover(function(){

    $('.playButton').css("opacity","1");
    $('#reelCover').css("opacity", ".3");
   });

    $('#reelWrapper').mouseout(function(){

    // $('.playButton').css("opacity","0");
    $('#reelCover').css("opacity", ".8");
   });

    $('.videoWrapper.1').mouseover(function(){

    // $('.playButton.1').css("opacity","1");
    $('.videoTitle.1').css("opacity","1");
    $('.VideoCover.1', this).css("opacity", ".3");
   });

    $('.videoWrapper.1').mouseout(function(){

    // $('.playButton.1').css("opacity","0");
    $('.videoTitle.1').css("opacity","0");
    $('.VideoCover.1', this).css("opacity", "1");
   });

    $('.videoWrapper.2').mouseover(function(){

    // $('.playButton.2').css("opacity","1");
    $('.videoTitle.2').css("opacity","1");
    $('.VideoCover.2', this).css("opacity", ".3");
   });

    $('.videoWrapper.2').mouseout(function(){

    // $('.playButton.2').css("opacity","0");
    $('.videoTitle.2').css("opacity","0");
    $('.VideoCover.2', this).css("opacity", "1");
   });
 

    var videoOpen = false;
    var video2Open = false;

    $('#reelWrapper').click(function(){
      if (videoOpen == false) {
        $("#reelWrapper").html("<div class='embed-container index'><iframe src='https://player.vimeo.com/video/677522047?autoplay=1&autopause=0' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen allow=autoplay style='max-height:" + (browser_height) + "px'></iframe></div>");
        videoOpen = true;
        console.log("videoPlay");
        };
      });

   

    $('.videoWrapper.1').click(function(){
      if (videoOpen == false) {
        $("#yokai").html("<div class='embed-container'><iframe src='https://player.vimeo.com/video/252673806?autoplay=1&autopause=0' width='1500' height='844' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen allow=autoplay></iframe></div>");
        $("#maad").html("<div class='embed-container'><iframe src='https://player.vimeo.com/video/326502284?autoplay=1&autopause=0' width='1500' height='844' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen allow=autoplay></iframe></div>");
        //$("#momento1").html("<div class='embed-container'><iframe src='https://player.vimeo.com/video/326499057?autoplay=1&autopause=0' width='1500' height='844' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen allow=autoplay></iframe></div>");
        $("#steelcase").html("<div class='embed-container'><iframe src='https://player.vimeo.com/video/258761583?autoplay=1&autopause=0' width='1500' height='844' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen allow=autoplay></iframe></div>");
        $("#wetware").html("<div class='embed-container'><iframe src='https://player.vimeo.com/video/340127291?autoplay=1&autopause=0' width='1500' height='844' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen allow=autoplay></iframe></div>");
        $("#musicEffects").html("<div class='embed-container'><iframe src='https://www.youtube.com/embed/MDh6Z1Qm_CM?autoplay=1&autopause=0' frameborder='0'; allow=\"fullscreen;autoplay\"></iframe></div>");
        $("#momento2").html("<div class='embed-container'><iframe src='https://www.youtube.com/embed/p4V_Izk1xbw?autoplay=1&autopause=0' frameborder='0'; allow=\"fullscreen;autoplay\"></iframe></div>");
       
        videoOpen = true;
        };
      });

    
      $('.videoWrapper.2').click(function(){
      if (video2Open == false) {
           $("#momento3").html("<div class='embed-container'><iframe src='https://player.vimeo.com/video/326499370?autoplay=1&autopause=0' width='1500' height='844' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen allow=autoplay></iframe></div>");
         
        video2Open = true;
        };
      });

    var header = document.querySelector('#flex-tableContents');
    function updateHeader() {
      header.toggleAttribute('stuck', header.getBoundingClientRect().top == 0);
      requestAnimationFrame(updateHeader);
    }
    updateHeader();
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

const sections = document.querySelectorAll(".section");
const navLi = document.querySelectorAll("#flex-tableContents a");



window.onscroll = () => {
  var current = "";



  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 170) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") == "#" + current) {
      a.classList.add("active");
    }
  });
};
