
var url = "https://hotell.difi.no/api/json/bergen/dokart?";

function retrieveJSON(){
var req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', url, true);
req.onload  = function() {
   var jsonResponse = req.response;
	 console.log(jsonResponse);
};
req.send(null);
}
