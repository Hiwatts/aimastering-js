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
    instance = new Aimastering.Subscription();
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

  describe('Subscription', function() {
    it('should create an instance of Subscription', function() {
      // uncomment below and update the code to test Subscription
      //var instane = new Aimastering.Subscription();
      //expect(instance).to.be.a(Aimastering.Subscription);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Aimastering.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new Aimastering.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property stripeSubscriptionId (base name: "stripe_subscription_id")', function() {
      // uncomment below and update the code to test the property stripeSubscriptionId
      //var instane = new Aimastering.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property currentPeriodStartAt (base name: "current_period_start_at")', function() {
      // uncomment below and update the code to test the property currentPeriodStartAt
      //var instane = new Aimastering.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property currentPeriodEndAt (base name: "current_period_end_at")', function() {
      // uncomment below and update the code to test the property currentPeriodEndAt
      //var instane = new Aimastering.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property canceled (base name: "canceled")', function() {
      // uncomment below and update the code to test the property canceled
      //var instane = new Aimastering.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property cancelAtPeriodEnd (base name: "cancel_at_period_end")', function() {
      // uncomment below and update the code to test the property cancelAtPeriodEnd
      //var instane = new Aimastering.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property trialEnd (base name: "trial_end")', function() {
      // uncomment below and update the code to test the property trialEnd
      //var instane = new Aimastering.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new Aimastering.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new Aimastering.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new Aimastering.Subscription();
      //expect(instance).to.be();
    });

  });

}));
