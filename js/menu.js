$(function() {
  $("#buttonOptions").click(function() {

    console.log($("#menu"));

    if ($("#menu").hasClass(".md-menu__hidden")) {
        $(".md-menu__hidden").attr("class", "md-menu__shown");
    }
    else {
      $(".md-menu__shown").attr("class", "md-menu__hidden");
    }
  })
})
