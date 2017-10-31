var server = require("./server_v6");
var router = require("./router_v3");
var requestHandlers = require("./requestHandlers_v4");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);