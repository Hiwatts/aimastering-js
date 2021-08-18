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
    root.Aimastering.AnonymizedMastering = factory(root.Aimastering.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AnonymizedMastering model module.
   * @module model/AnonymizedMastering
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AnonymizedMastering</code>.
   * @alias module:model/AnonymizedMastering
   * @class
   */
  var exports = function() {
    var _this = this;























  };

  /**
   * Constructs a <code>AnonymizedMastering</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnonymizedMastering} obj Optional instance to populate.
   * @return {module:model/AnonymizedMastering} The populated <code>AnonymizedMastering</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
      }
      if (data.hasOwnProperty('user_auth_provider')) {
        obj['user_auth_provider'] = ApiClient.convertToType(data['user_auth_provider'], 'String');
      }
      if (data.hasOwnProperty('mode')) {
        obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('failure_reason')) {
        obj['failure_reason'] = ApiClient.convertToType(data['failure_reason'], 'String');
      }
      if (data.hasOwnProperty('target_loudness')) {
        obj['target_loudness'] = ApiClient.convertToType(data['target_loudness'], 'Number');
      }
      if (data.hasOwnProperty('output_format')) {
        obj['output_format'] = ApiClient.convertToType(data['output_format'], 'String');
      }
      if (data.hasOwnProperty('preset')) {
        obj['preset'] = ApiClient.convertToType(data['preset'], 'String');
      }
      if (data.hasOwnProperty('bit_depth')) {
        obj['bit_depth'] = ApiClient.convertToType(data['bit_depth'], 'Number');
      }
      if (data.hasOwnProperty('sample_rate')) {
        obj['sample_rate'] = ApiClient.convertToType(data['sample_rate'], 'Number');
      }
      if (data.hasOwnProperty('review_score')) {
        obj['review_score'] = ApiClient.convertToType(data['review_score'], 'Number');
      }
      if (data.hasOwnProperty('mastering_matching_level')) {
        obj['mastering_matching_level'] = ApiClient.convertToType(data['mastering_matching_level'], 'Number');
      }
      if (data.hasOwnProperty('mastering')) {
        obj['mastering'] = ApiClient.convertToType(data['mastering'], 'Boolean');
      }
      if (data.hasOwnProperty('paid')) {
        obj['paid'] = ApiClient.convertToType(data['paid'], 'Boolean');
      }
      if (data.hasOwnProperty('payment_service')) {
        obj['payment_service'] = ApiClient.convertToType(data['payment_service'], 'String');
      }
      if (data.hasOwnProperty('retry_count')) {
        obj['retry_count'] = ApiClient.convertToType(data['retry_count'], 'Number');
      }
      if (data.hasOwnProperty('mastering_reverb')) {
        obj['mastering_reverb'] = ApiClient.convertToType(data['mastering_reverb'], 'Boolean');
      }
      if (data.hasOwnProperty('mastering_reverb_gain')) {
        obj['mastering_reverb_gain'] = ApiClient.convertToType(data['mastering_reverb_gain'], 'Number');
      }
      if (data.hasOwnProperty('low_cut_freq')) {
        obj['low_cut_freq'] = ApiClient.convertToType(data['low_cut_freq'], 'Number');
      }
      if (data.hasOwnProperty('high_cut_freq')) {
        obj['high_cut_freq'] = ApiClient.convertToType(data['high_cut_freq'], 'Number');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * @member {String} user_auth_provider
   */
  exports.prototype['user_auth_provider'] = undefined;
  /**
   * @member {module:model/AnonymizedMastering.ModeEnum} mode
   */
  exports.prototype['mode'] = undefined;
  /**
   * @member {module:model/AnonymizedMastering.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/AnonymizedMastering.FailureReasonEnum} failure_reason
   */
  exports.prototype['failure_reason'] = undefined;
  /**
   * @member {Number} target_loudness
   */
  exports.prototype['target_loudness'] = undefined;
  /**
   * @member {module:model/AnonymizedMastering.OutputFormatEnum} output_format
   */
  exports.prototype['output_format'] = undefined;
  /**
   * @member {module:model/AnonymizedMastering.PresetEnum} preset
   */
  exports.prototype['preset'] = undefined;
  /**
   * @member {Number} bit_depth
   */
  exports.prototype['bit_depth'] = undefined;
  /**
   * @member {Number} sample_rate
   */
  exports.prototype['sample_rate'] = undefined;
  /**
   * @member {Number} review_score
   */
  exports.prototype['review_score'] = undefined;
  /**
   * @member {Number} mastering_matching_level
   */
  exports.prototype['mastering_matching_level'] = undefined;
  /**
   * @member {Boolean} mastering
   */
  exports.prototype['mastering'] = undefined;
  /**
   * @member {Boolean} paid
   */
  exports.prototype['paid'] = undefined;
  /**
   * @member {module:model/AnonymizedMastering.PaymentServiceEnum} payment_service
   */
  exports.prototype['payment_service'] = undefined;
  /**
   * @member {Number} retry_count
   */
  exports.prototype['retry_count'] = undefined;
  /**
   * @member {Boolean} mastering_reverb
   */
  exports.prototype['mastering_reverb'] = undefined;
  /**
   * @member {Number} mastering_reverb_gain
   */
  exports.prototype['mastering_reverb_gain'] = undefined;
  /**
   * @member {Number} low_cut_freq
   */
  exports.prototype['low_cut_freq'] = undefined;
  /**
   * @member {Number} high_cut_freq
   */
  exports.prototype['high_cut_freq'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;


  /**
   * Allowed values for the <code>mode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ModeEnum = {
    /**
     * value: "default"
     * @const
     */
    "default": "default",
    /**
     * value: "custom"
     * @const
     */
    "custom": "custom"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "waiting"
     * @const
     */
    "waiting": "waiting",
    /**
     * value: "processing"
     * @const
     */
    "processing": "processing",
    /**
     * value: "canceled"
     * @const
     */
    "canceled": "canceled",
    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",
    /**
     * value: "succeeded"
     * @const
     */
    "succeeded": "succeeded"  };

  /**
   * Allowed values for the <code>failure_reason</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FailureReasonEnum = {
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",
    /**
     * value: "expired"
     * @const
     */
    "expired": "expired",
    /**
     * value: "failed_to_prepare"
     * @const
     */
    "failed_to_prepare": "failed_to_prepare"  };

  /**
   * Allowed values for the <code>output_format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OutputFormatEnum = {
    /**
     * value: "wav"
     * @const
     */
    "wav": "wav",
    /**
     * value: "mp3"
     * @const
     */
    "mp3": "mp3"  };

  /**
   * Allowed values for the <code>preset</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PresetEnum = {
    /**
     * value: "general"
     * @const
     */
    "general": "general",
    /**
     * value: "pop"
     * @const
     */
    "pop": "pop",
    /**
     * value: "jazz"
     * @const
     */
    "jazz": "jazz",
    /**
     * value: "classical"
     * @const
     */
    "classical": "classical"  };

  /**
   * Allowed values for the <code>payment_service</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PaymentServiceEnum = {
    /**
     * value: "paypal"
     * @const
     */
    "paypal": "paypal",
    /**
     * value: "stripe"
     * @const
     */
    "stripe": "stripe"  };


  return exports;
}));


