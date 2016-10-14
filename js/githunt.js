var apiKey = require('./../.env').apiKey;

function User() {
}

User.prototype.getInfo = function(username) {
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
