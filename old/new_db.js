var objs = []

function getNames() {
  $.ajax({
    url: "https://api.propublica.org/congress/v1/115/senate/members.json",
    type: "GET",
    dataType: 'json',
    headers: {'X-API-Key': 'AzuJWcFuUg3f0iLuL5zrl5M8RExaka469UWE81df'}
  }).done(function(data) {
    results = data.results[0].members

    for (var i = 0; i < results.length; i++) {
      var obj = {
        phone: '',
        state: '',
        first_name: '',
        last_name: ''
      };
      obj.phone = results[i].phone
      obj.state = results[i].state
      obj.first_name = results[i].first_name
      obj.last_name = results[i].last_name

      objs.push(obj)
    }
    saveJSON(objs, 'db.json');
  });
}

getNames()
