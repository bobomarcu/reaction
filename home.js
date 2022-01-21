
var createdTime = 0;
var clickedTime=0;
var reactionTime=0;
var activ = 0;
var clic = 0; 

 function startsec(){
         clic++;

         if(clic === 1){
            activ = 1;
             setTimeout(function () {
             $("#bec1").css("background", "red");
             beep();
             }, 1000);
             setTimeout(function () {
             $("#bec2").css("background", "red");
             beep();
             }, 2000);
             setTimeout(function () {
             $("#bec3").css("background", "red");
             beep();
             }, 3000);
             setTimeout(function () {
             $("#bec4").css("background", "red");
             beep();
             }, 4000 );
             setTimeout(function () {
             $("#bec5").css("background", "red");
             beep();
             }, 5000 );
         
                 var rand = close_rand(5009,10000);
                         console.log(rand);
                         
                         function close_rand(min,max){
                             return Math.floor(Math.random() * (max - min + 1) ) + min;
                         }
             
             setTimeout(function () {
             $(".indiv").css("background", "black");
              createdTime = Date.now();
                 console.log(createdTime);
         }, rand);
         
         function beep() {
                 var snd = new Audio("soundf1.mp3");  
                 snd.play();
             }
         }
         else if(clic > 1 ){
             return;
         }
     }
         

     

function add(){
         
         if( activ === 1 ){
         clickedTime=Date.now();
         console.log(clickedTime);
         var a =clickedTime-createdTime;
         reactionTime= (a/1000)%1;
         console.log(reactionTime);
         document.getElementById("res").innerHTML="Your Reaction Time is: " + reactionTime.toFixed(3) + "seconds";
         
         $(document).ready(function(){
        
        
        $(".rezult").fadeIn();
        
 
  });
 }
}
$(window).keypress(function (e) {
 if (e.key === ' ' || e.key === 'Spacebar') {
   // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
  e.preventDefault()
     console.log('Space pressed');
     $("#test").click();
}
});
$(window).keypress(function (e) {
 if (e.key === "r") {
   // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
  e.preventDefault()
     console.log('r pressed');
     $("#reset").click();
}
});
$(window).keypress(function (e) {
if (e.keyCode === 13) {
   // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
  e.preventDefault()
     console.log('enter pressed');
     $("#srt").click();
}
});


