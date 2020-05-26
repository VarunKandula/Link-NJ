var map;
function initialize() 
{
  map = new google.maps.Map(
      document.getElementById('map'),
      {center: new google.maps.LatLng(40.475071, -74.670090), zoom: 12});
    var mapOptions = {
        mapTypeId: 'roadmap'
    };

                  

  var iconBase = 'https://maps.google.com/mapfiles/ms/icons/';

  var icons = {
    redDot: {
      icon: iconBase + 'red-dot.png'
    },
    blueDot: {
      icon: iconBase + 'blue-dot.png'
    },
  };

var name = 'Name: ';

    // Multiple Markers
    var markers = [
    {
      content: name + 'Bob Kandula', 
      position: new google.maps.LatLng(40.504570,-74.672981), 
      type: 'redDot'
    },

    {
      content: name + 'Vis Kandula', 
      position: new google.maps.LatLng(40.426160,-74.679170), 
      type: 'blueDot'
    },    
    {
      content: name + 'owefonfnoew ', 
      position: new google.maps.LatLng(40.475071,-74.670090), 
      type: 'redDot'
    }


    ];    
    // Loop through our array of markers & place each one on the map  
  for (var i = 0; i < markers.length; i++) 
  {
    var marker = new google.maps.Marker
    ({
      position: markers[i].position,
      icon: icons[markers[i].type].icon,
      map: map
    });

    var infowindow = new google.maps.InfoWindow
    ({
      content: markers[i].content
    });
    
    marker.addListener('click', function() 
    {
      infowindow.open(map, marker);
    });



        
        //Allow each marker to have an info window    
        // google.maps.event.addListener(marker, 'click', (function(marker, i) {
        //     return function() {
        //         infoWindow.setContent(markers[i].content);
        //         infoWindow.open(map, marker);
        //     }
        // })(marker, i));

        // Automatically center the map fitting all markers on the screen
        //map.fitBounds(bounds);

    };//end for 

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    // var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
    //     this.setZoom(12);
    //     google.maps.event.removeListener(boundsListener);
    // });
    
}