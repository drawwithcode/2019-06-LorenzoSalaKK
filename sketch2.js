var pulsante = [];
var myImage;

function setup() {
  createCanvas(windowWidth,windowHeight/2)
  background('black')
  myImage = loadImage("./assets/ltsurge.jpg");

}

function draw() {

  image(myImage, windowWidth/2-(myImage.width/2), 0, myImage.width, myImage.height);

}
