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
    root.Aimastering.ExternalSearchResultItunes = factory(root.Aimastering.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ExternalSearchResultItunes model module.
   * @module model/ExternalSearchResultItunes
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ExternalSearchResultItunes</code>.
   * @alias module:model/ExternalSearchResultItunes
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>ExternalSearchResultItunes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExternalSearchResultItunes} obj Optional instance to populate.
   * @return {module:model/ExternalSearchResultItunes} The populated <code>ExternalSearchResultItunes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('thumbnail_url')) {
        obj['thumbnail_url'] = ApiClient.convertToType(data['thumbnail_url'], 'String');
      }
      if (data.hasOwnProperty('preview_url')) {
        obj['preview_url'] = ApiClient.convertToType(data['preview_url'], 'String');
      }
      if (data.hasOwnProperty('album_name')) {
        obj['album_name'] = ApiClient.convertToType(data['album_name'], 'String');
      }
      if (data.hasOwnProperty('album_url')) {
        obj['album_url'] = ApiClient.convertToType(data['album_url'], 'String');
      }
      if (data.hasOwnProperty('artist_name')) {
        obj['artist_name'] = ApiClient.convertToType(data['artist_name'], 'String');
      }
      if (data.hasOwnProperty('artist_url')) {
        obj['artist_url'] = ApiClient.convertToType(data['artist_url'], 'String');
      }
      if (data.hasOwnProperty('track_number')) {
        obj['track_number'] = ApiClient.convertToType(data['track_number'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {String} thumbnail_url
   */
  exports.prototype['thumbnail_url'] = undefined;
  /**
   * @member {String} preview_url
   */
  exports.prototype['preview_url'] = undefined;
  /**
   * @member {String} album_name
   */
  exports.prototype['album_name'] = undefined;
  /**
   * @member {String} album_url
   */
  exports.prototype['album_url'] = undefined;
  /**
   * @member {String} artist_name
   */
  exports.prototype['artist_name'] = undefined;
  /**
   * @member {String} artist_url
   */
  exports.prototype['artist_url'] = undefined;
  /**
   * @member {Number} track_number
   */
  exports.prototype['track_number'] = undefined;



  return exports;
}));


