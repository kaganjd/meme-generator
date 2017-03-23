// adapted from Daniel Shiffman's
// Drag and Drop tutorial: https://www.youtube.com/watch?v=o4UmGrPst_c
// Mad Libs Generator: https://www.youtube.com/watch?v=ziBO-U2_t3k

// variables for tabletop.js values
var rawData, selector, selectedState;



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

  Tabletop.init( { key: '1B4WC1tsm_OnrGZGfltHCoH1ceCYkgkkm5ilhmcyj0Pk',
                   callback: gotData,
                   simpleSheet: true } )

  canvas = createCanvas(w, h);
  background(200);


  findButton = document.getElementById('find')
  findButton.onclick = findReps;


  selector = document.getElementById("state-dropdown");


  for (var i = 0; i < senators.length; i+=2) {
      var opt = senators[i].state;
      // console.log(opt);
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      selector.appendChild(el);
    }

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
  // console.log("rawData: ", rawData)
}

function findReps() {
  var tempOpts = []
  var imgOpts = []
  var tempNum = []

  document.getElementById('check-zip').innerHTML = "<button id='find'>Find</button>"
  document.getElementById('list-reps').innerHTML = ''
  findButton = document.getElementById('find')
  findButton.onclick = findReps;
  selectedState = selector.options[selector.selectedIndex].value;
  console.log(selectedState)
  senators.forEach(function(e){
    if (e.state == selectedState){
      tempOpts.push(e.name)
      imgOpts.push(e.image)
      tempNum.push(e.phone)
    }
  })

var buttonA = document.createElement('button')
var buttonB = document.createElement('button')
buttonA.innerHTML = tempOpts[0]
buttonB.innerHTML = tempOpts[1]

document.getElementById('list-reps').append(buttonA)
document.getElementById('list-reps').append(buttonB)

buttonA.onclick = function() {
  fillImage(imgOpts[0], tempNum[0])
};
buttonB.onclick = function() {
  fillImage(imgOpts[1], tempNum[1])
};





} //draw rep ends


function fillImage(image, number){
  var img = new Image;
  img.src = image;
  var tempDiv = document.getElementById('image-here');
  // tempDiv.src = image
  var tempCanvas = document.getElementById('defaultCanvas0'),
  context = tempCanvas.getContext('2d');
  img.onload = function(){
    var ratio = img.width/img.height
    var divide = img.width / 500
    console.log(divide)
    var height = img.height / divide
    context.drawImage(img,0,0,500,height);
    drawTextBG(context, "Call " + number + ' To Say', '32px arial', 0, 400);

};

} //fill image ends


/// expand with color, background etc.
function drawTextBG(ctx, txt, font, x, y) {

    ctx.save();
    ctx.font = font;
    ctx.textBaseline = 'top';
    ctx.fillStyle = '#000';
    var width = ctx.measureText(txt).width;
    ctx.fillRect(x, y, width, parseInt(font, 10));
    ctx.fillStyle = '#fff';
    ctx.fillText(txt, x, y);
    ctx.restore();
}

  // if (repName !== undefined) {
  //   repButton = createButton(repName)
  //   repButton.parent('list-reps')
  //   repButton.mousePressed(dataToCanvas);
  // }
