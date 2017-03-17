var Search = require('./../js/doctor-lookup.js').searchModule;

var displaySearchResults = function(result) {
  console.log(result);
};

$(document).ready(function() {

  $('#doctor-search').click(function(event) {
    event.preventDefault();

    var medicalIssue = $('#medical-issue').val();
    var search = new Search();
    search.getDoctors(medicalIssue, displaySearchResults);

  });

});
