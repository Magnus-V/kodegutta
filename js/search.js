var url = "https://hotell.difi.no/api/json/bergen/dokart?";

var listOfLists = [];
var markerList = [];
var resultList = [];
var filterList = [];


var getJSON = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.response)
          }
        };
        xhr.send();
      }

function createNumberedList(){
  getJSON(url, function(toiletObject){
  var ol = document.createElement('ol');
  document.getElementById('liste').appendChild(ol);
  for(i=0; i < toiletObject.entries.length; i++) {
     var li = document.createElement('li');
     li.innerHTML = toiletObject.entries[i].plassering;
     ol.appendChild(li);
   };
});
}

function initMap () {

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
            lat: 60.391011,
            lng: 5.325950
    },
      zoom: 14
    });
  }

//Sjekker om lokalisjonen har herretoalett
function searchHerre(){
  getJSON(url, function(toiletObject){
  var herreList = [];
  for(i=0; i < toiletObject.entries.length; i++){
    if(toiletObject.entries[i].herre != "NULL"){
      herreList.push(toiletObject.entries[i]);
    }
  }
  listOfLists.push(herreList);
})}

//Søker etter om lokalisjonen har dametoalett
function searchDame(){
  getJSON(url, function(toiletObject){
  var dameList = [];
  for(i=0; i<toiletObject.entries.length; i++){
    if(toiletObject.entries[i].dame !="NULL")
    dameList.push(toiletObject.entries[i]);
  };
  listOfLists.push(dameList);
})}

//Sjekker om lokalisjonen er tilpasset handikappede.
function searchRullestol(){
  getJSON(url, function(toiletObject){
  var rullestolList= [];
  for(i=0; i< toiletObject.entries.length; i++){
    if(toiletObject.entries[i].rullestol == 1){
      rullestolList.push(toiletObject.entries[i]);
    }
  };
  listOfLists.push(rullestolList);
})}

//Sjekker om om lokalisjonen har stellerom.
function searchStellerom() {
  getJSON(url, function(toiletObject){
  var stelleromList = [];
  for (i = 0; i < toiletObject.entries.length; i++) {
    if (toiletObject.entries[i].stellerom != "NULL") {
      stelleromList.push(toiletObject.entries[i]);
    }
  };
  listOfLists.push(stelleromList);
})}

//Sjekker prisen på lokalisjonen.
function searchGratis() {
  getJSON(url, function(toiletObject){
  var gratisList = [];
  for (var i = 0; i < toiletObject.entries.length; i++) {
    if (toiletObject.entries[i].pris == "0" || toiletObject.entries[i].pris == "NULL") {
      gratisList.push(toiletObject.entries[i]);
    }
  };
  listOfList.push(gratisList);
})}

function filterResult() {
  getJSON(url, function(toiletObject){
  for (i = 0; i < toiletList.entries.length; i++) {
    var found = true;
    for (y = 0; y < listOfList.length; y++) {
      if (!listList[y].includes(toiletObject.entries[i])) {
        found = false;
        break; //stopper j-loopen. Hvis den ikke er i en liste trenger den ikke sjekke de andre da objektet skal finne sted i alle listene som er objekter i listList.
      }
    }
    if (keep) {
      resultList.push(toiletObject.entries[i]);
    }
  }})
  listList = [];
}

function simpleSearch(){
  resultList = [];
  var regexAdresse = /(adresse)|(address)|(gate)|(vei)/i;
  var regexDame = /(dame)|(lady)|(woman)|(women)|(kvinne)|(jente)/i
  var regexPissoir = /(pissior)|(urinal)/i
  var regexPlassering = /(place)|(plassering)|(lokalisjon)|(sted)/i
  var regexPris = /(price)|(pris)|(kroner)|(money)/i
  var regexRullestol = /(rullestol)|(handikap)|(hc)/i
  var regexStellerom = /(gratis)|(freebie)|(free)|(kostenlos)/i

}
}
 if (regexDame.test(field.value)) {
   searchDame();
 }
 if (regexRullestol.test(field.value)) {
   searchRullestol();
 }
 if (regexStelle.test(field.value)) {
   searchStellerom();
 }
   if (regexGratis.test(field.value)) {
   searchGratis();
}

   filterResult();
   updateMap();
   makeNewList();

 }
/**
// Skjekker for feil og kjører fylliste viss ikke feil.
getJSON(url, function(jsonData) {



        data = jsonData.entries;
        console.log(data);


});
*/
