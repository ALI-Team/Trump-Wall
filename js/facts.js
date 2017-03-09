function publishFact(msg){
  token=Cookies.get('token');
  if (token === undefined){
    alert("something bad happend, something worse then obama getting elected")
    return
  }
   $.ajax({
      type: "POST",
      contentType: "application/json",
      url: 'http://trumpwall.ru:5000/createfact',
      data: JSON.stringify({"response":"","fact":msg,"author":token}),
      dataType: "json"
   });
	//$.post("http://tux.ivar.tech:5000/createfact",{"response":"","text":"IMA FUCK A WHITE BITCH","author":"69"})
}
function updateFacts(){
  req={}
  token=Cookies.get('token');
  if (token === undefined){
alert("something bad happend, something worse then Hillary Clinton")
return
  }else{
    req["token"]=token
  }
  var getfactsajax=$.ajax({
     type: "POST",
     contentType: "application/json",
     url: 'http://trumpwall.ru:5000/getfacts',
     data: JSON.stringify(req),
     dataType: "json"
  });
  getfactsajax.done(function( data ) {
    $(".main-content").empty()
    i=0
    while (i<data.length){
      createFact(data[i]["fact"],-1,-1)
      i=i+1
    }

  })
}
function openComposeDialog(){
  $("#composedialogcontainer").attr("style","")
  $("#dialog-bg-tint").attr("style","")
}
function closeComposeDialog(){
  $("#composedialogcontainer").attr("style","display:none;")
  $("#dialog-bg-tint").attr("style","display:none;")
}

$(function(){
  $("#composesubmit").click(function(){
    publishFact($("#composearea").val())
    closeComposeDialog()
    $("#composearea").val("")
  })
  $("#composediscard").click(function(){
    closeComposeDialog()
    $("#composearea").val("")

  })
  $("#newButton").click(function(){
    openComposeDialog()
  })
  $("#updateFacts").click(function(){
    updateFacts()
  })

})



$(function(){
  req={}
  token=Cookies.get('token');
  if (token === undefined){

  }else{
    req["token"]=token
  }
  var initajax=$.ajax({
     type: "POST",
     contentType: "application/json",
     url: 'http://trumpwall.ru:5000/init',
     data: JSON.stringify(req),
     dataType: "json"
  });
  initajax.done(function( data ) {
    if ("token" in data){
      Cookies.set("token",data["token"],{ expires: 31 })
    }
    updateFacts()
  })

})
