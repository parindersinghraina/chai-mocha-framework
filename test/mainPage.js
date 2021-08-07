var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://localhost:2222' , function(error, response, body) {
        expect(body).to.equal('Chai-Mocha Test App');
        done();
    });
});

it('Main page status', function(done) {
    request('http://localhost:2222' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('About page content', function(done) {
    request('http://localhost:2222/about' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});