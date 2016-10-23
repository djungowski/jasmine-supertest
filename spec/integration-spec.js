//var server = require('./support/server');
//var supertest = require('supertest');
//var finishTestcase = require('../index.js');
//
//describe('jasmine-supertest test suite', function() {
//	beforeEach(function() {
//	    this.app = supertest(server);
//	});
//
//    it('finishes the test case is fine', function(done) {
//		this.app.get('/incorrect-url').expect(404).end(finishTestcase(done));
//    });
//
//	it('throws if there is an error', function(done) {
//		var me = this;
//		var throws = function () {
//			me.app.get('/incorrect-url').expect(200).end(finishTestcase(done));
//		};
////		expect(throws).toThrow('foo');
//		me.app.get('/incorrect-url').expect(200).end(finishTestcase(done));
//	});
//});