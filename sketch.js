let d = 0;
let x = 100;
let f = 1;
let xoff = 1;
let circles = [];
function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // stroke(255);
  // noFill();
  if (d === windowHeight - 50){
    noLoop();
  }
  if (x === windowWidth - 400){
    noLoop();
  }
  d = d + .5;
  x = x + f;
  let y = windowHeight/2;
  drawCircle(x, y, d)
  xoff += .1;
}

function drawCircle(x, y, d){
  stroke(0, 5)
  noFill();
  ellipse(x, y , d)
  if (d > 0){
    drawCircle(x, y, d - 80)
    // drawCircle(x, y + 100, (d % 200) - 100)

  }

}
