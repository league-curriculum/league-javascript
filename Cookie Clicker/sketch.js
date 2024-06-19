let cookieImage;

//1. create a variable for your cookie count

function preload(){
  cookieImage = loadImage("cookie.png");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  if(mouseIsPressed){
    //2. use the image command to draw the cookie: image(cookieImage, 100,100, 360,360);
    
  } else {
    //3. draw the cookie a little bigger when the mouse isn't pressed: 
    // image(cookieImage, 100,100);
  }
  // 4. use the textSize to change the text size
  // 5. use the text command to display the word cookies and the cookie count.
}

function mousePressed(){
  // 6. increment the cookie count by 1.
}