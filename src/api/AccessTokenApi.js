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
    define(['ApiClient', 'model/AccessToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccessToken'));
  } else {
    // Browser globals (root is window)
    if (!root.Aimastering) {
      root.Aimastering = {};
    }
    root.Aimastering.AccessTokenApi = factory(root.Aimastering.ApiClient, root.Aimastering.AccessToken);
  }
}(this, function(ApiClient, AccessToken) {
  'use strict';

  /**
   * AccessToken service.
   * @module api/AccessTokenApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccessTokenApi. 
   * @alias module:api/AccessTokenApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createAccessToken operation.
     * @callback module:api/AccessTokenApi~createAccessTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an API access token.
     * @param {module:api/AccessTokenApi~createAccessTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccessToken}
     */
    this.createAccessToken = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AccessToken;

      return this.apiClient.callApi(
        '/access_tokens', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
