var User = require('./../js/githunt.js').userModule;

$(document).ready(function() {

  var user = new User();

  $('#search').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    $('#repositories').empty();
    user.getInfo(username);
    user.getRepos(username);
    $('#start').hide();
  });
  
});
