module.exports = function(done) {
	return function(error) {
		if (error) {
			done.fail(error);
		} else {
			done();
		}
	}
};