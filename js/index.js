$(() => {
    $(".expand-button").on("click", function(ev) {
	$(this).toggleClass("expand-button--expanded");
    });
});
