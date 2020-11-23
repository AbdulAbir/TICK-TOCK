var hr;
var mn;
var sc;
var scAngle;

function setup() {
  createCanvas(400,400);
  hr = hour();
  mn = minute();
  sc = second();


}

function draw() {
  background(0); 
  camera.position.x = 0;
  camera.position.y = 0;

  
 
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,60,0,360);

  push();
  translate(sc.x,sc.y);
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  arc(100, 0, 50, 50, 0, PI);
  line(0,0,100,0);
  pop();

   push();
  translate(mn.x,mn.y);
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  arc(110, 0, 50, 50, 0, PI);
  line(0,0,70,0);
  pop();

   push();
  translate(hr.x,hr.y);
  rotate(hrAngle);
  stroke(0,0,250);
  strokeWeight(7);
  arc(120, 0, 50, 50, 0, PI);
  line(0,0,50,0);
  pop();

  drawSprites();
}