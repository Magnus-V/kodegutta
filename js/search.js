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
      };

      // Skjekker for feil og kjører fylliste viss ikke feil.
      getJSON(url, function(jsonData) {



              data = jsonData.entries;
              console.log(data);


      });


function createNumberedList(){
  getJSON(url, function(toiletObject){
  var ol = document.createElement('ol');
  document.getElementById('liste').appendChild(ol);
  for(i=0; i < toiletObject.entries.length; i++) {
     var li = document.createElement('li');
     li.innerHTML = toiletObject.entries[i].plassering;
     ol.appendChild(li);
   }
})
}

/**


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
*/
