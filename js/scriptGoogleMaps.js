/* Her er for hamburger menyen */
function Meny() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

		function funksjon() {
    var x = document.getElementById('p');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
/* Her er js for kartet. */

function initMap() {
        var akvariet = {lat: 60.3996913, lng: 5.303371};
        var bryggen = {lat: 60.397076,  lng: 5.324383};
        var floien = {lat: 60.394504, lng: 5.34283};
        var hulen = {lat: 60.384759, lng: 5.325364};
        var torgAll = {lat: 60.393199, lng: 5.324125};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: akvariet
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Akvariet</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Akvariet</b> Sprell og moro for dyr og mennesker</p>'+
            '<p>Mer info om: <a href="https://www.akvariet.no/"> AKVARIET</a> '+
            '  (Åpningstider: 10:00 - 16:00).</p>'+
            '</div>'+
            '</div>';

        var contentString2 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Bryggen</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Bryggen</b> Historisk kulturbegivenhet nær Bergen by. Populært turistmål</p>'+
            '<p>Mer info om: <a href="https://www.bergen.no/"> BERGEN</a> '+
            '</p>'+
            '</div>'+
            '</div>';

        var contentString3 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Floien</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Floien</b> Fjelltur for hele familien med utsikt over Bergen by</p>'+
            '<p>Mer info om: <a href="https://www.floyen.no/"> FLOIEN</a> '+
            '</p>'+
            '</div>'+
            '</div>';

        var contentString4 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Hulen</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Hulen</b> Bar tilpasset studenter</p>'+
            '<p>Mer info om: <a href="https://www.hulen.no/"> HULEN</a> '+
            '</p>'+
            '</div>'+
            '</div>';

        var contentString5 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Torgallmenningen</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Torgallmenningen</b> Shopping-gate i Bergen sentrum</p>'+
            '<p>Mer info om: <a href="https://www.bt.no/nyheter/i/557y1/Torgallmenningen"> TORGALLMENNINGEN</a> '+
            '</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var infowindow2 = new google.maps.InfoWindow({
          content: contentString2
        });

        var infowindow3 = new google.maps.InfoWindow({
          content: contentString3
        });

        var infowindow4 = new google.maps.InfoWindow({
          content: contentString4
        });

        var infowindow5 = new google.maps.InfoWindow({
          content: contentString5
        });

        var marker = new google.maps.Marker({
          position: akvariet,
          map: map
          title: 'Akvariet (Bergen)'
        });
        var marker2 = new google.maps.Marker({
          position: bryggen,
          map: map
        });
        var marker3 = new google.maps.Marker({
          position: floien,
          map: map
        });
        var marker4 = new google.maps.Marker({
          position: hulen,
          map: map
        });
        var marker5 = new google.maps.Marker({
          position: torgAll,
          map: map
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
          infowindow2.close();
          infowindow3.close();
          infowindow4.close();
          infowindow5.close();

        });
        marker2.addListener('click', function() {
          infowindow2.open(map, marker2);
          infowindow.close();
          InfoWindow3.close();
          infowindow4.close();
          infowindow5.close();
        });
        marker3.addListener('click', function() {
          infowindow3.open(map, marker3);
          infowindow.close();
          infowindow2.close();
          infowindow4.close();
          infowindow5.close();
        });
        marker4.addListener('click', function() {
          infowindow4.open(map, marker4);
          infowindow.close();
          infowindow2.close();
          infowindow3.close();
          infowindow5.close();
        });
        marker5.addListener('click', function() {
          infowindow5.open(map, marker5);
          infowindow.close();
          infowindow2.close();
          infowindow3.close();
          infowindow4.close();
        });

    function initWC(){


    }
}
