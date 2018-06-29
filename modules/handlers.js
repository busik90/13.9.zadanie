var fs = require('fs');

exports.welcome = function(request, response) {
  console.log('Rozpoczynam obsługę żądania welcome.\n'.green);
  fs.readFile('./templates/start.html', function(err, html) {
    response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    response.write(html);
    response.end();
  });
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