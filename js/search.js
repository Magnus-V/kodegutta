var url = "https://hotell.difi.no/api/json/bergen/dokart?";

var toiletObject = retrieveJSON();
var listOfLists = [];

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
  for(i=0; i < toiletObject.entries.length; i++) {
     var li = document.createElement('li');
     li.innerHTML = toiletObject.entries[i].plassering;
     ol.appendChild(li);
};

function searchHerre(){
  var herreList = [];
  for(i=0; i < toiletObject.entries.length; i++)
  if(toiletObject.entries[i].herre != "NULL"){
    herreList.push(toiletObject.entries[i]);
  }
  listOfLists.push(herreList);
}

function searchDame(){
  var dameList = [];
  for(i=0; i<toiletObject.entries.length; i++){
    if(toiletObject.entries[i].dame !="NULL")
    dameList.push(toiletObject.entries[i]);
  }
  listOfLists.push(dameList);
}


function simpleSearch(){
  resultList = [];
  var regexAdresse =
  var regexDame =
  var regexPissoir =
  var regexPlassering =
  var regexPris =
  var regexRullestol =
  var regexStellerom =

}

}
