let dad = [];
let mom = [];
let dadCombos = [];
let momCombos = [];

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
    if (dadCombos.length < dad.length) {
      dadCombos = [];
      momCombos = [];
      for (let i = 0; i < pow(2, dad.length/2); i++) {
        dadCombos.push(combo(dad, i));
        momCombos.push(combo(mom, i))
      }
    }
    for (let i = 0; i < pow(2, dad.length / 2) + 1; i++) {
      line(width * 0.25, height * (i * 0.0625 + 0.25), width * (pow(2, mom.length / 2) * 0.0625 + 0.25), height * (i * 0.0625 + 0.25));
      line(width * (i * 0.0625 + 0.25), height * 0.25, width * (i * 0.0625 + 0.25), height * (pow(2, mom.length / 2) * 0.0625 + 0.25));
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  select("canvas").position(0, 0);
  select("#geno-dad").position(windowWidth * 0.05, windowHeight * 0.05);
  select("#geno-mom").position(windowWidth * 0.05, windowHeight * 0.07);
}

function combo(geno, ie) {
  let i = ie.toString(2).split("");
  for (j = 0; j < geno.length/2; j++) {
    if (i[j] == undefined) {
      i.unshift(0);
    } else {
      i[j] = parseInt(i[j], 10);
    }
  }
  console.log(i);
  let ret = "";
  for (let j = 0; j < geno.length / 2; j++) {
    ret += geno[(j * 2) + i[j]];
  }
  return ret;
}
