var $ = require('jquery');

$(function() {

  $("#open").click(function(event) {
  	event.preventDefault();
  	$("#oldReleases").slideDown();
  	$("#open").hide();
  	$("#close").show();
  });

  $("#close").click(function(event) {
  	event.preventDefault();
  	$("#oldReleases").slideUp();
  	$("#open").show();
  	$("#close").hide();
  });

});
