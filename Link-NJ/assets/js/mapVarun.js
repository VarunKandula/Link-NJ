var map;
function initialize() 
{
  map = new google.maps.Map(
      document.getElementById('map'),
      {center: new google.maps.LatLng(40.475071, -74.670090), zoom: 12});
    var mapOptions = {
        mapTypeId: 'roadmap'
    };

    var redDot = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
    var blueDot = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    var name = 'Name: ';
    var mail = ", Email: ";
    var number = ", Phone Number: ";
    
    // Multiple Markers
    var markers = 
    [
      {
        position: new google.maps.LatLng(40.504570,-74.672981), 
        content: name + 'Varun K' + number + '7327897452', 
        iconImage: redDot
      },

      {
        position: new google.maps.LatLng(40.426160,-74.679170), 
        content: name + 'Vis K' + number + '9086289716', 
        iconImage: blueDot
      },   

      {
        position: new google.maps.LatLng(40.475071,-74.670090), 
        content: name + 'Rao K' + number + '9082245927', 
        iconImage: redDot
      }
    ]; 


    function addMarker(props)
    {
      var marker = new google.maps.Marker
      ({
        position: props.position,
        map:map
      });

        //sets icon
        marker.setIcon(props.iconImage);

        //adds info window to page
        var infoWindow = new google.maps.InfoWindow({
          content:props.content
        });//end add info window

        //opens info window on click
        marker.addListener('click', function(){
          infoWindow.open(map, marker);
        });//end add listener

        //zooms in on double click
        marker.addListener('dblclick', function() {
          map.setZoom(13);
          map.setCenter(props.position());
        });//end zoom 
    }//end addMarker Funcgtion

    for(var i = 0; i < markers.length; i++ )  
    {
      addMarker(markers[i]);

    }//end for loop to add markers onto map 

    map.fitBounds(bounds);
}//end initalize function