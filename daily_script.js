// startDate and endDate must be in the form "YYYY-MM-DD"
// chamber can either be "senate" or "house"
// TODO: dynamic dates
function getBills(chamber, startDate, endDate) {
  $.ajax({
    url: "https://api.propublica.org/congress/v1/"+chamber+"/votes/"+startDate+"/"+endDate+".json",
    type: "GET",
    dataType: 'json',
    headers: {'X-API-Key': 'AzuJWcFuUg3f0iLuL5zrl5M8RExaka469UWE81df'}
  }).done(function(data) {
    var votesList = data.results.votes
    for (var i = 0; i < votesList.length; i++) {
      var rollCall = votesList[i].roll_call
      // if (votesList[i].bill.number !== undefined) {
      //   var billNumber = votesList[i].bill.number
      // }
      var desc = votesList[i].description
      console.log("roll call: ", rollCall + '\n' + "bill summary: ", desc + '\n'
        // + "bill number: ", billNumber
        )
    }
  });
}

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

getBills("senate", "2017-03-24", getToday())
