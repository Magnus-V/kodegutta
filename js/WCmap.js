
var url = "https://hotell.difi.no/api/json/bergen/dokart?";

function retrieveJSON(){
var req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', url, true);
req.onload  = function() {
   var jsonResponse = req.response;
	 console.log(jsonResponse);
	 var bloodcloth = jsonResponse.entries[0].plassering;
	 console.log(bloodcloth);
	 var ol = document.createElement('ol');
	 document.getElementById('liste').appendChild(ol);
	 var i;
	 for(i=0; i < jsonResponse.length; i++) {
	 		var li = document.createElement('li');
	 		ul.appendChild(li);
	 		li.innerHTML = jsonResponse.entries[i].plassering;
			console.log(jsonResponse.entries[i].plassering);
	 }
 };
req.send(null);


}
