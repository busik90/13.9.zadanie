var fs = require('fs'),
    formidable = require('formidable');

exports.welcome = function(request, response) {
  console.log('Rozpoczynam obsługę żądania welcome.\n'.green);

  switch (request.url) {
    case '/style.css':
      fs.readFile('./templates/style.css', 'utf-8', function(err, css) {
        response.writeHead(200, {'Content-type': 'text/css; charset=utf-8'});
        response.write(css);
        response.end();
      });
      break;
    default :
      fs.readFile('./templates/start.html', function(err, html) {
        response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        response.write(html);
        response.end();
      });
  }
}

exports.upload = function(request, response) {
  console.log('Rozpoczynam obsługę żądania upload.\n'.yellow);
  var form = new formidable.IncomingForm();
  
  form.parse(request, function(error, fields, files) {
    fs.renameSync(files.upload.path, 'test.png');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('received image:<br/>');
    response.write('<img src="/show" />');
    response.end();
  });
}

exports.error = function(request, response) {
  console.log('Nie wiem co robić.\n'.red);
  response.write('404 :(');
  response.end();
}

exports.show = function(request, response) {
  fs.readFile('test.png', 'binary', function(error, file) {
    response.writeHead(200, {'Content-Type': 'image/png'});
    response.write(file, 'binary');
    response.end();
  });
}