

var xTurn = true;
function placemarker (ID) {
    if(xTurn){
        document.getElementById(ID).innerHTML= 'x';
    }
    else{
         document.getElementById(ID).innerHTML= 'o';
    }

    xTurn = !xTurn;
}

/*

function changetoX () {
    gamemarker='x'
    console.log("The x button was clicked!")
}

function changetoO(){
gamemarker='o';
console.log("The o button was clicked!")

}
function placemarker(ID) {
    if(ID==='10') {
        document.getElementById(ID).innerHTML='x';}
        else{
            document.getElementById(ID).innerHTML='o'; 
        }


    }
    */

//if changeto o==id 11 then innerhtml='x'

