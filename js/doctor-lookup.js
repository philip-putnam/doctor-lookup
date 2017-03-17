var apiKey = require('./../.env').apiKey;


function Search() {

}


Search.prototype.getDoctors = function(medicalIssue, displayResults) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query= '+ medicalIssue + '&location=45.5231%2C-122.413%2C100&user_location=45.5231%2C-122.413&skip=0&limit=10&user_key=' + apiKey)
   .then(function(result) {
      displayResults(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.searchModule = Search;
