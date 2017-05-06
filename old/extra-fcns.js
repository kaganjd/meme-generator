function hitPropublica(stateAbbrev){
  $.ajax({
           url: "https://api.propublica.org/congress/v1/members/senate/"+stateAbbrev+"/current.json",
           type: "GET",
           dataType: 'json',
           headers: {'X-API-Key': 'AzuJWcFuUg3f0iLuL5zrl5M8RExaka469UWE81df'}
         }).done(function(data) {
          console.log('stateAbbrev response: ', data.results)
         });
}

// function getSenatorVote(name){
//   rawData[0].issue = issue
//   //look through all of rawData, find senator name
//   rawData.forEach(function(senator){
//     if (name == senator.name){
//       //update local json of currentSenator
//       currentSenator.vote = senator.their_vote
//       currentSenator.happy = senator.happy
//       //why didn't return work?
//       // return senator.happy;
//     }
//   })
//   // now that we have all the data, draw it
//   // TODO: get fillImage out of this function
//   fillImage(currentSenator.image, currentSenator.phone, currentSenator.name)
// }

  // to re-org databaseA.js by state:
  // for (var i = 0; i < senators.length; i++) {
  //   var state = senators[i].state;
  //   if (senatorsByState[state] == undefined) {
  //     senatorsByState[state] = [];
  //     senatorsByState[state].push(senators[i]);
  //   } else {
  //     senatorsByState[state].push(senators[i]);      
  //   }
  // }
  // console.log(senatorsByState);
  // saveJSON(senatorsByState,'senators2.json');
