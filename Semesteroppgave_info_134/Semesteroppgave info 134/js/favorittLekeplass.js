var url = "https://hotell.difi.no/api/json/bergen/lekeplasser?";
var url2 = "https://hotell.difi.no/api/json/bergen/dokart?";
var map;
var lat;
var lng;
var markerArray = [];
var closestMarkerArray = [];
var marker;
var distanceArray = [];
var minvalue;
var indexx;


// Funksjon som henter datasettet fra url/url2
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


// Initisierer kartet på siden
function initMap () {

  map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 60.391011,
                lng: 5.325950
            },
            zoom: 14
        });
      }


//Funksjon som setter inn options i "html select" = navn på lekeplassene
      function createSelectContent () {
        getJson(url, function (lekeplassObject) {

          for (i=0; i < lekeplassObject.entries.length; i++) {
            var navnPass = (lekeplassObject.entries[i].navn);

          var option = document.createElement("option");
          option.setAttribute("value", navnPass);

          var passes =  document.createTextNode(navnPass);
          option.appendChild(passes);

          document.getElementById("selectListe").appendChild(option);
        };
        })
      }
      createSelectContent();

//Funksjon som henter index fra "select html" og setter marker på kartet med lat/lng hvor select index === lekeplass navn
      function getFavorite (){
        getJson(url, function (lekeplassObject){
          var selection = document.getElementById("selectListe");
          var optionIndex = selection.options[selection.selectedIndex].value;

// om det alt finnes en favoritt marker på kartet vil den bli fjærnet
          if(markerArray.length > 0) {

            clearMarker();

          }

          for(i=0; i < lekeplassObject.entries.length; i++) {


            if(lekeplassObject.entries[i].navn === optionIndex) {


              lat = lekeplassObject.entries[i].latitude;
              lng = lekeplassObject.entries[i].longitude;

            markerArray.push(new google.maps.Marker({
                position: {
                  lat: parseFloat(lat),
                  lng: parseFloat(lng)
                },
                map: map,
                label: 1 + ""
              }))
              }
          }
        })
// Kaller på funksjonene slik at alt kommer opp når brukeren trykker på 1 knapp
        findClosest();
        closestMarker();
      }

//Funksjon for å ta vekk marker til lekeplass
      function clearMarker () {
        for(i=0; i < markerArray.length; i++) {
          markerArray[i].setMap(null);
        }
        markerArray = [];
      }

//Funksjon for å ta vekk marker til toalett
      function clearClosestMarker () {
        for(i=0; i < closestMarkerArray.length; i++) {
          closestMarkerArray[i].setMap(null);
        }
        closestMarkerArray = [];
      }


// Funksjon som regner ut avstanden til alle toalett fra valgt lekeplass
      function findClosest () {
        getJson(url2, function (toiletObject){
          if(distanceArray.length > 0) {
            distanceArray = [];
          }

          for (i = 0; i < toiletObject.entries.length; i++){
          var  lat2 = toiletObject.entries[i].latitude;
          var  lng2 = toiletObject.entries[i].longitude;
            var distance = google.maps.geometry.spherical.computeDistanceBetween (
              new google.maps.LatLng(lat,lng), new google.maps.LatLng(lat2, lng2));
              distanceArray.push(distance);

          }
          finnMinste();
          findIndex();


        })
      }

// Funksjon som finner den minste avstanden til et toalett fra lekeplassen
      function finnMinste () {
         minvalue = distanceArray[0];
        for ( j = 0; j < distanceArray.length; j++) {
          if (distanceArray[j] < minvalue){
            minvalue = distanceArray[j];
          }
        }

      }

//Funksjon som finner index i distanceaArayen til den med minst avstand
      function findIndex () {
       indexx =  distanceArray.indexOf(minvalue);
        console.log(indexx);
      }

// Funksjon som setter marker til toalettet med kortest avstand til valgt toalett.
      function closestMarker () {
      getJson(url2, function(toiletObject){

        if(closestMarkerArray.length > 0) {

          clearClosestMarker();
        }
      var lat3 = toiletObject.entries[indexx].latitude;
      var lng3 = toiletObject.entries[indexx].longitude;
        closestMarkerArray.push(new google.maps.Marker({
          position: {
            lat: parseFloat(lat3),
            lng: parseFloat(lng3)
          },
          map: map,
          label: 2 + ""
        }))
      })
      }
