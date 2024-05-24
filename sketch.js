function setup() {
  createCanvas(400, 400);
  background("turquoise");
}

function draw() {
  
  stroke("red")
  fill("gray")
  //console.log(mouseIsPressed)
  if(mouseIsPressed){rect(mouseX,mouseY,20,35);
}
}