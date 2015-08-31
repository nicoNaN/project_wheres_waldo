var waldoCalls = {

  drawTagBox: function(ctx, e, gameID) {
    var offset = $(ctx).offset();
    var relativeX = (e.pageX - offset.left);
    var relativeY = (e.pageY - offset.top);

    if ($(e.target).parents().hasClass('guess-box') || $(e.target).parents().hasClass('guess') ) {
      return;
    }

    $.ajax({
      url: gameID + '/guesses/new',
      data: { xpos: relativeX,
              ypos: relativeY },
      async: true,
      dataType: 'script'
    });
  },

  createCountdown: function() {
    var score = 100;
    var countdown = setInterval(function() {
      if (--score) {
        $("#countdown").text("Your score: " + score);
      } else {
        clearInterval(countdown);
      }
    }, 2000);
  }

};

$(document).ready(function() {
  var gameID = parseInt(window.location.pathname.split('/').pop(), 10);

  waldoCalls.createCountdown();

  $('#waldo').click(function(e) {
     waldoCalls.drawTagBox(this, e, gameID);
   });

   $('#gluttons').hover(function() {
     $('.guess').show();
   },

     function() {
       $('.guess').hide();
     }
   );


});
