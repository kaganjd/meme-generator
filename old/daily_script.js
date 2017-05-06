PPKEY = ''

// startDate and endDate must be in the form "YYYY-MM-DD"
// chamber can either be "senate" or "house"
function getBills(chamber, startDate, endDate) {
  $.ajax({
    url: "https://api.propublica.org/congress/v1/"+chamber+"/votes/"+startDate+"/"+endDate+".json",
    type: "GET",
    dataType: 'json',
    headers: {'X-API-Key': PPKEY }
  }).done(function(data) {
    var dateObj = {}
    dateObj.rollCalls = []
    dateObj.billIds = []
    dateObj.summaries = []
    var votesList = data.results.votes
    for (var i = 0; i < votesList.length; i++) {
      var rollCall = votesList[i].roll_call
      if (votesList[i].nomination) {
        var billId = votesList[i].nomination.nomination_id
      } else if (votesList[i].bill){
        var billId = votesList[i].bill.bill_id
      }
      var desc = votesList[i].description
      dateObj.rollCalls.push(rollCall)
      dateObj.billId.push(billId)
      dateObj.summaries.push(desc)
      console.log("roll call: ", rollCall + '\n' +
         "bill or nomination number: ", billId + '\n' +
         "summary: ", desc)
    }
    saveJSON(dateObj, 'bills.json');
  });
}

getBills("senate", "2017-03-24", getToday())


// http://stackoverflow.com/questions/12409299/how-to-get-current-formatted-date-dd-mm-yyyy-in-javascript-and-append-it-to-an-i
function getToday() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  } 
  if (mm < 10) {
    mm = '0' + mm;
  } 
  return today = yyyy+ '-' + mm + '-' + dd;
}
