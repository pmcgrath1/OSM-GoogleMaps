var map = L.map('map');
  var route_data = [];
var watchGeoID = null;

document.addEventListener("deviceready", onDeviceReady(), false);

function onDeviceReady()
	 { 
	 
   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup

//https://github.com/commandprompt/postgres-js
map.locate({watch:true,setView: true,enableHighAccuracy:true});   
	 
//var watchGeoID = navigator.geolocation.watchPosition(onLocationFound,
                                         //    geolocationError,
                                          //   {enableHighAccuracy: true});




//}
	 




function onLocationFound(e) //e
{
    
 // alert(position.coords.longitude)

   var lat_lng = e.latlng;
    route_data.push(lat_lng);



    //alert(route_data);



   var polyline = L.polyline(route_data, { weight: 5,color: 'red'}).addTo(map);

//zoom the map to the polyline
map.fitBounds(polyline.getBounds());
    //var radius = e.accuracy / 2;
    //L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();
   //L.circle(e.latlng, radius).addTo(map);
    //alert(e.latlng)
   
}


map.on('locationfound', onLocationFound);

function onLocationError(e) 
{
    alert(e.message);
}



}  

/*
function sendToDB(){

//alert('made it here');

var conString = "postgres://postgres:eastwood52095@localhost/monday";

var http = require('http');

var pg = require('pg');
pg.connect(conString,function(err, client, done)
 { 
  if(err) throw err;
  client.query('SELECT NOW()', function(err, res)
   {
   	alert('succesfull connection')
    console.log(err)
    console.log(res)
  })
})

};
*/