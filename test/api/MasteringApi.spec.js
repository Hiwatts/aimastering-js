/**
 * AI Mastering API
 * This is a AI Mastering API document. You can use the mastering feature of [AI Mastering](https://aimastering.com) through this API.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: aimasteringcom@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Aimastering);
  }
}(this, function(expect, Aimastering) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Aimastering.MasteringApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MasteringApi', function() {
    describe('cancelMastering', function() {
      it('should call cancelMastering successfully', function(done) {
        //uncomment below and update the code to test cancelMastering
        //instance.cancelMastering(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createMastering', function() {
      it('should call createMastering successfully', function(done) {
        //uncomment below and update the code to test createMastering
        //instance.createMastering(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMastering', function() {
      it('should call deleteMastering successfully', function(done) {
        //uncomment below and update the code to test deleteMastering
        //instance.deleteMastering(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMastering', function() {
      it('should call getMastering successfully', function(done) {
        //uncomment below and update the code to test getMastering
        //instance.getMastering(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMasteringUnlockProduct', function() {
      it('should call getMasteringUnlockProduct successfully', function(done) {
        //uncomment below and update the code to test getMasteringUnlockProduct
        //instance.getMasteringUnlockProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listMasterings', function() {
      it('should call listMasterings successfully', function(done) {
        //uncomment below and update the code to test listMasterings
        //instance.listMasterings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publishMastering', function() {
      it('should call publishMastering successfully', function(done) {
        //uncomment below and update the code to test publishMastering
        //instance.publishMastering(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reviewMastering', function() {
      it('should call reviewMastering successfully', function(done) {
        //uncomment below and update the code to test reviewMastering
        //instance.reviewMastering(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
