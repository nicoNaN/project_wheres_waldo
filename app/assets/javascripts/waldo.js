var waldoCalls = {

  drawMouseBox: function(elmnt, e) {
    var offset = $(elmnt).offset();
    var relativeX = (e.pageX - offset.left);
    var relativeY = (e.pageY - offset.top);

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.rect(relativeX - 25, relativeY - 25,50,50);
    ctx.stroke();
  },

  drawWaldo: function() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
    };
    img.src = "https://cldup.com/bR93jdzyuH.jpg";
  }
};

$(document).on('page:change', function() {
  waldoCalls.drawWaldo();
  $('#waldo').click(function(e) {
    waldoCalls.drawMouseBox(this, e);
  });
});
