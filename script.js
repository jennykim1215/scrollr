var s = skrollr.init();

$(document).ready(function() {
  $("#scroll-container").html(
    $(window).scrollTop() 
  );
  $(window).scroll(function(e) {
    $("#scroll-container").html(
    $(window).scrollTop()
    );
  });
});
