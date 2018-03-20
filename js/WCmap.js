

function initToilet(){

var toilets = {
	"toilet": [{
			"herre": "1",
			"tid_hverdag": "07.00 - 23.15",
			"pissoir_only": "NULL",
			"stellerom": "NULL",
			"latitude": "60.388076",
			"tid_sondag": "07.00 - 23.15",
			"plassering": "NONNESETER TERMINAL, SØR",
			"tid_lordag": "07.00 - 23.15",
			"rullestol": "1",
			"adresse": "Lungegårdskaien",
			"pris": "12",
			"id": "1",
			"place": "NONNESETER TERMINAL, SOUTH",
			"dame": "1",
			"longitude": "5.334937"
		},
		{
			"herre": "0",
			"tid_sondag": "06.00-22.00",
			"pissoir_only": "NULL",
			"stellerom": "NULL",
			"latitude": "60.388871",
			"tid_hverdag": "05.30 - 23.50",
			"plassering": "NONNESETER TERMINAL , NORD",
			"tid_lordag": "07.00 - 23.15",
			"rullestol": "1",
			"adresse": "Østre Strømkai",
			"pris": "12",
			"id": "2",
			"place": "NONNESETER TERMINAL , NORTH",
			"dame": "1",
			"longitude": "5.334079"
		},
		{
			"herre": "1",
			"tid_sondag": "NULL",
			"pissoir_only": "NULL",
			"stellerom": "NULL",
			"latitude": "60.388868",
			"tid_hverdag": "09.00 - 17.00",
			"plassering": "SKYSS KUNDESENTER",
			"tid_lordag": "09.00 - 15.00",
			"rullestol": "1",
			"adresse": "Østre Strømkai",
			"pris": "12",
			"id": "3",
			"place": "SKYSS CUSTOMER CENTRE",
			"dame": "1",
			"longitude": "5.334079"
		},
		{
			"herre": "1",
			"tid_sondag": "07.00 - 23.00",
			"pissoir_only": "NULL",
			"stellerom": "NULL",
			"latitude": "60.39041",
			"tid_hverdag": "07.00 - 23.00",
			"plassering": "JERNBANESTASJONEN",
			"tid_lordag": "07.00 - 23.00",
			"rullestol": "NULL",
			"adresse": "Strømgaten 4",
			"pris": "10",
			"id": "4",
			"place": "RAILWAY STATION",
			"dame": "1",
			"longitude": "5.332995"
		},
		{
			"herre": "1",
			"tid_sondag": "08.30 - 22.00",
			"pissoir_only": "NULL",
			"stellerom": "1",
			"latitude": "60.394554",
			"tid_hverdag": "09.00 - 23.00",
			"plassering": "MATHALLEN",
			"tid_lordag": "08.30 - 22.00",
			"rullestol": "1",
			"adresse": "Strandkaien 3",
			"pris": "10",
			"id": "5",
			"place": "FISH MARKET",
			"dame": "1",
			"longitude": "5.324099"
		},
		{
			"herre": "1",
			"tid_sondag": "08.00 - 18.00",
			"pissoir_only": "NULL",
			"stellerom": "",
			"latitude": "60.395432",
			"tid_hverdag": "08.00 - 18.00",
			"plassering": "STRANDKAITERMINALEN",
			"tid_lordag": "08.00 - 18.00",
			"rullestol": "",
			"adresse": "Strandkaien",
			"pris": "10",
			"id": "6",
			"place": "STRANDKAI BOAT TERMINAL",
			"dame": "1",
			"longitude": "5.321034"
		},
		{
			"herre": "1",
			"tid_sondag": "NULL",
			"pissoir_only": "NULL",
			"stellerom": "NULL",
			"latitude": "60.3913929",
			"tid_hverdag": "08.00 - 15.00",
			"plassering": "BERGEN KOMMUNE, INNBYGGERSERVICE",
			"tid_lordag": "NULL",
			"rullestol": "1",
			"adresse": "Kaigaten 4",
			"pris": "0",
			"id": "7",
			"place": "CITIZEN SERVICE CENTRE",
			"dame": "1",
			"longitude": "5.326855"
		},
		{
			"herre": "1",
			"tid_sondag": "NULL",
			"pissoir_only": "NULL",
			"stellerom": "1",
			"latitude": "60.3891794",
			"tid_hverdag": "09.00 - 21.00",
			"plassering": "BERGEN STORSENTER",
			"tid_lordag": "09.00 - 18.00",
			"rullestol": "1",
			"adresse": "Strømgaten 8",
			"pris": "10",
			"id": "8",
			"place": "BERGEN STORSENTER",
			"dame": "1",
			"longitude": "5.3305793"
		},
		{
			"herre": "1",
			"tid_sondag": "NULL",
			"pissoir_only": "NULL",
			"stellerom": "1",
			"latitude": "60.392209",
			"tid_hverdag": "09.00 - 21.00",
			"plassering": "SUNDT MOTEHUS",
			"tid_lordag": "09.00 - 18.00",
			"rullestol": "1",
			"adresse": "Torgallmenningen 14",
			"pris": "10",
			"id": "9",
			"place": "SUNDT FASHION HOUSE",
			"dame": "1",
			"longitude": "5.324011"
		},
		{
			"herre": "1",
			"tid_sondag": "NULL",
			"pissoir_only": "NULL",
			"stellerom": "1",
			"latitude": "60.3928444",
			"tid_hverdag": "09.00 - 20.00",
			"plassering": "XHIBITION",
			"tid_lordag": "09.00 - 18.00",
			"rullestol": "1",
			"adresse": "Småstrandgaten 3",
			"pris": "10",
			"id": "10",
			"place": "XHIBITION",
			"dame": "1",
			"longitude": "5.3239541"
		},
		{
			"herre": "1",
			"tid_sondag": "NULL",
			"pissoir_only": "NULL",
			"stellerom": "1",
			"latitude": "60.3947371",
			"tid_hverdag": "09.00 - 21.00",
			"plassering": "GALLERIET",
			"tid_lordag": "09.00 - 18.00",
			"rullestol": "1",
			"adresse": "Torgallmenningen 8",
			"pris": "10",
			"id": "11",
			"place": "GALLERIET",
			"dame": "1",
			"longitude": "5.3243561"
		},
		{
			"herre": "1",
			"tid_sondag": "NULL",
			"pissoir_only": "NULL",
			"stellerom": "1",
			"latitude": "60.3944194",
			"tid_hverdag": "10.00 - 20.00",
			"plassering": "KLØVERHUSET",
			"tid_lordag": "10.00 - 18.00",
			"rullestol": "1",
			"adresse": "Strandgaten 13 -15",
			"pris": "10",
			"id": "12",
			"place": "KLØVERHUSET",
			"dame": "1",
			"longitude": "5.3205649"
		},
		{
			"herre": "1",
			"tid_sondag": "09.00 - 18.00",
			"pissoir_only": "NULL",
			"stellerom": "NULL",
			"latitude": "60.3974108",
			"tid_hverdag": "09.00 - 18.00",
			"plassering": "BRYGGEN BESØKSSENTER",
			"tid_lordag": "09.00 - 18.00",
			"rullestol": "1",
			"adresse": "Jacobsfjorden, Bryggen",
			"pris": "10",
			"id": "13",
			"place": "BRYGGEN VISITOR CENTRE",
			"dame": "1",
			"longitude": "5.3222145"
		},
		{
			"herre": "NULL",
			"tid_sondag": "ALL",
			"pissoir_only": "1",
			"stellerom": "NULL",
			"latitude": "60.397359",
			"tid_hverdag": "ALL",
			"plassering": "C. SUNDTSGT",
			"tid_lordag": "ALL",
			"rullestol": "NULL",
			"adresse": "C. Sundts gt",
			"pris": "NULL",
			"id": "14",
			"place": "C. SUNDTSGT",
			"dame": "NULL",
			"longitude": "5.313963"
		},
		{
			"herre": "NULL",
			"tid_sondag": "ALL",
			"pissoir_only": "1",
			"stellerom": "NULL",
			"latitude": "60.397557",
			"tid_hverdag": "ALL",
			"plassering": "NORDNES SKOLE",
			"tid_lordag": "ALL",
			"rullestol": "NULL",
			"adresse": "Nordnesparken 3",
			"pris": "NULL",
			"id": "15",
			"place": "NORDNES SKOLE",
			"dame": "NULL",
			"longitude": "5.307858"
		}
	]
}

var keys = [];

document.write("<table border==\"1\"><tr>");
for (key in toilets.toilet[0]) {
	document.write('<td>' + key + '</td>');
}
document.write("</tr>");
for (var i = 0; i < toilets.toilet.length; i++) {
	document.write('<tr>');
	for (key in toilets.toilet[i]) {
  	document.write('<td>' + toilets.toilet[i][key] + '</td>');
  }
	document.write('</tr>');
}
document.write("</table>");

/*

var table = document.getElementById("table");
for(var x = 0; x <toilets.toilet.length; x++){
	for (key in toilets.toilet){
		document.createElement("th");
		th.textContent(toilets.toilet.key);
		table.appendChild.th;

	var trow1 = document.createElement("td");
	var trow2 = document.createElement("td");
	var trow3 = document.createElement("td");
	var trow4 = document.createElement("td");
	var trow5 = document.createElement("td");
	var trow6 = document.createElement("td");
	var trow7 = document.createElement("td");
	var trow8 = document.createElement("td");
	var trow9 = document.createElement("td");
	var trow10 = document.createElement("td");
	var trow11 = document.createElement("td");
	var trow12 = document.createElement("td");
	var trow13 = document.createElement("td");
	var trow14 = document.createElement("td");
	var trow15 = document.createElement("td");
	var trow16 = document.createElement("td");
  var rowItem = document.createElement("tr");
	var rowItem2 = document.createElement("tr");
	var rowItem3 = document.createElement("tr");
	var rowItem4 = document.createElement("tr");
	var rowItem5 = document.createElement("tr");
	var rowItem6 = document.createElement("tr");
	var rowItem7 = document.createElement("tr");
	var rowItem8 = document.createElement("tr");
	var rowItem9 = document.createElement("tr");
	var rowItem10 = document.createElement("tr");
	var rowItem11 = document.createElement("tr");
	var rowItem12 = document.createElement("tr");
	var rowItem13 = document.createElement("tr");
	var rowItem14 = document.createElement("tr");
	var rowItem15 = document.createElement("tr");
	var rowItem16 = document.createElement("tr");

	rowItem.textContent = toilets.toilet[x].id;
  rowItem2.textContent = toilets.toilet[x].plassering;
	rowItem3.textContent = toilets.toilet[x].pris;
	rowItem4.textContent = toilets.toilet[x].tid_hverdag;
	rowItem5.textContent = toilets.toilet[x].tid_lordag;
	rowItem6.textContent = toilets.toilet[x].tid_sondag;
	rowItem7.textContent = toilets.toilet[x].adresse;
	rowItem8.textContent = toilets.toilet[x].stellerom;
	rowItem9.textContent = toilets.toilet[x].herre;
	rowItem10.textContent = toilets.toilet[x].dame;
	rowItem11.textContent = toilets.toilet[x].pissoir_only;
	rowItem12.textContent = toilets.toilet[x].rullestol;
	rowItem13.textContent = toilets.toilet[x].place;
	rowItem14.textContent = toilets.toilet[x].longitude;
	rowItem15.textContent = toilets.toilet[x].latitude;

  //toilets.toilet[x].plassering;
	trow1.appendChild(rowItem);
	trow2.appendChild(rowItem2);
	trow3.appendChild(rowItem3);
	trow4.appendChild(rowItem4);
	trow5.appendChild(rowItem5);
	trow6.appendChild(rowItem6);
	trow7.appendChild(rowItem7);
	trow8.appendChild(rowItem8);
	trow9.appendChild(rowItem9);
	trow10.appendChild(rowItem10);
	trow11.appendChild(rowItem11);
	trow12.appendChild(rowItem12);
	trow13.appendChild(rowItem13);
	trow14.appendChild(rowItem14);
	trow15.appendChild(rowItem15);
	trow16.appendChild(rowItem16);
  table.appendChild(trow1);
	table.appendChild(trow2);
	table.appendChild(trow3);
	table.appendChild(trow4);
	table.appendChild(trow5);
	table.appendChild(trow6);
	table.appendChild(trow7);
	table.appendChild(trow8);
	table.appendChild(trow9);
	table.appendChild(trow10);
	table.appendChild(trow11);
	table.appendChild(trow12);
	table.appendChild(trow13);
	table.appendChild(trow14);
	table.appendChild(trow15);
	table.appendChild(trow16);

table.style.color = "#AAA";
}
}



/*
for(var i = 0; i < toilets.toilet.length; i++)
{
var obj = toilets;
console.log(toilets.toilet[0])
console.log(obj.herre, obj.tid_hverdag, obj.tid_lordag, obj.tid_sondag, obj.pissoir_only,
obj.stellerom, obj.latitude, obj.plassering, obj.rullestol, obj.adresse, obj.pris, obj.id,
obj.place, obj.dame, obj.longitude);

console.log(obj)
}
}
*/
