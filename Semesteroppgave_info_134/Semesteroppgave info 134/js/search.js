var url = "https://hotell.difi.no/api/json/bergen/dokart?";

var listOfLists = [];
var markerList = [];
var resultList = [];
var filterList = [];
var map;


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

window.onload = function () {
              document.getElementById("searchButton").addEventListener("click", simpleSearch);
              field = document.getElementById("simpleSearchField");
      }

function createNumberedList(){
  getJSON(url, function(toiletObject){
  var ol = document.createElement('ol');
  document.getElementById('numberedList').appendChild(ol);
  for(var i=0; i < toiletObject.entries.length; i++) {
     var li = document.createElement('li');
     li.innerHTML = toiletObject.entries[i].plassering;
     ol.appendChild(li);
   };
});
}

//Initisierer kartet.
function initMap () {

  map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 60.391011,
                lng: 5.325950
            },
            zoom: 14
        });
      }

function makeMarkerList () {
    getJSON(url, function(jsonData) {
     data = jsonData.entries;
     for(i = 0; i < data.length ; i++) {
        markerList.push(new google.maps.Marker({
        position: {
            lat: parseFloat(data[i].latitude),
            lng: parseFloat(data[i].longitude)
          },
          map: map,
          label: i + 1 + ""
        }))
      }
  });
}

makeMarkerList();

function newMap () {
  var newMarkerList = [];
  map = new google.maps.Map(document.getElementById('map'),{
    center: {
      lat: 60.391011,
      lng: 5.325950
    },
    zoom: 14
  });
  for (var i = 0; i < resultList.length; i++) {
    newMarkerList.push(new google.maps.Marker({
      position: {
        lat: parseFloat(resultList[i].latitude),
        lng: parseFloat(resultList[i].longitude)
      },
      map: map,
      label: i + 1 + ""
    }))
  }
}

//Sjekker om lokalisjonen har herretoalett
function searchHerre(){
  getJSON(url, function(toiletObject){
  var herreList = [];
  for(var i=0; i < toiletObject.entries.length; i++){
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
  for(var i=0; i<toiletObject.entries.length; i++){
    if(toiletObject.entries[i].dame !="NULL")
    dameList.push(toiletObject.entries[i]);
  };
  listOfLists.push(dameList);
})}

//Sjekker om lokalisjonen er tilpasset handikappede.
function searchRullestol(){
  getJSON(url, function(toiletObject){
  var rullestolList= [];
  for(var i=0; i< toiletObject.entries.length; i++){
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
  for (var i = 0; i < toiletObject.entries.length; i++) {
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
  listOfLists.push(gratisList);
})}


function searchPissior(){
  getJSON(url, function(toiletObject){
  var pissoirList = [];
  for(var i=0; i<toiletObject.entries.length; i++){
    if(toiletObject.entries[i].pissoir_only !="NULL"){
      pissoirList.push(toiletObject.entries[i])
    }
  };
  listOfLists.push(pissoirList);
})}

function delayFilterResult(){
  setTimeout(filterResult, 10);
}

var searchObj = [];
var searchParams = [];

function simpleSearch() {
      searchObj  = [];
      resultList = [];

      var regexHerre = /(herre)|(men)|(man)|(gentleman)|(male)/i
      var regexDame = /(dame)|(female)|(lady)|(woman)|(women)|(kvinne)|(jente)/i
      var regexPissoir = /(pissior)|(urinal)/i
      var regexRullestol = /(rullestol)|(handikap)|(hc)/i
      var regexStellerom = /(stellerom)|(nursery)|(bleieskift)/i
      var regexGratis =/(gratis)|(freebie)|(free)|(kostenlos)/i

      if(regexHerre.test(field.value)){
        searchHerre();
      }
      if(regexDame.test(field.value)){
        searchDame();
      }
      if(regexPissoir.test(field.value)){
       searchPissior();
      }
      if(regexStellerom.test(field.value)){
        searchStellerom();
      }
      if(regexRullestol.test(field.value)){
        searchRullestol();
      }
      if (regexGratis.test(field.value)) {
      searchGratis();
      }

      resultFilter();
      delayNewNumberedList();
      newMap();
      }


function filterResult(){
  getJSON(url, function(toiletObject){
  for (var i = 0; i<toiletObject.entries.length; i++) {
    var found = true;
    for (var y = 0; y < listOfLists.length; y++) {
     if (!listOfLists[y].includes(toiletObject.entries[i])) {
       found = false;
       break;
        }
      }
    //Hvis den ikke eksisterer i en av listene stoppes for-loopen og vi begynner med neste mulige resultat
    if (found) {
      resultList.push(toiletObject.entries[i]);
    }
  }
  listOfLists = [];
}
)
}

function resultFilter(){
    getJSON(url, function(toiletObject){
    resultList = [];
    for(i = 0; i<toiletObject.entries.length; i++){
      var comparison = toiletObject.entries[i];
      if(listOfLists.length === 0){
          resultList.push(comparison);
      }
        for(var y=0; y < listOfLists.length; y++){
          console.log("Lengde på listY " + listOfLists[y].length)
            for(var x= 0; x< listOfLists[y].length; x++){
                var searchParam = listOfLists[y][x];
                console.log("Searchparam toiletObject: ");
                console.log(comparison);
                console.log("SearchObj param: ");
                console.log(searchParam);
                  if(comparison.plassering === searchParam.plassering){
                        resultList.push(comparison);
          }
      }
    }
  }
  listOfLists = [];
}
)
}


var delayer;
//Delayer so that the numberedList is created
function delayNewNumberedList(){
  delayer = setTimeout(newNumberedList, 100);
}

//Creates new numbered list based on resultList;
function newNumberedList() {
  var numberedList = document.getElementById("numberedList");
  numberedList.innerHTML = ""; //Resetter innerHTML, slik at den er klar for ny input.
  var ol = document.createElement('ol');
  numberedList.appendChild(ol);
  for (var i = 0; i < resultList.length; i++) {
    var listElement = document.createElement("li");
    listElement.innerHTML = resultList[i].plassering;
    ol.appendChild(listElement);
  }
}
/*
function simpleSearch(){
  resultList = [];
  var regexHerre = /(herre)|(men)|(man)|(gentleman)|(male)/i
  var regexDame = /(dame)|(female)|(lady)|(woman)|(women)|(kvinne)|(jente)/i
  var regexPissoir = /(pissior)|(urinal)/i
  var regexRullestol = /(rullestol)|(handikap)|(hc)/i
    var regexStellerom = /(stellerom)|(nursery)|(bleieskift)/i
    var regexGratis =/(gratis)|(freebie)|(free)|(kostenlos)/i

   if (regexDame.test(field.value)) {
     searchDame();
   }
   if (regexRullestol.test(field.value)) {
     searchRullestol();
 }
 if (regexStellerom.test(field.value)) {
   searchStellerom();
 }
 if (regexGratis.test(field.value)) {
   searchGratis();
 }
 if(regexHerre.test(field.value)){
  searchHerre();
 }
 if(regexPissoir.test(field.value)){
   searchPissior()
 }
   console.log("ListOflist før filter");
   console.log(listOfLists);
   delayFilterResult();

   console.log("ListOfList etter filter");
   console.log(listOfLists);

   console.log("ResultList:");
   console.log(resultList);


   delayNewNumberedList();
 }

/**
// Skjekker for feil og kjører fylliste viss ikke feil.
getJSON(url, function(jsonData) {



        data = jsonData.entries;
        console.log(data);


});
*/
