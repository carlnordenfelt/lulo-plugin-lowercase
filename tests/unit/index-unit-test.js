'use strict';

var expect = require('chai').expect;

describe('Index unit tests', function () {
    var subject = require('../../src/index');
    var event;
    beforeEach(function () {
        event = { ResourceProperties: { Value: 'TeSt StrinG' } };
    });

    describe('validate', function () {
        it('should succeed', function (done) {
            subject.validate(event);
            done();
        });
        it('should fail if Value is not set', function (done) {
            delete event.ResourceProperties.Value;
            function fn() {
                subject.validate(event);
            }

            expect(fn).to.throw(/Missing required property Value/);
            done();
        });
    });

    describe('create', function () {
        it('should succeed', function (done) {
            subject.create(event, {}, function (error, response) {
                expect(error).to.equal(null);
                expect(response.physicalResourceId).to.equal('test string');
                done();
            });
        });
    });

    describe('update', function () {
        it('should succeed', function (done) {
            subject.update(event, {}, function (error, response) {
                expect(error).to.equal(null);
                expect(response.physicalResourceId).to.equal('test string');
                done();
            });
        });
    });

    describe('delete', function () {
        it('should succeed', function (done) {
            subject.delete(event, {}, function (error, response) {
                expect(error).to.equal(undefined);
                expect(response).to.equal(undefined);
                done();
            });
        });
    });
});
