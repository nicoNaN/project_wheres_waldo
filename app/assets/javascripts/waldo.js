var waldoCalls = {

  drawMouseBox: function(elmnt, e) {
    var offset = $(elmnt).offset();
    var relativeX = (e.pageX - offset.left);
    var relativeY = (e.pageY - offset.top);

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.rect(relativeX, relativeY,150,100);
    ctx.stroke();
  }
};

$(document).on('page:change', function() {
  $('#waldo').click(function(e) {
    waldoCalls.drawMouseBox(this, e);
  });
});
