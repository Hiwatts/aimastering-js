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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ConfigAuth0', 'model/ConfigPaypal', 'model/ConfigStripe'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConfigAuth0'), require('./ConfigPaypal'), require('./ConfigStripe'));
  } else {
    // Browser globals (root is window)
    if (!root.Aimastering) {
      root.Aimastering = {};
    }
    root.Aimastering.Config = factory(root.Aimastering.ApiClient, root.Aimastering.ConfigAuth0, root.Aimastering.ConfigPaypal, root.Aimastering.ConfigStripe);
  }
}(this, function(ApiClient, ConfigAuth0, ConfigPaypal, ConfigStripe) {
  'use strict';




  /**
   * The Config model module.
   * @module model/Config
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Config</code>.
   * @alias module:model/Config
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Config</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Config} obj Optional instance to populate.
   * @return {module:model/Config} The populated <code>Config</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('auth0')) {
        obj['auth0'] = ConfigAuth0.constructFromObject(data['auth0']);
      }
      if (data.hasOwnProperty('paypal')) {
        obj['paypal'] = ConfigPaypal.constructFromObject(data['paypal']);
      }
      if (data.hasOwnProperty('stripe')) {
        obj['stripe'] = ConfigStripe.constructFromObject(data['stripe']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ConfigAuth0} auth0
   */
  exports.prototype['auth0'] = undefined;
  /**
   * @member {module:model/ConfigPaypal} paypal
   */
  exports.prototype['paypal'] = undefined;
  /**
   * @member {module:model/ConfigStripe} stripe
   */
  exports.prototype['stripe'] = undefined;



  return exports;
}));


