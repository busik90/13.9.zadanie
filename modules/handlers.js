exports.welcome = function(request, response) {
  console.log('Rozpoczynam obsługę żądania welcome.\n'.green);
  response.write('Witaj na stronie startowej!');
  response.end();
}

exports.upload = function(request, response) {
  console.log('Rozpoczynam obsługę żądania upload.\n'.yellow);
  response.write('Rozpoczynam upload!');
  response.end();
}

exports.error = function(request, response) {
  console.log('Nie wiem co robić.\n'.red);
  response.write('404 :(');
  response.end();
}