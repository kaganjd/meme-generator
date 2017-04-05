// variables for tabletop.js values
var rawData, 
  selector, 
  selectedState, 
  fontsize, 
  tempCanvas, 
  context, 
  issue;

var currentSenator = {
  'vote': '',
  'happy':''
}

// canvas dimensions
var w = 500;
var h = w;

function preload() {
  senators = loadJSON('senators.json');
}

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

  // create state dropdown list from 'senators' array in databaseA.js
  // TODO: rewrite dropdown in p5
  selector = document.getElementById("state-dropdown");
  var states = Object.keys(senators);
  for (var i = 0; i < states.length; i++) {
      var opt = states[i];
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

function saveIt() {
  saveCanvas(canvas, 'Share_'+ senator.name, 'jpg');
}

function clearCanvas() {
  clear();
  background(200);
}
// store spreadsheet data in rawData variable
function gotData(data, tabletop) {
  rawData = data;
}

// this function performs a lookup of senators based on the state selected from the dropdown.
// then, it creates a button for each senator returned by the lookup, 
// puts the button in the 'list-reps' div, 
// and calls the assignSenator function on button click
function findReps() {
  selectedState = selector.options[selector.selectedIndex].value;
  var selectedSenators = senators[selectedState];
  for (var i = 0; i < selectedSenators.length; i++) {
    var button = createButton(selectedSenators[i].name)
    button.parent('list-reps');
    setSenator(button, selectedSenators[i]);
  }
  function setSenator(button, senator) {
    function assignSenator() {
      fillImage(senator.image, senator.phone, senator.name)
      // TODO: function below should get repId, then use repId to get bill names
      matchSenatorName(senator.name)
    }
    button.mousePressed(assignSenator);
  }
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
  fillImage(
    senator.image,
    senator.phone,
    senator.name,
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

// this function uses the propublica api to get recent bills by a specific member: 
// https://propublica.github.io/congress-api-docs/#get-recent-bills-by-a-specific-member
// TODO: figure out 'introduced' vs. 'updated' args
// function getBill(repId, type) {
//   var type = 'updated'
//   console.log('getBill repId: ', repId);
//   $.ajax({
//            url: "https://api.propublica.org/congress/v1/members/"+repId+"/bills/"+type+".json",
//            type: "GET",
//            dataType: 'json',
//            headers: {'X-API-Key': 'AzuJWcFuUg3f0iLuL5zrl5M8RExaka469UWE81df'}
//          }).done(function(data) {
//           console.log("Bill number: ", data.results[0].bills[0].bill_id)
//          });
// }

// this function uses the propublica api to get senate members: 
// https://propublica.github.io/congress-api-docs/#lists-of-members
// function matchSenatorName(targetMember){
//   var targetMemberArray = targetMember.split(' ')
//   var allMembers = data.results[0].members
//   var repId = allMembers.id
//   $.ajax({
//            url: "https://api.propublica.org/congress/v1/115/senate/members.json",
//            type: "GET",
//            dataType: 'json',
//            headers: {'X-API-Key': 'AzuJWcFuUg3f0iLuL5zrl5M8RExaka469UWE81df'}
//          }).done(function(data) {
//            // log all the member objects
//            console.log('targetMember: ', data.results[0].members)
//            logMemberName(data.results[0].members);
//          });
//   // only log the name if it's the correct one
//   function logMemberName(dataArray) {
//     dataArray.forEach(function(names) {
//       if (names.first_name == targetMemberArray[0] && names.last_name == targetMemberArray[1]) {
//         console.log('This is the selected person: ', names)
//       }
//     });
//   }
// }


