var PPKEY = 'AzuJWcFuUg3f0iLuL5zrl5M8RExaka469UWE81df'
// variables for pulling data from spreadsheet
var rawData;
var rollCalls = []
// variables for application interface
var canvas,
  findButton,
  saveButton,
  selector;
// square canvas dimensions
var w = 500;
// meme text positioning and size
var x = 10;
var ts = 40;
var rightTextBound = w - x;
// vars for populating the canvas with data
var mocPosition,
  sentiment,
  mocRollCall,
  mocPhone,
  mocName,
  mocImage;

function setup() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1oWAFQIIRZneiAQAXRvJ1S4K_Lall0DY_A8WGIVawXpc/pubhtml',
                   callback: gotData,
                   simpleSheet: true } )

  canvas = createCanvas(w, w);
  canvas.parent('canvas');
  background(200);
  // create dropdown list of states
  selector = document.getElementById("state-dropdown");
  for (var i = 0; i < senators.length; i++) {
      var choice = senators[i].state;
      var element = document.createElement("option");
      element.textContent = choice;
      element.value = choice;
      selector.appendChild(element);
    }

  findButton = createButton('Find')
  findButton.parent('check-zip')
  findButton.mousePressed(findReps);

  saveButton = createButton('Save');
  saveButton.parent('save-canvas');
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
// from the dropdown
function findReps() {
  selectedState = selector.options[selector.selectedIndex].value;
  getSenatorsByState(selectedState)
}

// this makes an API call to: https://propublica.github.io/congress-api-docs/#get-current-members-by-state-district
function getSenatorsByState(state, senatorList) {
  $.ajax({
           url: "https://api.propublica.org/congress/v1/members/senate/" + state +  "/current.json",
           type: "GET",
           dataType: 'json',
           headers: {'X-API-Key': PPKEY }
         }).done(function(data) {
          senatorList = [];
          for (var i = 0; i < data.results.length; i++) {
            senatorList.push(data.results[i].name);
          }
          createButtons(senatorList)
        })    
}

// this function creates a button for each senator returned by findReps()
// then, it puts the button in the 'list-reps' div
function createButtons(senatorList) {
  // clear existing stuff on the canvas
  clearCanvas();
  // clear existing button cache
  $('#list-reps').html('');
  // for each MOC, create a button with MOC's name
  for (var i = 0; i < senatorList.length; i++) {
    var button = createButton(senatorList[i])
    button.parent('list-reps');
    setSenator(button, senatorList[i]);
  }
  function setSenator(button, senator) {
    function assignSenator() {
      $('#tempLoading').remove();
      $('#canvas').append('<p id="tempLoading">LOADING...</p>');
      mocName = senator
      getImage(senator)
      matchSenatorName("senate", mocName)
    }
    // on button click, call assignSenator(), which calls matchSenatorName()
    button.mousePressed(assignSenator);
  }
}

function getImage(senator) {
  // clear existing image
  var imgUrl;
  clearCanvas();
  // broken ;(
  for (i = 0; i < senators.length; i++) {
    if (senator.indexOf(senators[i]["full_name"]) > -1) {
      imgUrl = senators[i]["image"];
    }
  }
  // load MOC's image from the imgUrl passed in
  loadImage(imgUrl, function(loadedImg) {
    var ratio = loadedImg.width / loadedImg.height
    var divide = loadedImg.width / w
    var height = loadedImg.height / divide
    image(loadedImg, 0, 0, w, height);
  });
}

// this function makes a call to the propublica API to get recent votes and contact info:
// https://propublica.github.io/congress-api-docs/#lists-of-members
// 'chamber' can either be 'senate' or 'house'
function matchSenatorName(chamber, senator, picker) {
  $.ajax({
           url: "https://api.propublica.org/congress/v1/115/"+chamber+"/members.json",
           type: "GET",
           dataType: 'json',
           headers: {'X-API-Key': PPKEY }
         }).done(function(data) {
          console.log(senator)
          var memberList = data.results[0].members;
          // for each member returned, check if it matches the senator passed in
          for (var i = 0; i < memberList.length; i++) {
            var name = memberList[i].first_name + ' ' + memberList[i].last_name;
            // if there's a match, get voting and contact info
            if (senator.indexOf(memberList[i].last_name) > -1 ) {
              repId = (memberList[i].id).toString()
              // pick a random roll call vote from the spreadsheet
              picker = Math.floor(Math.random() * rollCalls.length)
              console.log('bill: ', rollCalls[picker])
              mocRollCall = rollCalls[picker]
              mocPhone = memberList[i].phone
              getVote(rollCalls[picker], repId, picker)
            } else {
            }
          }
        })    
}

// this function uses the propublica API to return how a particular rep voted on a bill:
// https://propublica.github.io/congress-api-docs/#get-a-specific-roll-call-vote
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
              mocPosition = positions[i].vote_position.toLowerCase()
              console.log('vote: ', mocPosition)
              break;
            }
          }
          getSentiment(mocPosition, picker)
        });
}

function getSentiment(mocPosition, picker) {
  var desiredVote = rawData[picker].desired_vote
  if (mocPosition.indexOf(desiredVote) > -1) {
    sentiment = rawData[picker].pro_text
    console.log('sentiment: ', sentiment)
  } else {
    sentiment = rawData[picker].anti_text
    console.log('sentiment: ', sentiment)
  }
  getMsg(mocName, mocPhone, sentiment, mocPosition, mocRollCall)
}

function getMsg(name, phone, sentiment, vote, bill) {
  textSize(ts);
  // Call 208-980-2091 to say "I oppose!"
  // Rep. Murray just voted "No" on RB. 157
  textFont("Montserrat");
  // construct the text strings and measure their widths
  var callText = 'Call ' + phone + ' to say ' + '\"' + sentiment + '\"';
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
  // remove 'loading' text
  $('#tempLoading').remove();
  // create bounding boxes for text
  fill(255);
  var topLine = text(callText, x, w - 450, rightTextBound, w);
  var bottomLine = text(repVoteText, x, w - 150, rightTextBound, w)
}
