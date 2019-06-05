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
