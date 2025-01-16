function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

  let x = 0;
  let y = 50;
  let z = 25;

function draw() {
  background(175, 0 , 100);
  
  stroke(50, 0, 100);
  triangle(x, x, y, x, z, y);
  
  x = x + 3
  y = y + 3
  z = z + 3
  if(x > 402){
    x = 0
  }
  if (y > 452){
    y = 50
  }
  if (z > 427){
    z = 25
  }
   if (x > width / 2){
     fill(0);
   } else {
     fill(50, 0, 100, 150);}
}
