var Search = require('./../js/doctor-lookup.js').searchModule;

var displaySearchResults = function(searchResults) {
  $('#search-results').text('');
  $('#search-results').append("<h2>Search Results: </h2><h2>Doctors:</h2>");
  var doctors = searchResults.results[0].data;

  for (var index = 0; index < doctors.length; index++) {
    $('#search-results').append("<p class='doctor'><strong>" + doctors[index].profile.first_name + ' ' + doctors[index].profile.last_name +
                                "</strong></p><div class='initially-hidden' id='" + index + "'><p><strong>Bio:</strong></p><p>" +  doctors[index].profile.bio +
                                "</p></div>");
    $('p.doctor').last().click(function() {
      $('div#' + this.nextSibling.id).toggle();
    });
  }
};

$(document).ready(function() {

  $('#doctor-search').click(function(event) {
    event.preventDefault();

    var medicalIssue = $('#medical-issue').val();
    var search = new Search();
    search.getDoctors(medicalIssue, displaySearchResults);

  });

});
