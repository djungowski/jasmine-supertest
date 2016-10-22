module.exports = function(done) {
	return function(error) {
		if (error) {
			done(error);
		} else {
			done();
		}
	}
};