var server = require("./server_v5");
var router = require("./router_v2");
var requestHandlers = require("./requestHandlers_v1");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);