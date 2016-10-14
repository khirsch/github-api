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
    $('#output').text(error.responseJSON.message);
  });

};

User.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?/access_token=' + apiKey).then(function(response){

    for(var i = 0; i < response.length; i++){
      $('#repositories').append('<li>' + response[i].name + '</li>');
    }

  });
};

exports.userModule = User;
