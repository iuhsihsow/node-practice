var server = require("./server_v7");
var router = require("./router_v4");
var requestHandlers = require("./requestHandlers_v6");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);