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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Aimastering) {
      root.Aimastering = {};
    }
    root.Aimastering.AudioAnalysis = factory(root.Aimastering.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AudioAnalysis model module.
   * @module model/AudioAnalysis
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AudioAnalysis</code>.
   * @alias module:model/AudioAnalysis
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AudioAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioAnalysis} obj Optional instance to populate.
   * @return {module:model/AudioAnalysis} The populated <code>AudioAnalysis</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('audio_id')) {
        obj['audio_id'] = ApiClient.convertToType(data['audio_id'], 'Number');
      }
      if (data.hasOwnProperty('analysis')) {
        obj['analysis'] = ApiClient.convertToType(data['analysis'], Object);
      }
    }
    return obj;
  }

  /**
   * Audio analysis id
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Audio id
   * @member {Number} audio_id
   */
  exports.prototype['audio_id'] = undefined;
  /**
   * Audio analysis data. The schema changes frequently.
   * @member {Object} analysis
   */
  exports.prototype['analysis'] = undefined;



  return exports;
}));


