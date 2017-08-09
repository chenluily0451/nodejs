function route(handle, pathname) {
	console.log('About to route a requesr for ' + pathname)
	if( typeof handle[pathname] === 'function') {
		return handle[pathname]();
	} else {
		console.log('no request handler found for ' + pathname);
		return "404 not found"
	}

}

exports.route = route
