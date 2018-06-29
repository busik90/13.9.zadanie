var http = require('http'),
    colors = require('colors');

var handlers = require('./handlers');

function start() {
  function onRequest(request, response) {
    console.log('Odebrano zapytanie.');
    console.log('Zapytanie ' + request.url + ' odebrane.');

    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    
    switch (request.url) { // switch rozróżniający zapytania
      case '/':
      case '/start':
        handlers.welcome(request, response);
        break;
      case '/upload':
        handlers.upload(request, response);
        break;
      case '/show':
        handlers.show(request, response);
        break;
      default:
        handlers.error(request, response);
    }
  }

  http.createServer(onRequest).listen(9000);

  console.log('\nUruchomiono serwer!'.green);
  console.log('Adres url: http://localhost:9000'.blue);
}

exports.start = start;