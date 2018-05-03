/*  Alle kommentarer i filen peker til koden som står under.
*   Javascript fil tilhørende til utvekslingsstudie.html.
*   Funksjon: La brukeren finne utvekslingsstudie som matcher brukerens søkekriterier.
*/
// url til utvekslingsstudie datasettet.
var url = "https://fs.data.uib.no/KEYyjupu4yru/json/studkat/utvekslingsavtaler";

// Andre globale variabler
var fakultetArray = [];
var fagNavnArray = [];
var landArray = [];

// variabelen "getJson" satt til funksjonene som henter inn datasettet med callback funksjon.
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

//Funksjon som legger til options i en html "selection" fra fakultet i datasettet.
// Alle duplikater blir ikke lagt inn som options
function createFakultetSelectContent () {
  getJson(url, function (avtaleObject) {
    for (j = 0; j < avtaleObject.avtale.length; j++) {
      var fakultet = avtaleObject.avtale[j].fakultet;
      if (!fakultetArray.includes(fakultet)) fakultetArray.push(fakultet);
    }

    for (i=0; i < fakultetArray.length; i++){
       fakultet = fakultetArray[i];
      var option = document.createElement("option");
      option.setAttribute("value", fakultet);
      var fakultetText = document.createTextNode(fakultet);
      option.appendChild(fakultetText);
      document.getElementById("fakultet").appendChild(option);
    };
  })
}
createFakultetSelectContent();

//Funksjon som legger til options i en html "selection" fra fagnavn i datasettet.
// Alle duplikater blir ikke lagt inn som options
function createFagSelectContent () {
  getJson(url, function (avtaleObject) {
    for (j = 0; j < avtaleObject.avtale.length; j++) {
      var faagNavn = avtaleObject.avtale[j].fagnavn;
      if (!fagNavnArray.includes(faagNavn)) fagNavnArray.push(faagNavn);
    }

    for (i=0; i < fagNavnArray.length; i++){
       faagNavn = fagNavnArray[i];
      var option = document.createElement("option");
      option.setAttribute("value", faagNavn);
      var fagText = document.createTextNode(faagNavn);
      option.appendChild(fagText);
      document.getElementById("fag").appendChild(option);
    };
  })
}
createFagSelectContent();

//Funksjon som legger til options i en html "selection" fra land i datasettet.
// Alle duplikater blir ikke lagt inn som options
function createLandSelectContent () {
  getJson(url, function (avtaleObject) {
    for (j = 0; j < avtaleObject.avtale.length; j++) {
      var land = avtaleObject.avtale[j].land;
      if (!landArray.includes(land)) landArray.push(land);
    }

    for (i=0; i < landArray.length; i++){
       land = landArray[i];
      var option = document.createElement("option");
      option.setAttribute("value", land);
      var landText = document.createTextNode(land);
      option.appendChild(landText);
      document.getElementById("land").appendChild(option);
    };
  })
}
createLandSelectContent();

//Funksjon som lar brukeren søke etter utvekslingsstudie etter kriteriene "fakultet" og "fagnavn".
function finnUtveksling () {
  getJson(url, function (avtaleObject){

// Henter index fra "fakultet" og "fagnavn"
    var selectionFakultet = document.getElementById("fakultet");
    var optionFakultetIndex = selectionFakultet.options[selectionFakultet.selectedIndex].value;

    var selectionFag = document.getElementById("fag");
    var optionFagIndex = selectionFag.options[selectionFag.selectedIndex].value;

// tom 'array[]' som blir tømt om det finnes elementer i det fra tidligere søk
    var passed = [];
    if(passed.length > 0) {
      passed = [];
    }


// En 'foor loop' som går gjennom alle utvekslingsavtalene
    for (i=0; i < avtaleObject.avtale.length; i++) {

// En 'if' settning som sjekker om det er noen utvekslingsstudier i datasettet som har brukerens valgte fakultet og fag.
      if(avtaleObject.avtale[i].fakultet === optionFakultetIndex &&
         avtaleObject.avtale[i].fagnavn === optionFagIndex) {

//Om et element i datasettet består 'if' testen blir det printet ut i html.
            var overskrift = document.createElement("H3");
            var tOverskrift = document.createTextNode("Utvekslingsavtale:");
                overskrift.appendChild(tOverskrift);
                document.getElementById("utvekslingStudie").appendChild(overskrift);

            var utvekslingsprogram = document.createElement("P");
            var tUtvekslingsprogram = document.createTextNode("Utvekslingsprogram: " + avtaleObject.avtale[i].utvekslingsprogram);
                utvekslingsprogram.appendChild(tUtvekslingsprogram);
                document.getElementById("utvekslingStudie").appendChild(utvekslingsprogram);

            var land = document.createElement("P");
            var tLand = document.createTextNode("Land: " + avtaleObject.avtale[i].land);
                land.appendChild(tLand);
                document.getElementById("utvekslingStudie").appendChild(land);

            var institusjon = document.createElement("P");
            var tInstitusjon = document.createTextNode("Institusjon: " + avtaleObject.avtale[i].institusjon);
                institusjon.appendChild(tInstitusjon);
                document.getElementById("utvekslingStudie").appendChild(institusjon);

            var fakultet = document.createElement("P");
            var tFakultet = document.createTextNode("Fakultet: " + avtaleObject.avtale[i].fakultet);
                fakultet.appendChild(tFakultet);
                document.getElementById("utvekslingStudie").appendChild(fakultet);


            var institutt = document.createElement("P");
            var tInstitutt = document.createTextNode("Institutt: " + avtaleObject.avtale[i].institutt);
                institutt.appendChild(tInstitutt);
                document.getElementById("utvekslingStudie").appendChild(institutt);

            var fagnavn = document.createElement("P");
            var tFagnavn = document.createTextNode("Fagnavn: " + avtaleObject.avtale[i].fagnavn);
                fagnavn.appendChild(tFagnavn);
                document.getElementById("utvekslingStudie").appendChild(fagnavn);

            var antall_plasser = document.createElement("P");
            var tAntall_plasser = document.createTextNode("Antall plasser: " + avtaleObject.avtale[i].antall_plasser);
                antall_plasser.appendChild(tAntall_plasser);
                document.getElementById("utvekslingStudie").appendChild(antall_plasser);
// om ingen elementer består 'if' testen blir elementene lagt til i en array.
                  passed.push(avtaleObject.avtale[i]);

          }
          }
// Om denne arrayen er > 0 vil det bli printet ut en melding
          if(passed.length === 0) {
            var finnesIkke = document.createElement("p");
            var tFinnesIkke = document.createTextNode("Det finnes ingen utvekslingsstudier som matcher dine kriterier");
                finnesIkke.appendChild(tFinnesIkke);
                document.getElementById("utvekslingStudie").appendChild(finnesIkke);
          }
          console.log(passed);
  })
}

// Samme funksjon som over, men med søkekriteriet "land" lagt til.
function finnUtvekslingMedLand () {
  getJson(url, function (avtaleObject){

    var selectionFakultet = document.getElementById("fakultet");
    var optionFakultetIndex = selectionFakultet.options[selectionFakultet.selectedIndex].value;

    var selectionFag = document.getElementById("fag");
    var optionFagIndex = selectionFag.options[selectionFag.selectedIndex].value;

    var selectionLand = document.getElementById("land");
    var optionLandIndex = selectionLand.options[selectionLand.selectedIndex].value;

    var passed = [];
    if(passed.length > 0) {
      passed.length = 0;
    }

    for (i=0; i < avtaleObject.avtale.length; i++) {

      if(avtaleObject.avtale[i].fakultet === optionFakultetIndex &&
         avtaleObject.avtale[i].fagnavn === optionFagIndex &&
        avtaleObject.avtale[i].land === optionLandIndex) {

            var overskrift = document.createElement("H3");
            var tOverskrift = document.createTextNode("Utvekslingsavtale:");
                overskrift.appendChild(tOverskrift);
                document.getElementById("utvekslingStudie").appendChild(overskrift);

            var utvekslingsprogram = document.createElement("P");
            var tUtvekslingsprogram = document.createTextNode("Utvekslingsprogram: " + avtaleObject.avtale[i].utvekslingsprogram);
                utvekslingsprogram.appendChild(tUtvekslingsprogram);
                document.getElementById("utvekslingStudie").appendChild(utvekslingsprogram);

            var land = document.createElement("P");
            var tLand = document.createTextNode("Land: " + avtaleObject.avtale[i].land);
                land.appendChild(tLand);
                document.getElementById("utvekslingStudie").appendChild(land);

            var institusjon = document.createElement("P");
            var tInstitusjon = document.createTextNode("Institusjon: " + avtaleObject.avtale[i].institusjon);
                institusjon.appendChild(tInstitusjon);
                document.getElementById("utvekslingStudie").appendChild(institusjon);

            var fakultet = document.createElement("P");
            var tFakultet = document.createTextNode("Fakultet: " + avtaleObject.avtale[i].fakultet);
                fakultet.appendChild(tFakultet);
                document.getElementById("utvekslingStudie").appendChild(fakultet);


            var institutt = document.createElement("P");
            var tInstitutt = document.createTextNode("Institutt: " + avtaleObject.avtale[i].institutt);
                institutt.appendChild(tInstitutt);
                document.getElementById("utvekslingStudie").appendChild(institutt);

            var fagnavn = document.createElement("P");
            var tFagnavn = document.createTextNode("Fagnavn: " + avtaleObject.avtale[i].fagnavn);
                fagnavn.appendChild(tFagnavn);
                document.getElementById("utvekslingStudie").appendChild(fagnavn);

            var antall_plasser = document.createElement("P");
            var tAntall_plasser = document.createTextNode("Antall plasser: " + avtaleObject.avtale[i].antall_plasser);
                antall_plasser.appendChild(tAntall_plasser);
                document.getElementById("utvekslingStudie").appendChild(antall_plasser);

                passed.push(avtaleObject.avtale[i]);
          }
        };
          if(passed.length === 0) {
            var finnesIkke = document.createElement("P");
            var tFinnesIkke = document.createTextNode("Det finnes ingen utvekslingsstudier som matcher dine kriterier");
                finnesIkke.appendChild(tFinnesIkke);
                document.getElementById("utvekslingStudie").appendChild(finnesIkke);
          }
  })
}
