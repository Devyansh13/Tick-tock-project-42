var hr;
var mn;
var sc,scAngle;

function setup() {
  createCanvas(500,500);
  
  
  
}

function draw() {
  background(0);

  hr=hour();
  mn=minute();
  sc=second();

  console.log(hr,mn,sc)

  angleMode(DEGREES);
  scAngle=map(sc,0,60,0,360);

  stroke(255,0,0);
  strokeWeight(7);
  line(150,250,100,0);

  mnAngle=map(0,60,0,360);
  
  stroke(0,255,0);
  strokeWeight(7);
  line(200,250,100,0);

  hrAngle=map(0,24,0,360)
  
  stroke(0,0,255);
  strokeWeight(7);
  line(250,250,100,0);

  drawSprites();
}