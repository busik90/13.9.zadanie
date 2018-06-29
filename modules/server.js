var http = require('http'),
    colors = require('colors');

function start() {
  function onRequest(request, response) {
    console.log('Odebrano zapytanie.');
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    response.write('Pierwsze koty za płoty');
    response.end();
  }

  http.createServer(onRequest).listen(9000);

  console.log('\nUruchomiono serwer!'.green);
  console.log('Adres url: http://localhost:9000'.blue);
}

exports.start = start;