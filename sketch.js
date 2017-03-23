// adapted from Daniel Shiffman's
// Drag and Drop tutorial: https://www.youtube.com/watch?v=o4UmGrPst_c
// Mad Libs Generator: https://www.youtube.com/watch?v=ziBO-U2_t3k

// variables for tabletop.js values
var rawData;

//TODO: this needs to be an array that we can clear
var repName;

// canvas dimensions
var w = 500;
var h = w;

// text positioning
var x = 10;
var y = h - 350;

var textSizeStart = 40;
var textSizeSlider,
  canvas,
  zip,
  enterZip,
  clearButton,
  saveButton,
  repButton,
  img;

// Offset mouse X and Y
var offX, offY;
function mousePressed() {
  offX = mouseX - x;
  offY = mouseY - y;
}
function mouseDragged() {
  x = mouseX - offX;
  y = mouseY - offY;
  dataToCanvas();
}

function setup() {
  // tabletop.js init() function returns data as an array of objects, like this:
  // [{"animal": "horse", 
  //  "color": "brown"},
  //  {"animal": "chick", 
  //  "color": "yellow"}]
  Tabletop.init( { key: '1B4WC1tsm_OnrGZGfltHCoH1ceCYkgkkm5ilhmcyj0Pk',
                   callback: gotData,
                   simpleSheet: true } )

  canvas = createCanvas(w, h);
  background(200);

  //TODO: make sure input only accepts numbers
  enterZip = createElement('input');
  enterZip.parent('check-zip');
  findButton = createButton('Find');
  findButton.parent('check-zip');
  findButton.mousePressed(findReps);

  clearButton = createButton('Clear Canvas');
  clearButton.parent('actions');
  clearButton.mousePressed(clearCanvas);

  saveButton = createButton('Save');
  saveButton.parent('actions');
  saveButton.mousePressed(saveIt);

  textSizeSlider = createSlider(textSizeStart, 100, 70);
  textSizeSlider.parent('size-slider');
  textSizeSlider.input(dataToCanvas);

  canvas.parent('canvas');
}

function dataToCanvas() {
  background(200);
  // if there's an image, render it
  if (img) {
    image(img, 0, 0, w, w);
  }
  // text styling and positioning
  fill(255);
  stroke(0);
  strokeWeight(3);
  textFont("Impact");
  textSize(resizeText());
  for (i = 0; i < rawData.length; i++) {
    if (rawData[i]["MOC"] === repName) {
      col1 = repName;
      col3 = rawData[i]["Message"];
    }
  }
  var l = ('Rep. ' + col1 + ': ' + col3);
  var rightTextMargin = w - x;
  text(l, x, y, rightTextMargin, h);
  // overwite the textSizeStart with textSizeSlider value
  function resizeText(start, end) {
    start = textSizeStart;
    end = textSizeSlider.value();
    textSize(end);
  }

  // either create file path from spreadsheet or use this fcn to show img:
  // function getImage(file) {
  //   img = createImg(file.data);
  //   img.hide();
  //   image(img, 0, 0, w, w);
  // }
}

// 'save' button
function saveIt() {
  saveCanvas("meme.png");
}
// 'clear' button
function clearCanvas() {
  clear();
  background(200);
}

function gotData(data, tabletop) { 
  rawData = data;
  console.log("rawData: ", rawData)
}

function findReps() {
  zip = enterZip.value();
  rawData.forEach(function(el) {
    for (var i = 0; i < rawData.length; i++) {
      if (zip === rawData[i]["Zip"]) {
        repName = rawData[i]["MOC"]
      } else {
        console.log('No rep found for that zip')
      }
    }
  });
  if (repName !== undefined) {
    repButton = createButton(repName)
    repButton.parent('list-reps')
    repButton.mousePressed(dataToCanvas);
  }
}
