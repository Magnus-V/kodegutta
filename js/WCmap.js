
var url = "https://hotell.difi.no/api/json/bergen/dokart?";

function retrieveJSON(){
var req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', url, true);
req.onload  = function() {
   var jsonResponse = req.response;
	 console.log(jsonResponse);
   var ol = document.createElement('ol');
   document.getElementById('liste').appendChild(ol);
   for(i=0; i < jsonResponse.entries.length; i++) {
      var li = document.createElement('li');
      li.innerHTML = jsonResponse.entries[i].plassering;
      ol.appendChild(li);
 }
};

req.send(null);
}
