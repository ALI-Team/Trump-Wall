var isMenuOpen = false;
var isEventAlreadyHandled = false;

$(function() {
  $("#buttonOptions").click(function() {

    console.log($("#menu").hasClass("md-menu__hidden"));


    if ($("#menu").hasClass("md-menu__hidden")) {
        $(".md-menu__hidden").attr("class", "md-menu__shown");
	    isMenuOpen = true;
	isEventAlreadyHandled = true;

    }
    else {
      $(".md-menu__shown").attr("class", "md-menu__hidden");
    }
  })

	$(window).click(function() {
		console.log("nigger");
		if (isMenuOpen && !isEventAlreadyHandled) {
       			console.log("hiding");
			$(".md-menu__shown").attr("class", "md-menu__hidden");
    		}
		isEventAlreadyHandled = false;
	})

	$('.material-switch').on('click tap', function(){
  		$(this).toggleClass('enabled');
	})
})

