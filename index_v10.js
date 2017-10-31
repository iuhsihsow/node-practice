var server = require("./server_v8");
var router = require("./router_v4");
var requestHandlers = require("./requestHandlers_v7");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
server.start(router.route, handle);