let dad = [];
let mom = [];

function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).parent("#can");
  select("#geno-dad").position(windowWidth * 0.05, windowHeight * 0.05);
  select("#geno-mom").position(windowWidth * 0.05, windowHeight * 0.07);
}

function draw() {
  dad = select("#geno-dad").value().split("");
  mom = select("#geno-mom").value().split("");
  background(235);
  fill(51);
  if (dad.length % 2 === 0 && dad.length === mom.length) {
    for (let i = 0; i < dad.length) {
      line(width * 0.25, height * (i * 0.125 + 0.25))
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  select("canvas").position(0, 0);
  select("#geno-dad").position(windowWidth * 0.05, windowHeight * 0.05);
  select("#geno-mom").position(windowWidth * 0.05, windowHeight * 0.07);
}
