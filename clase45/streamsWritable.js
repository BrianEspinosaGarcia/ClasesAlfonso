const Writable = require('stream').Writable;
const myStream = new Writable();

myStream.write('some data');
myStream.write('some more data');
myStream.end('done writing data');
