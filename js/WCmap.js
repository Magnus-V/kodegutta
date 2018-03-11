

function initToilet(){

var toilets = [{ "herre":"1", "tid_hverdag":"07.00 - 23.15"},
               { "herre":"0", "tid_hverdag":"06.00-22.00"}];

for(var i = 0; i < toilets.length; i++)
{
  var obj = toilets[i];
  console.log(obj.herre);
}
}
