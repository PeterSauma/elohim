
function iniciarMap(){
    var coord = {lat:-32.9114229 ,lng:  -68.7683232};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map,
      title: "Tecnomundo",
      animation: google.maps.Animation.BOUNCE
    });
}