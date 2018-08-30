
/*
  Work by: Johan Karlsson (DonKarlssonSan)
  modifications by: Misael M.
*/


function Particle() {
  this.x = random([0, w]);
  this.y = random([0, h]);
  this.oldX = this.x;
  this.oldY = this.y;
}

Particle.prototype.move = function(stepSize) {
  this.oldX = this.x;
  this.oldY = this.y;
  this.x += random(-stepSize, stepSize);
  this.y += random(-stepSize, stepSize);
  if(this.x < 0) this.x = 0;
  if(this.x > w) this.x = w;
  if(this.y < 0) this.y = 0;
  if(this.y > h) this.y = h;
}

Particle.prototype.draw = function() {
  line(this.oldX, this.oldY, this.x, this.y);
}

let particles;
let iterations;
let px;
let w;
let h;

function setup() {
  cursor(HAND);
  iterations = 5;
  w = windowWidth;
  h = windowHeight;
  createCanvas(w, h);
  reset();
  stroke(0, 50);
}

function draw() {
  for(let i = 0; i < iterations; i++) {
    particles.forEach(p => {
      const x = floor(p.x);
      const y = floor(p.y);
      const off = (y * w + x) * 4;
      let stepSize = 30;
      if(px[off+3] > 100) {
        stepSize = 2;
      }
      p.move(stepSize);
      p.draw();
    });
  }
}

function initParticles() {
  particles = [];
  for(let i = 0; i < 50; i++) {
    particles.push(new Particle());
  }
}

function initImage() {
  const message = "Drawing & Sound";
  const tSize = 150;
  textSize(tSize);
  const tWidth = textWidth(message);
  text(message, w / 2 - tWidth / 2, h / 2 + tSize / 2);
  const image = get(0, 0, w, h);
  image.loadPixels();
  px = image.pixels;
  background(255);
}

function reset() {
  initParticles();
  clear();
  initImage();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  w = windowWidth;
  h = windowHeight;
  reset();
}

function mouseClicked() {
  reset();
}
;
