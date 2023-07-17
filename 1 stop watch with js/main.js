var hours =00;
var minutes =00;
var seconds =00;
var milliseconds =00;

var h =document.querySelector("#hours");
var m =document.querySelector("#minutes");
var s =document.querySelector("#second");
var ms =document.querySelector("#milliseconds");
let interval;
// btns
var start =document.querySelector("#startBtn");
var stop =document.querySelector("#stopBtn");
var reset =document.querySelector("#restBtn");

function startTimer(){
  milliseconds ++;
  //   add 0 before millisecond count under 10
  if(milliseconds < 10){
    ms.innerHTML ="0",+ milliseconds;
  }  if(milliseconds > 10){
    ms.innerHTML = milliseconds;
  }
  // increase second
   if(milliseconds > 99){
      seconds++;
      s.innerHTML = seconds;
      milliseconds =0;
      ms.innerHTML ="0" + 0;
   }
 
   if(seconds < 10){
     s.innerHTML ="0" + seconds;
   } if(seconds > 10){
    s.innerHTML = seconds;
  }
 
  // increase minuts
  if(seconds > 59){
    minutes++;
    m.innerHTML = minutes;
    seconds =0;
    s.innerHTML ="0" + 0;
 }

  if(minutes < 10){
    m.innerHTML = "0" + minutes;
  }

//  increase hours
if(minutes > 59){
  hours ++;
  h.innerHTML = hours;
  minutes =0;
  m.innerHTML ="0" + 0;
}
if(hours < 10){
  h.innerHTML = "0" + minutes;
}



}

start.addEventListener("click",function(){
  clearInterval(interval);
  var oneSecond = 10;
  interval =setInterval(startTimer, oneSecond);
})

stop.addEventListener("click",function(){
   clearInterval(interval);
})

reset.addEventListener("click",function(){
   hours =00;
   minutes =00;
   seconds =00;
   milliseconds =00;
  h.innerHTML ="0" + hours;
  m.innerHTML ="0" + minutes;
  s.innerHTML ="0" + seconds;
  ms.innerHTML ="0" + milliseconds;

})