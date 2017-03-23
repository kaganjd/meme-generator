// adapted from Daniel Shiffman's
// Drag and Drop tutorial: https://www.youtube.com/watch?v=o4UmGrPst_c
// Mad Libs Generator: https://www.youtube.com/watch?v=ziBO-U2_t3k

// variables for tabletop.js values
var rawData, selector, selectedState, fontsize, tempCanvas, context, issue;
var currentSenator = {
  'name': '',
  'image': '',
  'phone': '',
  'vote': '',
  'happy':''
}



//TODO: this needs to be an array that we can clear
var repName;

// canvas dimensions
var w = 500;
var h = w;

// text positioning
var x = 10;
var y = h - 350;

var textSizeStart = 32;
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
  updateText();
}

function setup() {

  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1Yj83AF5q6sv2XTQ8ZGCX1ZrwDCFbtc_O7CidSPSEI0o/pubhtml',
                   callback: gotData,
                   simpleSheet: true } )

  canvas = createCanvas(w, h);
  background(200);

  findButton = document.getElementById('find')
  findButton.onclick = findReps;
  selector = document.getElementById("state-dropdown");

  //add state dropdowmn options
  for (var i = 0; i < senators.length; i+=2) {
      var opt = senators[i].state;
      // console.log(opt);
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      selector.appendChild(el);
    }

  // clearButton = createButton('Clear Canvas');
  // clearButton.parent('actions');
  // clearButton.mousePressed(clearCanvas);

  saveButton = createButton('Save');
  saveButton.parent('actions');
  saveButton.mousePressed(saveIt);

  textSizeSlider = createSlider(5, 100, 32);
  textSizeSlider.parent('size-slider');
  textSizeSlider.input(updateText);

  canvas.parent('canvas');
} //setup over



function updateText(e){
  console.log(textSizeSlider.value())
  fillImage(currentSenator.image, currentSenator.phone, currentSenator.name, textSizeSlider.value(), true)

}


// 'save' button
function saveIt() {
  console.log('you MUST run a local server to download image')
  saveCanvas(canvas, 'Share_'+ currentSenator.name, 'jpg');
}


function gotData(data, tabletop) {
  rawData = data;
  // console.log("rawData: ", rawData)
}

function findReps() {
  var tempName = []
  var tempImg = []
  var tempNum = []

  document.getElementById('check-zip').innerHTML = "<button id='find'>Find</button>"
  //empty the list
  document.getElementById('list-reps').innerHTML = ''
  findButton = document.getElementById('find')
  findButton.onclick = findReps;
  //get value from dropdown
  selectedState = selector.options[selector.selectedIndex].value;
  senators.forEach(function(e){
    //make a list of two senators fronm that state
    if (e.state == selectedState){
      tempName.push(e.name)
      tempImg.push(e.image)
      tempNum.push(e.phone)
    }
  })

var buttonA = document.createElement('button')
var buttonB = document.createElement('button')
buttonA.innerHTML = tempName[0]
buttonB.innerHTML = tempName[1]

document.getElementById('list-reps').append(buttonA)
document.getElementById('list-reps').append(buttonB)

//TODO: put theses two buttons into one loop

buttonA.onclick = function() {
  //update our temp json object with currentSenator stats
  currentSenator.name = tempName[0];
  currentSenator.phone = tempNum[0];
  currentSenator.image = tempImg[0];
  //get the rest of CurrentSenator stats from the spreadsheet
  //would be better to return them but instead we build it in this fucntion
  getSenatorvote(tempName[0])
};
buttonB.onclick = function() {
  //update our temp json object with currentSenator stats
  currentSenator.name = tempName[1];
  currentSenator.phone = tempNum[1];
  currentSenator.image = tempImg[1];
  //get the rest of CurrentSenator stats from the spreadsheet
  getSenatorvote(tempName[1])
  //why didn't this return corretly?
  // currentSenator.vote = getSenatorvote(currentSenator.name);
};


} //draw rep ends


function fillImage(image, number, name, fontsize, refreshing){
  if (!fontsize){fontsize = 32}
  if (currentSenator.happy == "Y"){
    console.log('we are happy')
    var sentiment = 'THANK YOU'
  } else {
    console.log('we opposed')
    var sentiment = 'I OPPOSE'
  }
  var img = new Image;
  img.src = image;
  img.crossOrigin = 'Anonymous'
  var tempDiv = document.getElementById('image-here');
  tempCanvas = document.getElementById('defaultCanvas0'),
  context = tempCanvas.getContext('2d');
  if (!refreshing){
    drawTextBG(context, "PLEASE WAIT, LOADING IMAGE OF", fontsize + 'px arial', 0, 100);
    drawTextBG(context, name, fontsize + 'px arial', 0, 130);
  }


  img.onload = function(){
    var ratio = img.width/img.height
    var divide = img.width / 500
    var height = img.height / divide
    context.drawImage(img,0,0,500,height);
    drawTextBG(context, "CALL: " + number + ' To Say', fontsize + 'px arial', 0, 400);
    drawTextBG(context, sentiment, fontsize  + 'px arial', 0, 450)
    drawTextBG(context, name + ' just voted on', fontsize + 'px arial', 0, 40);
    drawTextBG(context, issue, fontsize + 'px arial', 0, 80);

};

} //fill image ends



function drawTextBG(ctx, txt, font, x, y) {

    ctx.save();
    ctx.font = font;
    ctx.textBaseline = 'top';
    ctx.fillStyle = 'rgba(40,40,40,.5)';
    var width = ctx.measureText(txt).width;
    ctx.fillRect(x, y, width, parseInt(font, 10));
    ctx.fillStyle = '#fff';
    ctx.fillText(txt, x, y);
    ctx.restore();
}

function getSenatorvote(name){
  rawData[0].issue = issue
  //look through all of rawData, find senator name
  rawData.forEach(function(senator){
    if (name == senator.name){
      //update local json of currentSenator
      currentSenator.vote = senator.their_vote
      currentSenator.happy = senator.happy
      //why didn't return work?
      // return senator.happy;
    }
  })
  console.log('current Senator: ' ,currentSenator)
  //now that we have all the data, draw it
  fillImage(currentSenator.image, currentSenator.phone, currentSenator.name)



}
