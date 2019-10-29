var pulsante = [];
var ang = 0;
var r;

function setup() {
  createCanvas(windowWidth,windowHeight/2)
  background('black')

  for (var i = 0; i <33; i++) {
    pulsante[i] = createSlider(0,255,0);
  }

  r = Math.floor(Math.random() * pulsante.length);

  pulsante[r].mouseClicked(ltsurge);

  console.log(r);
}

function ltsurge() {
  {
      window.open('fight.html')
  }
}

function draw() {
  var offset = 0;
  for (var i = 0; i < pulsante.length; i++) {
    var x = map(tan(ang+offset), -1, 1, 0, 255);
    pulsante[i].value(x);
    //pulsante[0].value()
    offset += 0.25;
  }

  ang += 0.1;
}
