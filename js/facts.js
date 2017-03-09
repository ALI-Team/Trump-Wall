function publishFact(msg){
   $.ajax({
      type: "POST",
      contentType: "application/json",
      url: 'http://tux.ivar.tech:5000/createfact',
      data: JSON.stringify({"response":"","fact":"IMA FUCK A WHITE BITCH","author":"69"}),
      dataType: "json"
   });
	//$.post("http://tux.ivar.tech:5000/createfact",{"response":"","text":"IMA FUCK A WHITE BITCH","author":"69"})
}
function openComposeDialog(){
  
}
