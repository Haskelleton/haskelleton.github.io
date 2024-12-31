"use strict";

function setup() {
  createCanvas(600, 600);
}

let shift = 0;

function draw() {
  background(65, 107, 158);
  stroke(255);
  strokeWeight(2);
  noFill();

  let step = 0 + shift;

  beginShape();
  for (let x = 0; x < width - width/4; x++) {
    let y = noise(step) * height;
    vertex(x, y);
    step += 0.004;
  }
  endShape();

  shift += 0.02;
}
