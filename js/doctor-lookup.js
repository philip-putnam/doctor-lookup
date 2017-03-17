var apiKey = require('./../.env').apiKey;


function Search() {
  this.results = [];
}


Search.prototype.getDoctors = function(medicalIssue, displayResults) {
  var search = this;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query= '+ medicalIssue + '&location=45.5231%2C-122.413%2C100&user_location=45.5231%2C-122.413&skip=0&limit=10&user_key=' + apiKey)
   .then(function(result) {
    search.results.push(result);
    displayResults(search);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.searchModule = Search;
