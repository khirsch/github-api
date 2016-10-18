var apiKey = require('./../.env').apiKey;

function User(username) {
  this.username = username;
}

User.prototype.getInfo = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){

    var url = response.html_url;
    var name = response.name;

    $('#name').text(name);
    $('#html_url').text(url);
    $('a').attr('href', url);

  }).fail(function(error) {
    $('#output').html("<p>Uh-oh! It seems that <strong>" + username + "</strong> does not exist within the GitHub database. Try entering a different username.</p>");
  });

};

User.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?/access_token=' + apiKey).then(function(response){

    for(var i = 0; i < response.length; i++){
      if (response[i].description === null) {
        $('#repositories').append('<li>' + response[i].name + ': N/A</li>');
      } else {
        $('#repositories').append('<li>' + response[i].name + ': ' + response[i].description + '</li>');
      }
    }
  });

};

exports.userModule = User;
