// variables for tabletop.js values
var rawData, selector, selectedState, fontsize, tempCanvas, context, issue;
var currentSenator = {
  'name': '',
  'image': '',
  'phone': '',
  'vote': '',
  'happy':''
}

// canvas dimensions
var w = 500;
var h = w;

var canvas,
  findButton,
  clearButton,
  saveButton,
  textSizeSlider,
  img;

function setup() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1Yj83AF5q6sv2XTQ8ZGCX1ZrwDCFbtc_O7CidSPSEI0o/pubhtml',
                   callback: gotData,
                   simpleSheet: true } )

  canvas = createCanvas(w, h);
  canvas.parent('canvas');
  background(200);

  selector = document.getElementById("state-dropdown");

  // create state dropdown list from 'senators' array in databaseA.js
  for (var i = 0; i < senators.length; i+=2) {
      var opt = senators[i].state;
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      selector.appendChild(el);
    }

  findButton = createButton('Find')
  findButton.parent('check-zip')
  findButton.mousePressed(findReps);

  clearButton = createButton('Clear Canvas');
  clearButton.parent('actions');
  clearButton.mousePressed(clearCanvas);

  saveButton = createButton('Save');
  saveButton.parent('actions');
  saveButton.mousePressed(saveIt);

  textSizeSlider = createSlider(5, 100, 32);
  textSizeSlider.parent('size-slider');
  textSizeSlider.input(updateTextSize);
}
// 'save' button
function saveIt() {
  saveCanvas(canvas, 'Share_'+ currentSenator.name, 'jpg');
}
// 'clear canvas' button
function clearCanvas() {
  clear();
  background(200);
}
// store spreadsheet data in rawData variable
function gotData(data, tabletop) {
  rawData = data;
}

function findReps() {
  var tempName = []
  var tempImg = []
  var tempNum = []

  document.getElementById('list-reps').innerHTML = ''
  //get value from dropdown
  selectedState = selector.options[selector.selectedIndex].value;
  senators.forEach(function(e){
    //make a list of two senators from that state
    if (e.state == selectedState) {
      tempName.push(e.name)
      tempImg.push(e.image)
      tempNum.push(e.phone)
      hitPropublica(e.stateAb);
    }
  })

  var buttonA = createButton(tempName[0])
  buttonA.parent('list-reps')
  buttonA.mousePressed(fillA)

  var buttonB = createButton(tempName[1])
  buttonB.parent('list-reps')
  buttonB.mousePressed(fillB)
  
  function fillA() {
    //update our temp json object with currentSenator stats
    currentSenator.name = tempName[0];
    currentSenator.phone = tempNum[0];
    currentSenator.image = tempImg[0];
    //get the rest of CurrentSenator stats from the spreadsheet
    //would be better to return them but instead we build it in this fucntion
    getSenatorVote(tempName[0])
    matchSenatorName(tempName[0])
  };
  function fillB() {
    //update our temp json object with currentSenator stats
    currentSenator.name = tempName[1];
    currentSenator.phone = tempNum[1];
    currentSenator.image = tempImg[1];
    //get the rest of CurrentSenator stats from the spreadsheet
    getSenatorVote(tempName[1])
    matchSenatorName(tempName[1])
    //why didn't this return corretly?
    // currentSenator.vote = getSenatorVote(currentSenator.name);
  };
} //draw rep ends

function fillImage(image, number, name, fontsize, refreshing){
  if (!fontsize) {
    fontsize = 32
  }

  if (currentSenator.happy == "Y") {
    var sentiment = 'THANK YOU'
  } else {
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

function updateTextSize(event){
  fillImage(currentSenator.image,
    currentSenator.phone,
    currentSenator.name,
    textSizeSlider.value(),
    true)
}

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

function getSenatorVote(name){
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
  // now that we have all the data, draw it
  // TODO: get fillImage out of this function
  fillImage(currentSenator.image, currentSenator.phone, currentSenator.name)
}

function hitPropublica(stateAbbrev){
  $.ajax({
           url: "https://api.propublica.org/congress/v1/members/senate/"+stateAbbrev+"/current.json",
           type: "GET",
           dataType: 'json',
           headers: {'X-API-Key': 'AzuJWcFuUg3f0iLuL5zrl5M8RExaka469UWE81df'}
         }).done(function(data) {
          logSenatorDetails(data.results)
         }); // ajax done
}

function matchSenatorName(targetMember){
  var targetMemberArray = targetMember.split(' ')
  console.log('Target is: ', targetMemberArray)
  $.ajax({
           url: "https://api.propublica.org/congress/v1/115/senate/members.json",
           type: "GET",
           dataType: 'json',
           headers: {'X-API-Key': 'AzuJWcFuUg3f0iLuL5zrl5M8RExaka469UWE81df'}
         }).done(function(data) {
           logMemberName(data.results[0].members)
         }); // ajax done
  
  function logMemberName(dataArray) {
    dataArray.forEach(function(names) {
      if (names.first_name == targetMemberArray[0] && names.last_name == targetMemberArray[1]) {
        console.log('This is the selected person: ', names)
      }
    });
  }
}

function logSenatorDetails(dataArray){
  dataArray.forEach(function(data) {
    console.log(data)
  })
}
