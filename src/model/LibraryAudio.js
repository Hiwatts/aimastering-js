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
    root.Aimastering.LibraryAudio = factory(root.Aimastering.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LibraryAudio model module.
   * @module model/LibraryAudio
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>LibraryAudio</code>.
   * @alias module:model/LibraryAudio
   * @class
   */
  var exports = function() {
    var _this = this;




































  };

  /**
   * Constructs a <code>LibraryAudio</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LibraryAudio} obj Optional instance to populate.
   * @return {module:model/LibraryAudio} The populated <code>LibraryAudio</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('album')) {
        obj['album'] = ApiClient.convertToType(data['album'], 'String');
      }
      if (data.hasOwnProperty('album_artist')) {
        obj['album_artist'] = ApiClient.convertToType(data['album_artist'], 'String');
      }
      if (data.hasOwnProperty('artist')) {
        obj['artist'] = ApiClient.convertToType(data['artist'], 'String');
      }
      if (data.hasOwnProperty('genre')) {
        obj['genre'] = ApiClient.convertToType(data['genre'], 'String');
      }
      if (data.hasOwnProperty('track')) {
        obj['track'] = ApiClient.convertToType(data['track'], 'Number');
      }
      if (data.hasOwnProperty('publisher')) {
        obj['publisher'] = ApiClient.convertToType(data['publisher'], 'String');
      }
      if (data.hasOwnProperty('file_hash')) {
        obj['file_hash'] = ApiClient.convertToType(data['file_hash'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('failure_reason')) {
        obj['failure_reason'] = ApiClient.convertToType(data['failure_reason'], 'String');
      }
      if (data.hasOwnProperty('probe_json')) {
        obj['probe_json'] = ApiClient.convertToType(data['probe_json'], 'String');
      }
      if (data.hasOwnProperty('rms')) {
        obj['rms'] = ApiClient.convertToType(data['rms'], 'Number');
      }
      if (data.hasOwnProperty('peak')) {
        obj['peak'] = ApiClient.convertToType(data['peak'], 'Number');
      }
      if (data.hasOwnProperty('true_peak')) {
        obj['true_peak'] = ApiClient.convertToType(data['true_peak'], 'Number');
      }
      if (data.hasOwnProperty('lowpass_true_peak_15khz')) {
        obj['lowpass_true_peak_15khz'] = ApiClient.convertToType(data['lowpass_true_peak_15khz'], 'Number');
      }
      if (data.hasOwnProperty('loudness')) {
        obj['loudness'] = ApiClient.convertToType(data['loudness'], 'Number');
      }
      if (data.hasOwnProperty('dynamics')) {
        obj['dynamics'] = ApiClient.convertToType(data['dynamics'], 'Number');
      }
      if (data.hasOwnProperty('sharpness')) {
        obj['sharpness'] = ApiClient.convertToType(data['sharpness'], 'Number');
      }
      if (data.hasOwnProperty('space')) {
        obj['space'] = ApiClient.convertToType(data['space'], 'Number');
      }
      if (data.hasOwnProperty('loudness_range')) {
        obj['loudness_range'] = ApiClient.convertToType(data['loudness_range'], 'Number');
      }
      if (data.hasOwnProperty('drr')) {
        obj['drr'] = ApiClient.convertToType(data['drr'], 'Number');
      }
      if (data.hasOwnProperty('sound_quality')) {
        obj['sound_quality'] = ApiClient.convertToType(data['sound_quality'], 'Number');
      }
      if (data.hasOwnProperty('sound_quality2')) {
        obj['sound_quality2'] = ApiClient.convertToType(data['sound_quality2'], 'Number');
      }
      if (data.hasOwnProperty('dissonance')) {
        obj['dissonance'] = ApiClient.convertToType(data['dissonance'], 'Number');
      }
      if (data.hasOwnProperty('frames')) {
        obj['frames'] = ApiClient.convertToType(data['frames'], 'Number');
      }
      if (data.hasOwnProperty('sample_rate')) {
        obj['sample_rate'] = ApiClient.convertToType(data['sample_rate'], 'Number');
      }
      if (data.hasOwnProperty('channels')) {
        obj['channels'] = ApiClient.convertToType(data['channels'], 'Number');
      }
      if (data.hasOwnProperty('is_public')) {
        obj['is_public'] = ApiClient.convertToType(data['is_public'], 'Boolean');
      }
      if (data.hasOwnProperty('liked_by_self')) {
        obj['liked_by_self'] = ApiClient.convertToType(data['liked_by_self'], 'Boolean');
      }
      if (data.hasOwnProperty('like_count')) {
        obj['like_count'] = ApiClient.convertToType(data['like_count'], 'Number');
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
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} album
   */
  exports.prototype['album'] = undefined;
  /**
   * @member {String} album_artist
   */
  exports.prototype['album_artist'] = undefined;
  /**
   * @member {String} artist
   */
  exports.prototype['artist'] = undefined;
  /**
   * @member {String} genre
   */
  exports.prototype['genre'] = undefined;
  /**
   * @member {Number} track
   */
  exports.prototype['track'] = undefined;
  /**
   * @member {String} publisher
   */
  exports.prototype['publisher'] = undefined;
  /**
   * @member {String} file_hash
   */
  exports.prototype['file_hash'] = undefined;
  /**
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} failure_reason
   */
  exports.prototype['failure_reason'] = undefined;
  /**
   * @member {String} probe_json
   */
  exports.prototype['probe_json'] = undefined;
  /**
   * @member {Number} rms
   */
  exports.prototype['rms'] = undefined;
  /**
   * @member {Number} peak
   */
  exports.prototype['peak'] = undefined;
  /**
   * @member {Number} true_peak
   */
  exports.prototype['true_peak'] = undefined;
  /**
   * @member {Number} lowpass_true_peak_15khz
   */
  exports.prototype['lowpass_true_peak_15khz'] = undefined;
  /**
   * @member {Number} loudness
   */
  exports.prototype['loudness'] = undefined;
  /**
   * @member {Number} dynamics
   */
  exports.prototype['dynamics'] = undefined;
  /**
   * @member {Number} sharpness
   */
  exports.prototype['sharpness'] = undefined;
  /**
   * @member {Number} space
   */
  exports.prototype['space'] = undefined;
  /**
   * @member {Number} loudness_range
   */
  exports.prototype['loudness_range'] = undefined;
  /**
   * @member {Number} drr
   */
  exports.prototype['drr'] = undefined;
  /**
   * @member {Number} sound_quality
   */
  exports.prototype['sound_quality'] = undefined;
  /**
   * @member {Number} sound_quality2
   */
  exports.prototype['sound_quality2'] = undefined;
  /**
   * @member {Number} dissonance
   */
  exports.prototype['dissonance'] = undefined;
  /**
   * @member {Number} frames
   */
  exports.prototype['frames'] = undefined;
  /**
   * @member {Number} sample_rate
   */
  exports.prototype['sample_rate'] = undefined;
  /**
   * @member {Number} channels
   */
  exports.prototype['channels'] = undefined;
  /**
   * @member {Boolean} is_public
   */
  exports.prototype['is_public'] = undefined;
  /**
   * @member {Boolean} liked_by_self
   */
  exports.prototype['liked_by_self'] = undefined;
  /**
   * @member {Number} like_count
   */
  exports.prototype['like_count'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;



  return exports;
}));


