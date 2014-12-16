var route_data = [];


var app = {
    // Application Constructor
    initialize: function() 
      {
        this.bindEvents();
      },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function()
       {
        document.addEventListener('deviceready', this.onDeviceReady, false);
       },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() 
      {
       // app.receivedEvent('deviceready');
       navigator.geolocation.watchPosition(app.onSuccess, app.onError);
       
      },
 
    onSuccess: function(position)
    {

        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        var latLong = new google.maps.LatLng(latitude, longitude);
     
      route_data.push(latLong);
      
    //  alert(route_data);
      var mapOptions = 
        {
            center: latLong,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
        

       // var marker = new google.maps.Marker({position: latLong,
      //  map: map,
      //  title: 'my location'});
 
      var trackPath = new google.maps.Polyline
    ({
      path: route_data,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 4
    });

    // Apply the line to the map
    trackPath.setMap(map);






     
    },
    
    onError: function(error){
        alert("the code is " + error.code + ". \n" + "message: " + error.message);
    },
};
 
app.initialize();














































/*
 var watchGeoID = null;
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
	 { 
	  alert("onDeviceReady 10"); 
           getGPSInfo();
	 }

function getGPSInfo(){

alert("getGPSInfo 10"); 
  var watchGeoID = navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                             geolocationError,
                                             {enableHighAccuracy: true});

 
}

 function geolocationSuccess(position)
     {
      alert(position.coords.longitude )
       alert("onSuccess 10"); 

var element = document.getElementById('GPSdata');


var today = new Date().toISOString();
    
       element.innerHTML =('Latitude: '          + position.coords.latitude        + '<br />' +
              'Longitude: '         + position.coords.longitude        + '<br />' +
              'Altitude: '          + position.coords.altitude         + '<br />' +
              'Accuracy: '          + position.coords.accuracy          + '<br />' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '<br />' +
              'Heading: '           + position.coords.heading          + '<br />' +
              'Speed: '             + position.coords.speed            + '<br />' +
	      'Timestamp: '         + today              + '<br />');


    
    };

    // onError Callback receives a PositionError object
    //
    function geolocationError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
*/

























