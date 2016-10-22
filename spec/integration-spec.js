var server = require('./support/server');
var supertest = require('supertest');
var finishTestcase = require('../index.js');

describe('jasmine-supertest test suite', function() {
	beforeEach(function() {
	    this.app = supertest(server);
	});

    it('calls done without params if everything is fine', function(done) {
		var spyWrapper = {
			done: done
		};
		spyOn(spyWrapper, 'done').and.callThrough();
		this.app.get('/incorrect-url').expect(404).end(finishTestcase(done));
		expect(spyWrapper.done).toHaveBeenCalledWith('foo');
    });
});