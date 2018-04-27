var url = "https://hotell.difi.no/api/json/bergen/dokart?";

var listOfLists = [];

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
  };
  listOfLists.push(dameList);
}







/**
function makeMarkerList(){
          getJSON(url, function(jsonData){
            data = jsonData.entries;
            for(i=0; i < data.length; i++) {
              markerList.push(new google.maps.Marker({
                position: {
                  lat: parseFloat(data[i].latitude),
                  lng: parseFLoat(data[i].longitude)
                },
                map: map,
                label: i + 1 + ""
              }))
            }
          })
      };
      makeMarkerList();
/**

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

// Skjekker for feil og kjører fylliste viss ikke feil.
getJSON(url, function(jsonData) {



        data = jsonData.entries;
        console.log(data);


});
*/
