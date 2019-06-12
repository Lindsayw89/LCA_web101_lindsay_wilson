/*$(document).ready(function(){

$('p').css('border','4px solid red');
$('p').css ('fontSize', '10px');
$('h1').css ('fontSize', '80px');





document.getElementById ("head").innerHTML='work';
head.style.borderBottom = 'solid 3px blue';

});*/

 /*(function () {
    'use strict';

    function onPositionReceived(position){
        console.log(position);
    }
    function locationNotReceived(positionError){
        console.log(positionError);
    }

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onPositionReceived,locationNotReceived,{timeout:0});

       var watch = navigator.geolocation.watchPosition(onPositionReceived,locationNotReceived);
       //console.log(watch);
       navigator.geolocation.clearWatch(watch);
      }

}());*/

(function() {
    'use strict';

    if(navigator.geolocation) {
        console.log('true')
    }
}());