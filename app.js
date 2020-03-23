var server = require('./server');
var router = require('./route');
var handler = require('./handler');
var handle={};
handle['/']=handler.home;
handle["/home"]=handler.home;
handle["/review"]= handler.review;

server.startServer(handle,router.router);
