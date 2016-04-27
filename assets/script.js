$(document).ready(function() {
var temp;
$(".gallery-pic-container").click(function(){
  event.stopPropagation();
  var image = $(this).find(".img");
  temp = image.attr("id").slice(-2);
  console.log(temp);
  var src = image.attr("src");
  $("#modal-img").attr("src",src);
  $("#modal-container").show()
});

$("#carousel-prev").click(function(){
  event.stopPropagation();
  var currentValue = parseInt(temp);
  if (currentValue == 1) {
    return false;
  }
  currentValue -= 1;
  temp = currentValue;
  currentValue = "assets/img/" + currentValue + ".jpg";
  $("#modal-img").attr("src", currentValue);
});

$("#carousel-next").click(function(){
  event.stopPropagation();
  var currentValue = parseInt(temp);
  if (currentValue == 15) {
    return false;
  }
  currentValue += 1;
  temp = currentValue;
  if (currentValue < 10) {
    currentValue = "assets/img/" + "0" + currentValue + ".jpg";
  } else {
    currentValue = "assets/img/" + currentValue + ".jpg";
  }

  $("#modal-img").attr("src", currentValue);
});

$("body").click(function(){
  $("#modal-container").hide()
});

});
