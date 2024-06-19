let catImage;
let dogImage;
let spaceImage;

let racer1X = 00;
let racer1Y = 100;

let racer2X = 0;
let racer2Y = 300;


function setup() {
  createCanvas(1200, 500); 
  textSize(35);
//  IMAGES  
//  This code loads all the sounds and images so they are ready to use in the program
//  If you want to change the images and sounds, change the file names here. 
  catImage = loadImage("https://raw.githubusercontent.com/League-central/java-modules/development/Level0-Module0/src/_99_extra/z_Race/lion.png");
  dogImage = loadImage("https://raw.githubusercontent.com/League-central/java-modules/development/Level0-Module0/src/_99_extra/z_Race/dog.png");
  spaceImage = loadImage("https://raw.githubusercontent.com/League-central/java-modules/development/Level0-Module0/src/_99_extra/z_Race/space.png");
  spaceImage.resize(width, height); 
}


function draw() {
// 1. DRAW BACKGROUND    
//    Use the background() command to draw where the race is taking place.
//    You can use the image provided (spaceImage), or change it to something else.
  
// 2. DRAW the RACERS
//    You can use the cat and dog images for the racers or change them to something else.
//    Use the image() command to draw each of the two racers.
  
//    RACER 1
//    Put the first image (catImage) at location racer1X, racer1Y
  
  
//    RACER 2
//    Draw the second image (dogImage) at location racer2X, racer2Y


// 3. WINNER  
//    Find the checkForWinner() function. The messages are set for a cat and dog.
//    If you have changed the racer images, change the method to match them
  
// 4. TEST #1
//    Run the program. Do you see the images?   

// 5. RACE
//    The racers need to move when keys are pressed. The example below uses 'q' to move
//    racer1 and 'p' to move racer2. If you want to use different keys, change this code
if (keyIsPressed){
  if (key == 'q'){
      moveRacer1();
  }
  if (key == 'p') {
      moveRacer2();
  }
}


// 6. TEST #2
//    Run the program. Do the images move when you press the keys?
//    Does the name of the winner appear when one racer reaches the end?

// 7. FAST ENOUGH?
//    See if you can figure out what code to change so the racers move faster/slower

}

function moveRacer1(){
  racer1X = racer1X + 5;
}

function moveRacer2(){
  racer2X = racer2X + 5;
}

function checkForWinner(){
  if (racer1X>width-60){
    text("CATS ARE THE BEST", 400, 50); 
  }
  if (racer2X>width-60){
    text("DOGS RULE", 500, 50); 
  }
}