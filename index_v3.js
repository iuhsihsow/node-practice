var server = require("./server_v4");
var router = require("./router_v1");
var requestHandlers = require("./requestHandlers_v0");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);