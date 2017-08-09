var http = require("http");
var url = require("url")
function start(route, handle) {

	function onRequest(request, response){
		console.log('request receive')
		var pathname = url.parse(request.url).pathname;
	
		var content = route(handle, pathname);	

		console.log("request for " + pathname + "received!")
		response.writeHead(200, {"Content-Type" : "text/plain" });
		response.write(content);
		response.end();
	}

	http.createServer(onRequest).listen(9999);
	console.log('server has started.');
}

	exports.start = start







