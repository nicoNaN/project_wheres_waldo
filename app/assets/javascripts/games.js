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

  createCountdown: function(callback) {
    var score = 100;
    var $container = $("#countdown");
    $container.text("Your score: " + score);

    var countdown = setInterval(function() {
      if (--score) {
        $container.text("Your score: " + score);
      } else {
        clearInterval(countdown);
        callback.call($container);
      }
    }, 2000);
  },

  gameOver: function() {
    this.text("Game over!");

    setInterval(function() {
      window.location = "/";
    }, 5000);
  }

};

$(document).ready(function() {
  var gameID = parseInt(window.location.pathname.split('/').pop(), 10);

  waldoCalls.createCountdown(waldoCalls.gameOver);

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
