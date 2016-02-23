'use strict';

const URL     = require('url');
const Path    = require('path');
const Hapi    = require('hapi');
const Inert   = require('inert');

const Server  = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'app/')
      }
    }
  }
});

Server.connection({
  port: process.env.PORT || 6234
});

Server.register(Inert, (err)=> {
  if(err) {
    throw err;
  }
});

Server.route([
  {
    method: 'GET',
    path: '/{file*}',
    handler: {
      file:  function(request) {
        var file = request.params.file;
        if(!file) {
          return 'index.html';
        }
        return file;
      }
    }
  }
]);

// start server
Server.start((err)=> {
  if(err) {
    throw err;
  }
  console.log('Server running at: ', Server.info.uri);
});
