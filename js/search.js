var url = "https://hotell.difi.no/api/json/bergen/dokart?";

var toiletObject = retrieveJSON();

function retrieveJSON(){
  var req = new XMLHttpRequest();
  req.responseType = 'json';
  req.open('GET', url, true);
  req.onload  = function() {
    toiletObject = req.response;
 };
 req.send(null);
}


function createNumberedList(){
  var ol = document.createElement('ol');
  document.getElementById('liste').appendChild(ol);
  for(i=0; i < toiletObject.entries.length ; i++) {
     var li = document.createElement('li');
     li.innerHTML = toiletObject.entries[i].plassering;
     ol.appendChild(li);
};
}
