$(".workList a").hover(function() {
  var s = $(this).data("img");
  $(".workImages img").attr("src", s);
});