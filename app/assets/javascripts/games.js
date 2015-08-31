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
  }

};

$(document).ready(function() {
  var gameID = parseInt(window.location.pathname.split('/').pop(), 10);

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
