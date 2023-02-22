window.onload = function(){
    
    var map; 
    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-24.1835,-46.7895),
            scrollWheel: false,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }
    function addMarker(lat,long,icon,content,click){
        var latLng = {'lat':lat,'lng':long};
        var marker = new google.maps.Marker({
            position:latLng,
            map: map,
            icon: icon,

        });

        var infoWindow = new google.maps.infoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0,20)
        });

        if(click == true){
        google.maps.event.addListener(marker,'click',function(){
            infoWindow.open(map,marker);
        });
    }
        else{
        infoWindow.open(map,marker);
    }
        
    }

    initialize();
    var conteudo = '<p style="color:black;font-size:13px;padding:13px 0;">Meu Endereço!</p>';
    addMarker(-24.182777,-46.788139,'','Meu endereço personalizado!',true);

}