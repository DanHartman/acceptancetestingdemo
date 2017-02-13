var tty = require('/usr/local/lib/npm/lib/node_modules/tty.js');

var app = tty.createServer({
  shell: 'bash',
  users: {
    foo: 'bar'
  },
  port: 8000
});
