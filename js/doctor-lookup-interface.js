var Search = require('./../js/doctor-lookup.js').searchModule;

var displaySearchResults = function(searchResults) {
  $('#search-results').text('');
  $('.col-md-3').show();
  $('#search-results').append("<h2>Search Results: </h2><h2>Doctors:</h2>");
  var doctors = searchResults.results[0].data;

  for (var index = 0; index < doctors.length; index++) {
    $('#search-results').append("<p class='doctor'><strong>" + doctors[index].profile.first_name + ' ' + doctors[index].profile.last_name + "</strong></p>");

    addDoctorInfo(doctors, index);
  }
};

function addDoctorInfo(doctors, index) {
  $('p.doctor').last().click(function() {
    $('.col-md-8').show();
    $('#doctor-info').text('');
    $('#doctor-info').append("<p><strong>" + doctors[index].profile.first_name + ' ' + doctors[index].profile.last_name + "</strong></p><p><p><strong>Bio:</strong></p><p>" +  doctors[index].profile.bio +
    "</p></div>");
  });
}

$(document).ready(function() {

  $('#doctor-search').click(function(event) {
    event.preventDefault();

    var medicalIssue = $('#medical-issue').val();
    var search = new Search();
    search.getDoctors(medicalIssue, displaySearchResults);

  });

});
