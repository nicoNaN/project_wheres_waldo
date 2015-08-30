var waldoCalls = {

  count: 1,
  relativeX: 0,
  relativeY: 0,
  $selectedForm: $(""),

  drawMouseBox: function(elmnt, e) {
    var offset = $(elmnt).offset();
    this.relativeX = (e.pageX - offset.left);
    this.relativeY = (e.pageY - offset.top);

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.rect(this.relativeX - 25, this.relativeY - 25,100,100);
    ctx.stroke();

    var form = "<form " + "id=tag" + this.count + ">" +
           "<p>Name</p>" +
           "<select name='char' class='char'>" +
           "<option value='waldo'>Waldo</option>" +
           "<option value='wenda'>Wenda</option>" +
           "<option value='odlaw'>Odlaw</option>" +
           "<option value='wilma'>Wilma</option>" +
           "<option value='wizard'>Whitebeard</option>" +
           "<option value='woof'>Woof</option>" +
           "</select>" +
           "<br />" +
           "<input type='submit' value='REGISTER PUPPER'>" +
           "</form>";

    $("#waldo").append(form);
    $("#tag" + this.count).css("top", this.relativeY);
    $("#tag" + this.count).css("left", this.relativeX);
    this.$selectedForm = $("#tag" + this.count);
    this.count++;
  },

  drawWaldo: function() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
    };
    img.src = "images/ww.jpg";
  },

  postGuess: function (submitEvent) {
    alert('yeah');
    console.log(this.count);
    submitEvent.preventDefault();

    var $form = $("#tag" + this.count-1),
        name = $form.find("option:selected").attr("value");

    var posting = $.post("http://localhost:3000/guesses.json",
                  { name: name, x: this.relativeX, y: this.relativeY});

    // posting.done(function(data) {
    //   this.count++;
    // });
  }
};

$(document).ready(function() {
  $('#waldo').click(function(e) {
    waldoCalls.drawMouseBox(this, e);
    waldoCalls.$selectedForm.submit(function(submit){
      waldoCalls.postGuess(submit);
    });
  });

});

$(document).on('page:change', function() {
  waldoCalls.drawWaldo();
});
