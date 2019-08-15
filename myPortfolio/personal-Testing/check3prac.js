//clicker game
//the function will be ready once document is loaded
$(document).ready(function() {
  //setting a varible to count to be 0 to start
      var count = 0;
      //setting square to be the Id box in the HTML 
      let square =$('#box');
      //when you click on the square, the func will run
      $(square).click(function() {
        //if click times is less than 100, add 1
        if(count < 100) {
          count++;
          //text will say "click me with # of times clicked"
          $(this).text("click  me" + " " + count);
          //otherise, or if more than 100 clicks
        }else{
          //add 10 to the current count amount
          count = count + 10;
          //text will say "wow! with number of clicks"
          $(this).text("wow!!" +" " + count);
          //text will change to 70px
          square.css("font-size","70px");
          //square color will change to pink
          square.css("background-color","pink");
          //square height will change to 190px
          square.css("height","190");
          //square width will change to 190px
          square.css("width","190")
        };
       
      })

  });
//canvas API 
  const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
//fills in the canvas the listed color
ctx.fillStyle = 'pink';
//1st 2 # are how far away from edge, 2nd 2 are sizes of rectangle
ctx.fillRect(10, 10, 150, 100);

