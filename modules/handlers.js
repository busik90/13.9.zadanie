var fs = require('fs'),
    formidable = require('formidable'),
    fileName;

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
    fileName = fields.title + '.png';

    fs.renameSync(files.upload.path, fileName);
    fs.readFile('./templates/upload.html', function(err, html) {
      response.writeHead(200, {'Content-Type': 'text/html charset=utf-8'});
      response.write(html);      
      response.end();
    });

    console.log(fileName);
  });
}

exports.error = function(request, response) {
  console.log('Nie wiem co robić.\n'.red);
  response.write('404 :(');
  response.end();
}

exports.show = function(request, response) {
  fs.readFile(fileName, 'binary', function(error, file) {
    response.writeHead(200, {'Content-Type': 'image/png'});
    response.write(file, 'binary');
    response.end();
  });
}