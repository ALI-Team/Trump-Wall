$(() => {
    $(".expand-button").on("click", function(ev) {
	$(this).toggleClass("expand-button--expanded");
    });
});


function createFact(title, upvotes, altFacts) {
    $(".main-content").append(
	$("<div></div>" , {"class": "fact"}).append(
	    $("<div></div>", {"class": "fact--main-container"}).append(
		$("<div></div>", {"class": "fact__left-aligned"}).append(
		    $("<div></div>", {"class": "fact__action-area"}).append(
			$("<div></div>", {"class": "fact__action-container"}).append(
			    $("<button></button>", {"class": "star-button"}).append(
				$("<i></i>", {"class": "material-icons"}).text("star")
			    )
			).append(
			    $("<p></p>", {"class": "md-caption"}).text(upvotes)
			)
		    )
		).append(
		    $("<div></div>", {"class": "fact__content-container"}).append(
			$("<div></div>", {"class": "fact__content"}).append(
			    $("<p></p>", {"class": "md-headline"}).text(title)
			)
		    ).append(
			$("<div></div>", {"class": "fact__info-container"}).append(
			    $("<p></p>", {"class": "md-tiny-link"}).text(`${altFacts} alternative fact${altFacts == 1 ? "" : "s"}`)
			)
		    )
		)
	    ).append(
		$("<div></div>", {"class": "fact__expand-container"}).append(
		    $("<button></button>", {"class": "expand-button"}).append(
			$("<i></i>", {"class": "material-icons"}).text("expand_more")
		    ).on("click", function(ev) {
			$(this).toggleClass("expand-button--expanded");
			$(this).closest(".fact").toggleClass("fact--expanded"
		    })
		)
	    )
	).append(
	    $("<div></div>", {"class": "fact--expanded-container"}).append(
		$("<h1></h1>", {"class": "md-title"}).text("dank memes")
	    )
	)
    );
}
    
