let dad = [];
let mom = [];
let dadCombos = [];
let pdadCombos = [];
let momCombos = [];
let pmomCombos = [];
let offspring = [];

function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).parent("#can");
  select("#geno-dad").position(windowWidth * 0.05, windowHeight * 0.05);
  select("#geno-mom").position(windowWidth * 0.05, windowHeight * 0.09);
}

function draw() {
  dad = select("#geno-dad").value().split("");
  mom = select("#geno-mom").value().split("");
  background(235);
  fill(51);
  text("A challenge from my science teacher", width*0.02, height*0.95);
  if (dad.length % 2 === 0 && dad.length === mom.length) {
      dadCombos = [];
      momCombos = [];
      offspring = [];
      for (let i = 0; i < pow(2, dad.length / 2); i++) {
        dadCombos.push(combo(dad, i));
        momCombos.push(combo(mom, i));
      }
      for (let dad of dadCombos) {
        for (let mom of momCombos) {
          offspring.push(mix(mom, dad));
        }
      }
    for (let i = 0; i < pow(2, dad.length / 2) + 1; i++) {
      line(width * 0.25, height * (i * 0.0625 + 0.25), width * (pow(2, mom.length / 2) * 0.0625 + 0.25), height * (i * 0.0625 + 0.25));
      line(width * (i * 0.0625 + 0.25), height * 0.25, width * (i * 0.0625 + 0.25), height * (pow(2, mom.length / 2) * 0.0625 + 0.25));
      if (dadCombos.length != 0 && momCombos.length != 0 && i < pow(2, dad.length / 2)) {
        textSize(width / 80);
        console.log(momCombos);
        text(momCombos[i], width * 0.24 - textWidth(momCombos[i]), height * ((i+0.5) * 0.0625 + 0.25));
        text(dadCombos[i], width * ((i+0.2) * 0.0625 + 0.25), height * 0.24);
      }
    }
    for (let i = 0; i < dadCombos.length; i++) {
      for (let j = 0; j < momCombos.length; j++) {
        text(getOffspring(j, i), width * (i * 0.0625 + 0.26), height * ((j+0.5) * 0.0625 + 0.25))
      }
    }
  }
  pdadCombos = dadCombos;
  pmomCombos = momCombos;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  select("canvas").position(0, 0);
  select("#geno-dad").position(windowWidth * 0.05, windowHeight * 0.05);
  select("#geno-mom").position(windowWidth * 0.05, windowHeight * 0.09);
}

function combo(geno, ie) {
  let i = ie.toString(2).split("");
  for (j = 0; j < geno.length / 2; j++) {
    if (i[j] == undefined) {
      i.unshift(0);
    } else {
      i[j] = parseInt(i[j], 10);
    }
  }
  let ret = "";
  for (let j = 0; j < geno.length / 2; j++) {
    ret += geno[(j * 2) + i[j]];
  }
  return ret;
}

function mix(gameteAA, gameteBB) {
  let gameteA = gameteAA.split("");
  let gameteB = gameteBB.split("");
  let ret = "";
  for (let i = 0; i < gameteA.length; i++) {
    ret+=gameteA[i];
    ret+=gameteB[i];
  }
  return ret;
}

function getOffspring(x, y) {
  return offspring[dadCombos.length*y+x];
}
