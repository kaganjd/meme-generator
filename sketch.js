var PPKEY = 'AzuJWcFuUg3f0iLuL5zrl5M8RExaka469UWE81df'
// variables for tabletop.js values
var rawData;
// interface variables
var canvas,
  findButton,
  clearButton,
  saveButton,
  textSizeSlider,
  selector, 
  selectedState;
// square canvas dimensions
var w = 500;
// meme text positioning and size
var x = 10;
var ts = 40;
var rightTextBound = w - x;

var rollCalls = []

function preload() {
  senators = loadJSON('senators.json');
}

function setup() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1oWAFQIIRZneiAQAXRvJ1S4K_Lall0DY_A8WGIVawXpc/pubhtml',
                   callback: gotData,
                   simpleSheet: true } )

  canvas = createCanvas(w, w);
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

  for (i = 0; i < rawData.length; i++) {
    rollCalls.push(rawData[i].roll_call_number)
  }
}

// this function performs a lookup of senators based on the state selected 
// from the dropdown. then, it creates a button for each senator returned by 
// the lookup, puts the button in the 'list-reps' div, and calls the 
// assignSenator function on button click
function findReps() {
  clearCanvas();
  selectedState = selector.options[selector.selectedIndex].value;
  var selectedSenators = senators[selectedState];
  for (var i = 0; i < selectedSenators.length; i++) {
    var button = createButton(selectedSenators[i].name)
    button.parent('list-reps');
    setSenator(button, selectedSenators[i]);
  }
  function setSenator(button, senator) {
    function assignSenator() {
      getImage(senator.image)
      getMsg(senator.name, senator.phone)
      // fillImage(senator.image, senator.phone, senator.name)
      matchSenatorName("senate", senator.name)
    }
    button.mousePressed(assignSenator);
  }
}

function getImage(imgUrl) {
  var img = createImg(imgUrl);
  img.hide()
  console.log
  var ratio = img.width / img.height
  var divide = img.width / w
  var height = img.height / divide
  image(img, 0, 0, w, height)
}

function getMsg(name, phone, sentiment, vote, bill) {
  textSize(ts);
  // Call 208-980-2091 to say "I oppose!"
  // Rep. Murray just voted "No" on RB. 157
  
  // construct the text strings and measure their widths
  var callText = "Call " + phone + " to say " + sentiment;
  var repVoteText = name + " just voted " + vote + " on " + bill;
  var topWidth = textWidth(callText);
  var bottomWidth = textWidth(repVoteText);
  var lineHeight = ts*1.2

  // draw background boxes for text based on text string widths
  var bgColor = color('rgba(25, 38, 82, .5)');
  fill(bgColor);
  noStroke();
  var topRect = rect(x, w-450, w - 2 * x, lineHeight);
  var bottomRect = rect(x, w-150, w - 2 * x, lineHeight);
  // if text goes past the rightTextBound, 
  // draw background boxes on the next line
  if (topWidth > w - rightTextBound || bottomWidth > w - rightTextBound) {
    var topRect2 = rect(x, w-400, topWidth - w + x, lineHeight);
    var bottomRect2 = rect(x, w-100, bottomWidth - w + x, lineHeight);
  }
  // create bounding boxes for text
  fill(255);
  var topLine = text(callText, x, w - 450, rightTextBound, w);
  var bottomLine = text(repVoteText, x, w - 150, rightTextBound, w);
}

// this function uses the propublica api to get recent bills by a specific member: 
// https://propublica.github.io/congress-api-docs/#get-recent-bills-by-a-specific-member
// TODO: figure out 'introduced' vs. 'updated' args
// function getBill(repId) {
//   $.ajax({
//            url: "https://api.propublica.org/congress/v1/members/"+repId+"/bills/updated.json",
//            type: "GET",
//            dataType: 'json',
//            headers: {'X-API-Key': 'AzuJWcFuUg3f0iLuL5zrl5M8RExaka469UWE81df'}
//          }).done(function(data) {
//           var billList = data.results[0].bills;
//             for (var i = 0; i < billList.length; i++) {
//               var bill = billList[i].bill_id
//               console.log(bill)
//             }
//          });
// }

// this function uses the propublica api to match a senator's name to his/her bio id: 
// https://propublica.github.io/congress-api-docs/#lists-of-members
// takes two arguments: chamber can either be 'senate' or 'house'; 'senator' is first name + last name
function matchSenatorName(chamber, senator, picker) {
  $.ajax({
           url: "https://api.propublica.org/congress/v1/115/"+chamber+"/members.json",
           type: "GET",
           dataType: 'json',
           headers: {'X-API-Key': PPKEY }
         }).done(function(data) {
          var memberList = data.results[0].members;
          for (var i = 0; i < memberList.length; i++) {
            var name = memberList[i].first_name + ' ' + memberList[i].last_name;
            if (name.indexOf(senator) > -1 ) {
              repId = (memberList[i].id).toString()
              // pick a random roll call vote
              picker = Math.floor(Math.random() * rollCalls.length)
              console.log('bill: ', rollCalls[picker])
              getVote(rollCalls[picker], repId, picker)
            }
          }
        })
}

// this function uses the propublica api to return how a particular rep voted on a bill
// https://propublica.github.io/congress-api-docs/#get-a-specific-roll-call-vote
// takes two arguments: roll call # and rep's 7-character bio id, both as strings
function getVote(rollCall, repId, picker) {
  $.ajax({
           url: "https://api.propublica.org/congress/v1/115/senate/sessions/1/votes/"+rollCall+".json",
           type: "GET",
           dataType: 'json',
           headers: {'X-API-Key': PPKEY}
         }).done(function(data) {
          var positions = data.results.votes.vote.positions
          for (var i = 0; i < positions.length; i++) {
            var repIdToCheck = positions[i].member_id
            if (repIdToCheck.indexOf(repId) > -1) {
              var position = positions[i].vote_position.toLowerCase()
              console.log('vote: ', position)
              break;
            }
          }
          getSentiment(position, picker)
        });
}

function getSentiment(position, picker) {
  var desiredVote = rawData[picker].desired_vote
  if (position.indexOf(desiredVote) > -1) {
    sentiment = rawData[picker].pro_text
    console.log('sentiment: ', sentiment)
  } else {
    sentiment = rawData[picker].anti_text
    console.log('sentiment: ', sentiment)
  }
}

