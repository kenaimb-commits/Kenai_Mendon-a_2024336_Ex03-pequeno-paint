const backgroundColor = '#0c0c0c';
let myPicker;
let eraseMode = false;
let size = 10;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  background(backgroundColor);

  myPicker = createColorPicker('deeppink');
  myPicker.position(0, 100);

  canvas.elt.addEventListener('contextmenu', (event) => event.preventDefault());
  describe('A pink drawing canvas with a color picker.');
}

function draw() {
  noStroke();
  fill(color(myPicker.color()));
  circle(mouseX, mouseY, size);
}

function keyPressed() {
  if (key.toLowerCase() === '+') {
    size += 10;
  } else if (key.toLowerCase() === '-') {
    size = max(10, size - 10);
  } else if (key.toLowerCase() === 'c') {
    background(backgroundColor);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(backgroundColor);
}
