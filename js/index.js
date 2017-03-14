$(() => {
    //createFact("Mexicans are just jews but their black", 420, 69);
});


function createFact(title, id,upvotes, altFacts) {
    $(".main-content").append(
	$("<div></div>" , {"class": "fact","loaded":"false"}).append(
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
          if ($(this).closest(".fact").attr("loaded")=="false"){
            var altfactcontainer=$("<div>",{"class":"altfactcontainer"})
            $(this).closest(".fact").children(".fact--expanded-container").append(altfactcontainer)
            req={}
            req["factid"]=id
            var getaltfactsajax=$.ajax({
               type: "POST",
               contentType: "application/json",
               url: 'http://trumpwall.ru:5000/getaltfacts',
               data: JSON.stringify(req),
               dataType: "json"
            });
            getaltfactsajax.done(function( data ) {
              console.log(altfactcontainer)
              var i=0
              while (i<data.length){

                altfactcontainer.append($("<div>",{"class":"altfactdiv"})
                  .append($("<i>",{"class":"material-icons"}).text("star"))
                  .append($("<span>",{"class":"altfactspan"}).text(data[i]["fact"])))
                i=i+1
              }

            })


            var input=$("<input></input>",{"class":"altfactcomposeinput","placeholder":"WRONG!"})
            input.keypress(function (e) {
              if (e.which == 13) {
                publishAltFact(input.val(),id)
                input.val("")
                return false;    //<---- Add this line
              }
            });
            $(this).closest(".fact").children(".fact--expanded-container").append(input)




            $(this).closest(".fact").attr("loaded","true")
          }
			$(this).toggleClass("expand-button--expanded");
			$(this).closest(".fact").toggleClass("fact--expanded");
		    })
		)
	    )
	).append(
	    $("<div></div>", {"class": "fact--expanded-container"})


	)
    );
}
