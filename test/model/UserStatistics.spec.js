/**
 * AI Mastering API
 * This is a AI Mastering API document. You can use the mastering feature of [AI Mastering](https://aimastering.com) through this API.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@bakuage.com
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
    instance = new Aimastering.UserStatistics();
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

  describe('UserStatistics', function() {
    it('should create an instance of UserStatistics', function() {
      // uncomment below and update the code to test UserStatistics
      //var instane = new Aimastering.UserStatistics();
      //expect(instance).to.be.a(Aimastering.UserStatistics);
    });

    it('should have the property registrationInvitationCount (base name: "registration_invitation_count")', function() {
      // uncomment below and update the code to test the property registrationInvitationCount
      //var instane = new Aimastering.UserStatistics();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionInvitationCount (base name: "subscription_invitation_count")', function() {
      // uncomment below and update the code to test the property subscriptionInvitationCount
      //var instane = new Aimastering.UserStatistics();
      //expect(instance).to.be();
    });

    it('should have the property masteringCount (base name: "mastering_count")', function() {
      // uncomment below and update the code to test the property masteringCount
      //var instane = new Aimastering.UserStatistics();
      //expect(instance).to.be();
    });

    it('should have the property monthlyRegistrationInvitationCount (base name: "monthly_registration_invitation_count")', function() {
      // uncomment below and update the code to test the property monthlyRegistrationInvitationCount
      //var instane = new Aimastering.UserStatistics();
      //expect(instance).to.be();
    });

    it('should have the property monthlySubscriptionInvitationCount (base name: "monthly_subscription_invitation_count")', function() {
      // uncomment below and update the code to test the property monthlySubscriptionInvitationCount
      //var instane = new Aimastering.UserStatistics();
      //expect(instance).to.be();
    });

    it('should have the property monthlyMasteringCount (base name: "monthly_mastering_count")', function() {
      // uncomment below and update the code to test the property monthlyMasteringCount
      //var instane = new Aimastering.UserStatistics();
      //expect(instance).to.be();
    });

  });

}));
