let canvas;
let context;
let interval;
let sound = document.querySelector("#boing");

canvas = document.getElementById('2d-animation-canvas');
context = canvas.getContext('2d');

function draw(x, y) {
  context.fillStyle = "grey";
  context.beginPath();
  context.arc(x,y,10,0,Math.PI * 2,true);
  context.fill();
}

function clearCanvas() {
  canvas.width = canvas.width;
}

var ballX = 60;
var ballY = 60;
var directionX = 2;
var directionY = 2;

draw(ballX, ballY);

function startAnimation(){
  interval = setInterval(function(){
    if (ballX > canvas.width || ballX < 0){
      directionX *= -1;
      sound.play();
    }
  
    if (ballY < 0 || ballY > canvas.height){
      directionY *= -1;
      sound.play();
    }
    console.log(ballY + "+"+directionY);
    ballX += directionX;
    ballY += directionY;
    
    clearCanvas();
    draw(ballX, ballY);
  }, 35);
}
function stopAnimation() {
  clearInterval(interval);
}

let stopButton = document.getElementById("Stop");
let startButton = document.getElementById("Start");
let xAxis = document.getElementById("xAxis");
let yAxis = document.getElementById("yAxis");

startButton.addEventListener('click',(e)=>{
  console.log("Start");
  startAnimation();
})

stopButton.addEventListener('click',(e)=>{
  console.log("Stop");
  stopAnimation();
})

xAxis.addEventListener('change',(e)=>{
  console.log(xAxis.value);
  if(directionX > 0 && xAxis.value < 0){
    directionX = -xAxis.value;
  }else if(directionX < 0 && xAxis.value > 0){
    directionX = -xAxis.value;
  }else{
    console.log(xAxis.value);
    directionX = +xAxis.value;
  }
})

yAxis.addEventListener('change',(e)=>{
  console.log(yAxis.value);
  if(directionY > 0 && yAxis.value < 0){
    directionY = -yAxis.value;
  }else if(directionY < 0 && yAxis.value > 0){
    directionY = -yAxis.value;
  }else{
    console.log(yAxis.value);
    directionY = +yAxis.value;
  }
  
})