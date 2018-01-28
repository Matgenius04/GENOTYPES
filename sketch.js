let dad = [];
let mom = [];

function setup() {
	createCanvas(windowWidth, windowHeight).position(0, 0).parent("#can");
	select("#geno-dad").position(windowWidth*0.05, windowHeight*0.05);
	select("#geno-mom").position(windowWidth*0.05, windowHeight*0.07);
}

function draw() {
	dad = select("#geno-dad").value().split("");
	mom = select("#geno-mom").value().split("");
	background(235);
	fill(51);
	for (let i = 0; i < )
	line(width*0.125, width*0.125, width*0.25, width*0.125);
	line(width*0.125, width*0.25, width*0.25, width*0.25);
	line(width*0.125, width*0.125, width*0.125, width*0.25);
	line(width*0.25, width*0.125, width*0.25, width*0.25);
	line(width*0.1875, width*0.125, width*0.1875, width*0.25);
	line(width*0.125, width*0.1875, width*0.25, width*0.1875);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	select("canvas").position(0, 0);
	select("#geno-dad").position(windowWidth*0.05, windowHeight*0.05);
	select("#geno-mom").position(windowWidth*0.05, windowHeight*0.07);
	select("#pheno-dom").position(windowWidth*0.05, windowHeight*0.09);
	select("#pheno-rec").position(windowWidth*0.05, windowHeight*0.11);
}
