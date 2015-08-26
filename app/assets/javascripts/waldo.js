var waldoCalls = {

  drawMouseBox: function(elmnt, e) {
    var offset = $(elmnt).offset();
    var relativeX = (e.pageX - offset.left);
    var relativeY = (e.pageY - offset.top);

    alert("X: " + relativeX + " Y: " + relativeY);
  }
};

$(document).on('page:change', function() {
  $('#waldo').click(function(e) {
    waldoCalls.drawMouseBox(this, e);
  });
});
