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

exports.userModule = User;
