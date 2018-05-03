var url = "https://hotell.difi.no/api/json/bergen/lekeplasser?";

var resultList = [];
var markerList= [];
var map;


var getJson = function(url,callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.response)
    }
  };
  xhr.send();
}

function initMap () {

  map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 60.391011,
                lng: 5.325950
            },
            zoom: 12
        });
      }

function createNumberedList(){
        getJson(url, function(lekeplassObject){
        var ol = document.createElement('ol');
        document.getElementById('liste').appendChild(ol);
        for(i=0; i < lekeplassObject.entries.length; i++) {
           var li = document.createElement('li');
           li.innerHTML = lekeplassObject.entries[i].navn;
           ol.appendChild(li);
         };
      });
      }
      createNumberedList();


function makeMarkerList () {
  getJson(url, function (lekeplassObject) {
    data = lekeplassObject.entries;
    for (i = 0; i <data.length; i++) {
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
makeMarkerList ();
