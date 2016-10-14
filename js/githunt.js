var apiKey = require('./../.env').apiKey;

function User(username) {
  this.username = username;
}

User.prototype.getInfo = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#name').text(response.name);
    $('#html_url').text(response.html_url);
  }).fail(function(error) {
    $('#output').text(error.responseJSON.message);
  });
};

User.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?/access_token=' + apiKey).then(function(response){
    console.log(response[0].name);
    for(var i = 0; i < response.length; i++){
      $('#repositories').append("<li>" + response[i].name + "</li>");
    }
  });
};

exports.userModule = User;
