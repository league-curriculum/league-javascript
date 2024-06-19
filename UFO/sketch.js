let ufo;
function preload() {
  ufo = loadImage('ufo.png');
}

function setup() {
  createCanvas(600, 400);
}

let x = 50;
let y = 50;
let speedX = 6;
let speedY = 3;

function draw() {
  background(20,20,40);
  
  //1. draw your ufo using the x and y variables: image(ufo, x,y);
  
  //2. increase x by the speedX: x = x+speedX;

  //3. increase y by the speedY (your ball should move)

  // READ THIS CODE!!!
  // Here if x is greater than the width, we set the speedX in the opposite direction.
  if(x>width ){
    speedX = -speedX;
  }
  
  // Here if x is less than 0, we set the speedX in the opposite direction.
  if(x<0){
    speedX = -speedX;
  }
  
  // Now finish the code so the ufo doesn't fly away!
  // 4. If y is greater than the height, set the speedY in the opposite direction.
  
  // 5. If y is less than 0, set the speedY in the opposite direction.

  // 6. Draw some stars in the background!! 
}