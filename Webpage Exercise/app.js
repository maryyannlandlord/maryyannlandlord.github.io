function displayWeb(){
  $("#content").delay(2000).animate({"opacity": "1"}, 800);
}

/* ONE*/

function mystics(){
  $("#mystics").click(function(){
    $('#mystics').fadeOut(1000); 
  });
}

function rationalists(){
  $("#rationalists").click(function(){
    $("#one_p1").fadeOut(1000);
    $("#one_p2").fadeIn(2000);
  });
}

function periodClick(){
  $("#period").click(function(){
    /*$("#period").clone().appendTo("#period");*/
    $("#one_p2").fadeOut(1000);
    $("#two").fadeIn(2000);
  });
}

function leapFlip(){
  $("#one_p2 .rotate").textrotator({
        animation: "flipCube",
        speed: 1500
   });
}

function logicSwap(){
  $("#logic").on("click", function() {
  var el = $(this);
  el.text() == el.data("text-swap") 
    ? el.text(el.data("text-original")) 
    : el.text(el.data("text-swap"));
  });
}


/* TWO */

function repeat(){
  $(".repeat").click(function(){
    $(".repeat").clone(true).appendTo("#two");
  });
}

/*THREE*/


function three_trans(){
  $("#three_trans").click(function(){
    $("#two").fadeOut(1000);
  });
}

function experience(){
  $("#experience").click(function(){
    $("#three").fadeOut(1000);
  });
}


function draw(){
  $('#simple_sketch').sketch();
}



$(document).ready(function() {

  displayWeb();
  draw();
  experience();
  mystics();
  rationalists();
  leapFlip();
  logicSwap();
  periodClick();
  repeat();
  three_trans(); 
  three(); 
  
});
