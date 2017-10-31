var server = require("./server_v3");
var router = require("./router");

server.start(router.route);