var url = "https://hotell.difi.no/api/json/bergen/dokart?";

function Search(){
var req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', url, true);
req.onload  = function() {
   var jsonResponse = req.response;
}
