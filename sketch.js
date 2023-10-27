var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("halloween.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("PONTUAÇÃO: " + score, 450, 50);

  if(score === 4) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TESOURO DESBLOQUEADO",250, 200);
  }

  drawSprites()
}
